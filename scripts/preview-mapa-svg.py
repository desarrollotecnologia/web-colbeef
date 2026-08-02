"""Vista previa del mapa de cortes sobre la foto limpia de la res.

Dibuja las zonas de src/data/cortesMap.ts con relleno verde translucido, sus
divisiones y los rotulos en espanol, para revisar el calce sin abrir el sitio.
"""

import json
import re
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

RAIZ = Path(__file__).resolve().parents[1]
MAPA_TS = RAIZ / "src/data/cortesMap.ts"
FOTO = RAIZ / "public/assets/images/cortes/cortes-mapa-res.jpg"
SALIDA = RAIZ / "scripts/salida/preview-mapa-svg.png"

VERDE = (20, 87, 45)
FUENTE = r"C:\Windows\Fonts\arialbd.ttf"

# Zona resaltada en la vista previa, como si el cursor estuviera encima.
ACTIVA = "Lomo ancho"


def leer_areas() -> list[dict]:
    texto = MAPA_TS.read_text(encoding="utf-8")
    bloque = texto.split("export const cortesMapAreas")[1]
    areas = []

    for crudo in bloque.split("    id: '")[1:]:
        nombre = re.search(r"name: '([^']+)'", crudo).group(1)
        clip = re.search(r"polygon\(([^)]*)\)", crudo).group(1)
        etiqueta = re.search(r"label: \{([^}]*)\}", crudo)
        ajustes = {}

        if etiqueta:
            for clave, valor in re.findall(r"(\w+): (-?[\d.]+)", etiqueta.group(1)):
                ajustes[clave] = float(valor)

        puntos = [
            tuple(float(v.rstrip("%")) for v in par.split())
            for par in clip.split(",")
        ]
        areas.append({"name": nombre, "puntos": puntos, "label": ajustes})

    return areas


def centroide(puntos: list[tuple[float, float]]) -> tuple[float, float]:
    area = cx = cy = 0.0

    for i, (x0, y0) in enumerate(puntos):
        x1, y1 = puntos[(i + 1) % len(puntos)]
        cruz = x0 * y1 - x1 * y0
        area += cruz
        cx += (x0 + x1) * cruz
        cy += (y0 + y1) * cruz

    if abs(area) < 1e-6:
        return (
            sum(p[0] for p in puntos) / len(puntos),
            sum(p[1] for p in puntos) / len(puntos),
        )

    return cx / (3 * area), cy / (3 * area)


def main() -> None:
    SALIDA.parent.mkdir(parents=True, exist_ok=True)
    base = Image.open(FOTO).convert("RGBA")
    ancho, alto = base.size
    areas = leer_areas()

    capa = Image.new("RGBA", base.size, (0, 0, 0, 0))
    dibujo = ImageDraw.Draw(capa)

    for area in areas:
        pixeles = [(x / 100 * ancho, y / 100 * alto) for x, y in area["puntos"]]
        dibujo.polygon(pixeles, fill=(*VERDE, 36), outline=(*VERDE, 140), width=2)

        if area["name"] == ACTIVA:
            dibujo.polygon(pixeles, fill=(*VERDE, 158), outline=(255, 255, 255, 255), width=3)

    compuesta = Image.alpha_composite(base, capa)
    texto = ImageDraw.Draw(compuesta)
    vistos = set()

    for area in areas:
        if area["name"] in vistos:
            continue
        vistos.add(area["name"])

        ajustes = area["label"]
        cx, cy = centroide(area["puntos"])
        cx += ajustes.get("dx", 0)
        cy += ajustes.get("dy", 0)
        escala = ajustes.get("scale", 1)
        rotar = ajustes.get("rotate", 0)
        tam = max(9, round(1.6 * escala / 100 * ancho))
        fuente = ImageFont.truetype(FUENTE, tam)
        etiqueta = area["name"].upper()
        color = (255, 255, 255) if area["name"] == ACTIVA else VERDE

        if rotar:
            caja = fuente.getbbox(etiqueta)
            sello = Image.new("RGBA", (caja[2] + 6, caja[3] + 6), (0, 0, 0, 0))
            ImageDraw.Draw(sello).text((3, 3), etiqueta, font=fuente, fill=color)
            sello = sello.rotate(-rotar, expand=True, resample=Image.BICUBIC)
            compuesta.alpha_composite(
                sello,
                (
                    round(cx / 100 * ancho - sello.width / 2),
                    round(cy / 100 * alto - sello.height / 2),
                ),
            )
        else:
            texto.text(
                (cx / 100 * ancho, cy / 100 * alto),
                etiqueta,
                font=fuente,
                fill=color,
                anchor="mm",
            )

    compuesta.convert("RGB").save(SALIDA)
    print(SALIDA)
    print(json.dumps([a["name"] for a in areas], ensure_ascii=False))


if __name__ == "__main__":
    main()
