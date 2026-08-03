"""Regenera favicons de Colbeef con buena calidad y rutas listas para GitHub Pages."""

from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image, ImageOps

REPO = Path(__file__).resolve().parents[1]
OUT = REPO / "public"

CANDIDATES = [
    REPO / "public/assets/brand/logo-favicon-source.png",
    REPO / "public/assets/brand/logo-colbeef-transparent.png",
]


def load_logo() -> Image.Image:
    origen = next((p for p in CANDIDATES if p.exists()), None)
    if origen is None:
        raise FileNotFoundError("No se encontró el logo fuente para favicon")

    im = ImageOps.exif_transpose(Image.open(origen)).convert("RGBA")
    arr = np.asarray(im.convert("RGB")).astype(int)
    mask = (arr < 248).any(axis=-1)
    ys, xs = np.nonzero(mask)
    return im.crop((int(xs.min()), int(ys.min()), int(xs.max()) + 1, int(ys.max()) + 1))


def make_square(src: Image.Image, size: int, pad_ratio: float = 0.14) -> Image.Image:
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

    icons = [make_square(cropped, s).convert("RGBA") for s in (16, 32, 48, 64)]
    ico = OUT / "favicon.ico"
    icons[0].save(
        ico,
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48), (64, 64)],
        append_images=icons[1:],
    )
    print(f"favicon.ico: {ico.stat().st_size} B")
    # Sin favicon.svg: el cache del SVG de Vite es muy persistente.


if __name__ == "__main__":
    main()
