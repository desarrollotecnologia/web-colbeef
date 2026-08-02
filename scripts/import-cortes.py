"""Genera las fichas de cortes (fotos optimizadas + datos) desde la carpeta de fotos y el Excel.

Uso:
    python scripts/import-cortes.py "<carpeta FOTOS CORTES>"
"""

import re
import sys
import unicodedata
from pathlib import Path

import openpyxl
from PIL import Image, ImageOps

REPO = Path(__file__).resolve().parent.parent
OUT_IMAGES = REPO / 'public' / 'assets' / 'images' / 'cortes' / 'fichas'
OUT_DATA = REPO / 'src' / 'data' / 'cortesDetalle.ts'
PUBLIC_PREFIX = '/assets/images/cortes/fichas'

MAX_WIDTH = 1200
JPEG_QUALITY = 82


def slugify(value: str) -> str:
    ascii_value = unicodedata.normalize('NFKD', value).encode('ascii', 'ignore').decode()
    return re.sub(r'[^a-z0-9]+', '-', ascii_value.lower()).strip('-')


def folder_number(name: str) -> int | None:
    match = re.match(r'\s*(\d+)', name)
    return int(match.group(1)) if match else None


def read_rows(xlsx: Path) -> list[dict]:
    sheet = openpyxl.load_workbook(xlsx, data_only=True).worksheets[0]
    rows = []

    for raw in sheet.iter_rows(min_row=2, values_only=True):
        if raw[0] is None or raw[1] is None:
            continue

        rows.append(
            {
                'numero': int(float(raw[0])),
                'nombre': str(raw[1]).strip(),
                'categoria': str(raw[2] or '').strip(),
                'terneza': str(raw[3] or '').strip(),
                'descripcion': str(raw[4] or '').strip(),
                'tip': str(raw[5] or '').strip(),
            }
        )

    return rows


def pick_photo(folder: Path) -> Path | None:
    """Prefiere una toma horizontal para que la ficha no deje bandas negras."""
    photos = sorted(p for p in folder.iterdir() if p.suffix.lower() in {'.jpg', '.jpeg', '.png'})
    if not photos:
        return None

    horizontales: list[Path] = []
    verticales: list[Path] = []

    for photo in photos:
        with Image.open(photo) as img:
            img = ImageOps.exif_transpose(img)
            (horizontales if img.width >= img.height else verticales).append(photo)

    return (horizontales or verticales)[0]


def export_photo(folder: Path, slug: str) -> str | None:
    photo = pick_photo(folder)
    if photo is None:
        return None

    destination = OUT_IMAGES / f'{slug}.jpg'

    with Image.open(photo) as img:
        img = ImageOps.exif_transpose(img).convert('RGB')

        if img.width > MAX_WIDTH:
            height = round(img.height * MAX_WIDTH / img.width)
            img = img.resize((MAX_WIDTH, height), Image.LANCZOS)

        img.save(destination, 'JPEG', quality=JPEG_QUALITY, optimize=True, progressive=True)

    return f'{PUBLIC_PREFIX}/{slug}.jpg'


def ts_string(value: str) -> str:
    return "'" + value.replace('\\', '\\\\').replace("'", "\\'") + "'"


def render_data(cortes: list[dict]) -> str:
    entries = []

    for corte in cortes:
        imagen = ts_string(corte['imagen']) if corte['imagen'] else 'null'
        entries.append(
            '  {\n'
            f"    slug: {ts_string(corte['slug'])},\n"
            f"    nombre: {ts_string(corte['nombre'])},\n"
            f"    categoria: {ts_string(corte['categoria'])},\n"
            f"    terneza: {ts_string(corte['terneza'])},\n"
            f"    descripcion: {ts_string(corte['descripcion'])},\n"
            f"    tip: {ts_string(corte['tip'])},\n"
            f'    imagen: {imagen},\n'
            '  },'
        )

    return (
        '/* Generado por scripts/import-cortes.py a partir de "CORTES DE CARNES.xlsx". */\n'
        '\n'
        'export interface CorteDetalle {\n'
        '  slug: string\n'
        '  nombre: string\n'
        '  /** Usos culinarios recomendados. */\n'
        '  categoria: string\n'
        '  terneza: string\n'
        '  descripcion: string\n'
        '  tip: string\n'
        '  /** Ruta pública de la foto; null mientras no haya foto del corte. */\n'
        '  imagen: string | null\n'
        '}\n'
        '\n'
        'export const cortesDetalle: CorteDetalle[] = [\n'
        + '\n'.join(entries)
        + '\n]\n'
        '\n'
        'export const cortesDetallePorSlug: Record<string, CorteDetalle> = Object.fromEntries(\n'
        '  cortesDetalle.map((corte) => [corte.slug, corte]),\n'
        ')\n'
    )


def main() -> None:
    source = Path(sys.argv[1])
    xlsx = next(source.glob('*.xlsx'))

    OUT_IMAGES.mkdir(parents=True, exist_ok=True)

    folders = {
        folder_number(p.name): p for p in source.iterdir() if p.is_dir() and folder_number(p.name)
    }

    cortes = []
    for row in read_rows(xlsx):
        slug = slugify(row['nombre'])
        folder = folders.get(row['numero'])
        imagen = export_photo(folder, slug) if folder else None

        cortes.append({**row, 'slug': slug, 'imagen': imagen})
        print(f"{row['numero']:>3}  {slug:<28} {'foto ok' if imagen else 'SIN FOTO'}")

    OUT_DATA.write_text(render_data(cortes), encoding='utf-8')
    print(f'\n{len(cortes)} cortes -> {OUT_DATA.relative_to(REPO)}')


if __name__ == '__main__':
    main()
