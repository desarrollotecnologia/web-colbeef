/** Prefija rutas públicas con el base path de Vite (p. ej. /web-colbeef/ en GitHub Pages). */
export function assetUrl(path: string): string {
  const normalized = path.startsWith('/') ? path.slice(1) : path
  return `${import.meta.env.BASE_URL}${normalized}`
}
