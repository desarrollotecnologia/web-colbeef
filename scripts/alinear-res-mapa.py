"""Alinea la foto limpia de la res con el encuadre del mapa de cortes original.

Los clip-paths de src/data/cortesMap.ts se trazaron sobre cortes-mapa-base.jpg.
Este script reencuadra la foto sin tinte rojo para que la silueta del animal
quede en las mismas coordenadas y los polígonos sigan calzando.
"""

from pathlib import Path

import numpy as np
from PIL import Image

RAIZ = Path(__file__).resolve().parents[1]
CORTES = RAIZ / "public/assets/images/cortes"

REFERENCIA = CORTES / "cortes-mapa-base.jpg"
ORIGEN = RAIZ / "scripts/fuentes/res-brahman.png"
DESTINO = CORTES / "cortes-mapa-res.jpg"


def caja_silueta(img: Image.Image) -> tuple[int, int, int, int]:
    datos = np.asarray(img.convert("RGB")).astype(int)
    mascara = datos.sum(axis=-1) < 700
    ys, xs = np.nonzero(mascara)

    return int(xs.min()), int(ys.min()), int(xs.max()) + 1, int(ys.max()) + 1


def main() -> None:
    referencia = Image.open(REFERENCIA)
    origen = Image.open(ORIGEN).convert("RGB")

    rx0, ry0, rx1, ry1 = caja_silueta(referencia)
    ox0, oy0, ox1, oy1 = caja_silueta(origen)

    res = origen.crop((ox0, oy0, ox1, oy1)).resize(
        (rx1 - rx0, ry1 - ry0), Image.LANCZOS
    )

    lienzo = Image.new("RGB", referencia.size, "white")
    lienzo.paste(res, (rx0, ry0))
    lienzo.save(DESTINO, quality=88, optimize=True, progressive=True)

    print(f"{DESTINO.name} {lienzo.size} — {DESTINO.stat().st_size // 1024} KB")


if __name__ == "__main__":
    main()
