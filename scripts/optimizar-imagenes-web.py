"""Optimiza imágenes pesadas de public/ para acelerar GitHub Pages.

- Convierte fotos/banners PNG grandes a JPEG (máx. 1920px, q=82)
- Recomprime JPG grandes
- Optimiza PNG con transparencia (sellos) sin cambiar formato
"""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageOps

REPO = Path(__file__).resolve().parents[1]
PUBLIC = REPO / "public"

# Fotos / banners (no necesitan transparencia) -> JPEG
TO_JPEG = [
    "assets/corporativo/nosotros/banner-nosotros.png",
    "assets/corporativo/nosotros/banner-final.png",
    "assets/corporativo/nosotros/foto-1.png",
    "assets/corporativo/nosotros/titulo-historia.png",
    "assets/corporativo/nosotros/historia-timeline.png",
    "assets/corporativo/filosofia/banner-filosofia.png",
    "assets/corporativo/filosofia/banner-familia.png",
    "assets/corporativo/filosofia/fondo-valores.png",
    "assets/corporativo/sostenibilidad/banner-sostenibilidad.png",
    "assets/corporativo/sostenibilidad/banner-construyendo.png",
    "assets/corporativo/sostenibilidad/foto-2.png",
    "assets/corporativo/certificaciones/banner-certificados.png",
    "assets/corporativo/certificaciones/banner-politica-ambiental.png",
    "assets/corporativo/gobierno/banner-gobierno.png",
    "assets/corporativo/gobierno/banner-denuncias.png",
    "assets/corporativo/gobierno/banner-canales.png",
    "assets/corporativo/gobierno/foto-3.png",
    "assets/images/horeca-banner.png",
]

# JPG ya existentes a recomprimir
RECOMPRESS_JPG = [
    "images/IMG_5280.JPG",
    "images/IMG_5282.JPG",
    "images/IMG_5288.JPG",
    "images/IMG_5289.JPG",
]

# PNG con transparencia / sellos: reducir tamaño visual y comprimir
OPTIMIZE_PNG = [
    "assets/corporativo/certificaciones/todos-certificados.png",
    "assets/corporativo/certificaciones/invima-sello.png",
]

MAX_WIDTH = 1920
JPEG_QUALITY = 82
PNG_MAX_WIDTH = 1200


def save_jpeg(src: Path, dest: Path) -> None:
    with Image.open(src) as im:
        im = ImageOps.exif_transpose(im).convert("RGB")
        if im.width > MAX_WIDTH:
            h = round(im.height * MAX_WIDTH / im.width)
            im = im.resize((MAX_WIDTH, h), Image.LANCZOS)
        dest.parent.mkdir(parents=True, exist_ok=True)
        im.save(dest, "JPEG", quality=JPEG_QUALITY, optimize=True, progressive=True)


def optimize_png(src: Path) -> None:
    with Image.open(src) as im:
        im = ImageOps.exif_transpose(im)
        if im.mode not in ("RGBA", "LA", "P"):
            im = im.convert("RGBA")
        elif im.mode == "P":
            im = im.convert("RGBA")
        if im.width > PNG_MAX_WIDTH:
            h = round(im.height * PNG_MAX_WIDTH / im.width)
            im = im.resize((PNG_MAX_WIDTH, h), Image.LANCZOS)
        # Guardar temporal y reemplazar
        tmp = src.with_suffix(".tmp.png")
        im.save(tmp, "PNG", optimize=True)
        tmp.replace(src)


def main() -> None:
    total_before = 0
    total_after = 0

    for rel in TO_JPEG:
        src = PUBLIC / rel
        if not src.exists():
            print("SKIP missing", rel)
            continue
        before = src.stat().st_size
        total_before += before
        dest = src.with_suffix(".jpg")
        save_jpeg(src, dest)
        after = dest.stat().st_size
        total_after += after
        src.unlink()
        print(f"JPEG  {before/1024:8.0f}KB -> {after/1024:6.0f}KB  {rel} -> {dest.name}")

    for rel in RECOMPRESS_JPG:
        src = PUBLIC / rel
        if not src.exists():
            print("SKIP missing", rel)
            continue
        before = src.stat().st_size
        total_before += before
        tmp = src.with_suffix(".tmp.jpg")
        save_jpeg(src, tmp)
        after = tmp.stat().st_size
        total_after += after
        # Mantener extensión original .JPG
        tmp.replace(src)
        print(f"JPG   {before/1024:8.0f}KB -> {after/1024:6.0f}KB  {rel}")

    for rel in OPTIMIZE_PNG:
        src = PUBLIC / rel
        if not src.exists():
            print("SKIP missing", rel)
            continue
        before = src.stat().st_size
        total_before += before
        optimize_png(src)
        after = src.stat().st_size
        total_after += after
        print(f"PNG   {before/1024:8.0f}KB -> {after/1024:6.0f}KB  {rel}")

    print(
        f"\nOptimizado: {total_before/1024/1024:.1f} MB -> {total_after/1024/1024:.1f} MB "
        f"(ahorro {(total_before-total_after)/1024/1024:.1f} MB)"
    )


if __name__ == "__main__":
    main()
