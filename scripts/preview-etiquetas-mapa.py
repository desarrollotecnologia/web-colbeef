"""Dibuja los nombres en español sobre el mapa limpio para revisar dónde caen.

Solo genera una vista previa; las etiquetas reales se pintan con HTML en la web.
Los ajustes de ETIQUETAS son los mismos valores que luego se copian a cortesMap.ts.
"""

import re
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

REPO = Path(__file__).resolve().parent.parent
MAPA = REPO / 'public' / 'assets' / 'images' / 'cortes' / 'cortes-mapa-base-limpio.jpg'
DATOS = REPO / 'src' / 'data' / 'cortesMap.ts'
OUTPUT = REPO / 'scripts' / '_preview-etiquetas.png'
FONT = Path('C:/Windows/Fonts/arialbd.ttf')

# nombre -> (dx%, dy%, rotación, tamaño relativo)
ETIQUETAS = {
    'Punta de anca': (1.5, 1.0, 0, 0.85),
    'Cadera con cola': (0.5, 2.0, 0, 0.85),
    'Lomo angosto': (0, 0, 0, 1),
    'Lomo ancho': (0, 0, 0, 1),
    'Lomo fino': (2.0, 0, 0, 0.9),
    'Colita de cadera': (1.0, 0, -90, 0.7),
    'Bota': (-0.5, 2.0, -90, 0.8),
    'Muchacho': (0, 2.0, -90, 0.8),
    'Centro de pierna': (0.3, 3.0, -90, 0.75),
    'Bola de pierna': (-1.0, 1.5, 0, 0.9),
    'Sobrebarriga delgada': (1.0, 3.0, 0, 0.75),
    'Costilla': (0, 1.0, 0, 0.9),
    'Bola de brazo': (0, 0, -90, 0.7),
    'Lomo de brazo': (0, 0, -90, 0.7),
    'Paletero externo': (0, 0, -90, 0.62),
    'Paletero interno': (0.5, 0, -90, 0.62),
    'Pecho': (0, 0, 0, 0.9),
    'Cogote': (1.5, 0, 0, 0.9),
    'Descargue': (0, 1.0, 0, 0.85),
    'Morro': (0, 0, 0, 0.9),
    'Murillo trasero': (2.5, -1.0, 0, 0.8),
    'Murillo delantero': (-1.0, -1.5, 0, 0.8),
}

BASE_SIZE = 15


def centroide(clip_path: str) -> tuple[float, float]:
    inner = clip_path[clip_path.index('(') + 1 : clip_path.rindex(')')]
    puntos = [tuple(float(v.strip('% ')) for v in par.strip().split()) for par in inner.split(',')]

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


def pegar_texto(base: Image.Image, texto: str, centro: tuple[float, float], rotacion: int, size: int) -> None:
    font = ImageFont.truetype(str(FONT), size)
    caja = ImageDraw.Draw(base).textbbox((0, 0), texto, font=font, stroke_width=3)
    capa = Image.new('RGBA', (caja[2] - caja[0] + 8, caja[3] - caja[1] + 8), (0, 0, 0, 0))
    ImageDraw.Draw(capa).text(
        (4 - caja[0], 4 - caja[1]),
        texto,
        font=font,
        fill=(255, 255, 255, 255),
        stroke_width=3,
        stroke_fill=(150, 25, 20, 190),
    )

    if rotacion:
        capa = capa.rotate(rotacion, expand=True, resample=Image.BICUBIC)

    base.paste(capa, (int(centro[0] - capa.width / 2), int(centro[1] - capa.height / 2)), capa)


fuente_ts = DATOS.read_text(encoding='utf-8')
areas = re.findall(r"name: '([^']+)',(?:.*?)clipPath:\s*\n?\s*'([^']+)'", fuente_ts, re.S)

imagen = Image.open(MAPA).convert('RGBA')
vistos = set()

for nombre, clip in areas:
    if nombre in vistos:
        continue
    vistos.add(nombre)

    dx, dy, rot, escala = ETIQUETAS.get(nombre, (0, 0, 0, 1))
    x, y = centroide(clip)
    centro = ((x + dx) / 100 * imagen.width, (y + dy) / 100 * imagen.height)

    pegar_texto(imagen, nombre.upper(), centro, rot, max(9, round(BASE_SIZE * escala)))

imagen.convert('RGB').save(OUTPUT)
print(f'{len(vistos)} etiquetas -> {OUTPUT.relative_to(REPO)}')
