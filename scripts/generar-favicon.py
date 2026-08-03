"""Regenera favicons desde el logo oficial de Colbeef."""

from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image, ImageOps

REPO = Path(__file__).resolve().parents[1]
OUT = REPO / "public"
LOGO = REPO / "public/assets/brand/logo-colbeef-transparent.png"


def load_logo() -> Image.Image:
    if not LOGO.exists():
        raise FileNotFoundError(f"No se encontró el logo: {LOGO}")

    im = ImageOps.exif_transpose(Image.open(LOGO)).convert("RGBA")
    arr = np.asarray(im)
    alpha = arr[:, :, 3]
    rgb = arr[:, :, :3].astype(int)
    # Contenido: píxeles visibles (no fondo negro/transparente)
    mask = (alpha > 20) & ((rgb > 25).any(axis=-1))
    ys, xs = np.nonzero(mask)
    if len(xs) == 0:
        raise ValueError("El logo no tiene contenido visible")
    return im.crop((int(xs.min()), int(ys.min()), int(xs.max()) + 1, int(ys.max()) + 1))


def make_square(src: Image.Image, size: int, pad_ratio: float = 0.12) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), (255, 255, 255, 255))
    max_inner = int(size * (1 - 2 * pad_ratio))
    w, h = src.size
    scale = min(max_inner / w, max_inner / h)
    nw, nh = max(1, round(w * scale)), max(1, round(h * scale))
    resized = src.resize((nw, nh), Image.Resampling.LANCZOS)
    x = (size - nw) // 2
    y = (size - nh) // 2
    canvas.paste(resized, (x, y), resized)
    return canvas


def main() -> None:
    cropped = load_logo()
    print("origen", LOGO.name)
    print("logo", cropped.size)

    sizes = {
        "favicon-32x32.png": 32,
        "favicon-48x48.png": 48,
        "favicon-64x64.png": 64,
        "favicon-192x192.png": 192,
        "apple-touch-icon.png": 180,
        "favicon.png": 48,
    }

    for name, size in sizes.items():
        path = OUT / name
        make_square(cropped, size).convert("RGB").save(path, "PNG", optimize=True)
        print(f"{name}: {path.stat().st_size} B")

    # ICO multi-size de Pillow a veces queda vacío; un 32px sólido es confiable
    ico = OUT / "favicon.ico"
    make_square(cropped, 32).convert("RGBA").save(ico, format="ICO", sizes=[(32, 32)])
    print(f"favicon.ico: {ico.stat().st_size} B")


if __name__ == "__main__":
    main()
