"""Borra los rótulos en inglés del mapa de cortes dejando las zonas de color intactas.

Dentro de las zonas de color hay dos elementos claros: el texto y las líneas divisorias.
Separarlos por color no funciona (el antialiasing del texto tiene el mismo tono beige que
las líneas), así que se separan por forma: las líneas forman una red enorme y conectada,
mientras que cada letra es una mancha pequeña y aislada rodeada de color plano.

Uso:
    python scripts/limpiar-mapa-cortes.py
"""

from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage

REPO = Path(__file__).resolve().parent.parent
CARPETA = REPO / 'public' / 'assets' / 'images' / 'cortes'
ARCHIVOS = [
    ('cortes-mapa-base.jpg', 'cortes-mapa-base-limpio.jpg'),
    ('cortes-mapa-overlay.jpg', 'cortes-mapa-overlay-limpio.jpg'),
]

MEDIAN_SIZE = 25
DILATE_SIZE = 7
MAX_GLIFO = 90  # px: una letra nunca es más grande que esto en ninguna dimensión
MARGEN = 9  # px de contorno que se inspecciona alrededor de cada mancha


def calcular_mascara(origen: Path) -> np.ndarray:
    image = Image.open(origen).convert('RGB')
    pixels = np.asarray(image).astype(np.int16)
    r, g, b = pixels[..., 0], pixels[..., 1], pixels[..., 2]

    rojo = (r > 140) & (r - g > 70) & (r - b > 70)
    verde = (g > 70) & (g - r > 25) & (g - b > 25)
    color = rojo | verde

    # La zona es el interior del color: cerrar tapa los huecos que deja el texto pegado
    # al borde, y rellenar convierte texto y líneas en parte de la silueta. Así la
    # limpieza nunca toca la foto de la res que hay fuera del área coloreada.
    zona = ndimage.binary_fill_holes(ndimage.binary_closing(color, structure=np.ones((15, 15))))

    # Todo lo claro que no es el color de fondo: texto + líneas divisorias.
    claro = zona & ~color & (r > 150) & (g > 110)

    etiquetas, total = ndimage.label(claro)
    texto = np.zeros_like(claro)

    for indice, corte in enumerate(ndimage.find_objects(etiquetas), start=1):
        alto = corte[0].stop - corte[0].start
        ancho = corte[1].stop - corte[1].start

        if alto > MAX_GLIFO or ancho > MAX_GLIFO:
            continue

        caja = (
            slice(max(corte[0].start - MARGEN, 0), corte[0].stop + MARGEN),
            slice(max(corte[1].start - MARGEN, 0), corte[1].stop + MARGEN),
        )
        mancha = etiquetas[caja] == indice
        contorno = ndimage.binary_dilation(mancha, np.ones((MARGEN, MARGEN))) & ~mancha

        # Una letra está rodeada de color plano; una mancha de la piel de la res, no.
        if color[caja][contorno].mean() > 0.55:
            texto[caja] |= mancha

    lineas = claro & ~texto

    mascara = Image.fromarray((texto * 255).astype(np.uint8)).filter(ImageFilter.MaxFilter(DILATE_SIZE))
    print(f'{origen.name}: {total} manchas analizadas, {texto.sum()} px de texto')

    return (np.asarray(mascara) > 0) & ~lineas


def limpiar(origen: Path, destino: Path, mascara: np.ndarray) -> None:
    image = Image.open(origen).convert('RGB')
    relleno = np.asarray(image.filter(ImageFilter.MedianFilter(MEDIAN_SIZE)))
    limpio = np.where(mascara[..., None], relleno, np.asarray(image))

    Image.fromarray(limpio.astype(np.uint8)).save(destino, 'JPEG', quality=90, optimize=True)
    print(f'  -> {destino.name}')


def main() -> None:
    base, _ = ARCHIVOS[0]

    # Ambas imágenes son el mismo dibujo con distinto tinte, así que los rótulos están
    # en los mismos píxeles. Detectarlos sobre la base (rojo plano y bien contrastado)
    # es más fiable que sobre el overlay, donde el verde se difumina en el cuello.
    mascara = calcular_mascara(CARPETA / base)

    for origen, destino in ARCHIVOS:
        limpiar(CARPETA / origen, CARPETA / destino, mascara)


if __name__ == '__main__':
    main()
