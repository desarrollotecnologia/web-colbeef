import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { icons } from '../../data/assets'
import { searchSite } from '../../data/searchIndex'

interface HeaderSearchProps {
  className?: string
  onNavigate?: () => void
}

function SearchResults({
  query,
  results,
  onSelect,
}: {
  query: string
  results: ReturnType<typeof searchSite>
  onSelect: () => void
}) {
  return (
    <ul className="max-h-72 overflow-y-auto py-1">
      {results.length > 0 ? (
        results.map((result) => (
          <li key={result.id}>
            <Link
              to={result.href}
              onClick={onSelect}
              className="block px-4 py-2.5 hover:bg-colbeef-green-pale transition-colors"
            >
              <span className="block text-xs font-bold text-colbeef-green uppercase tracking-wide">
                {result.title}
              </span>
              <span className="block text-[11px] text-colbeef-gray line-clamp-2 mt-0.5">
                {result.excerpt}
              </span>
            </Link>
          </li>
        ))
      ) : (
        <li className="px-4 py-5 text-xs text-colbeef-gray text-center">
          No se encontraron resultados para &ldquo;{query}&rdquo;
        </li>
      )}
    </ul>
  )
}

export function HeaderSearch({ className = '', onNavigate }: HeaderSearchProps) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const desktopInputRef = useRef<HTMLInputElement>(null)
  const mobileInputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const mobileBarRef = useRef<HTMLDivElement>(null)
  const results = searchSite(query)
  const hasQuery = Boolean(query.trim())

  useEffect(() => {
    if (!open) {
      setQuery('')
      return
    }

    const t = setTimeout(() => {
      const isMobile = window.matchMedia('(max-width: 1023px)').matches
      if (isMobile) {
        mobileInputRef.current?.focus()
      } else {
        desktopInputRef.current?.focus()
      }
    }, 150)

    return () => clearTimeout(t)
  }, [open])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node
      const insideDesktop = containerRef.current?.contains(target)
      const insideMobile = mobileBarRef.current?.contains(target)
      if (!insideDesktop && !insideMobile) {
        setOpen(false)
      }
    }
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const handleSelect = () => {
    setOpen(false)
    setQuery('')
    onNavigate?.()
  }

  const inputClassName =
    'w-full px-3 py-2 text-sm border-b-2 border-colbeef-green bg-transparent focus:outline-none placeholder:text-colbeef-gray/60'

  return (
    <>
      <div ref={containerRef} className={`relative flex items-center shrink-0 ${className}`}>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 'auto', opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="hidden lg:block overflow-hidden mr-2"
            >
              <input
                ref={desktopInputRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar..."
                className="w-52 xl:w-64 px-3 py-1.5 text-sm border-b-2 border-colbeef-green bg-transparent focus:outline-none placeholder:text-colbeef-gray/60"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="w-9 h-9 shrink-0 flex items-center justify-center hover:opacity-80 transition-opacity"
          aria-label={open ? 'Cerrar búsqueda' : 'Buscar'}
          aria-expanded={open}
        >
          <img src={icons.search} alt="" className="w-7 h-7 object-contain" />
        </button>

        <AnimatePresence>
          {open && hasQuery && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="hidden lg:block absolute right-0 top-full mt-2 z-50 w-[min(92vw,360px)] bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
            >
              <SearchResults query={query} results={results} onSelect={handleSelect} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={mobileBarRef}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed left-0 right-0 top-[var(--header-height)] z-50 bg-white border-b border-gray-100 shadow-sm px-4 py-3"
          >
            <input
              ref={mobileInputRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar en Colbeef..."
              className={inputClassName}
            />

            {hasQuery && (
              <div className="mt-2 bg-white rounded-xl border border-gray-100 overflow-hidden shadow-lg">
                <SearchResults query={query} results={results} onSelect={handleSelect} />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
