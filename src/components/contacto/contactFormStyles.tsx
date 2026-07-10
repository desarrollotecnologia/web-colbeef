import { Link } from 'react-router-dom'
import { contactoPrivacyText } from '../../data/contacto'

export const contactUnderlineInputClass =
  'w-full bg-transparent border-0 border-b border-gray-300 rounded-none px-0 py-2.5 text-sm text-colbeef-dark placeholder:text-colbeef-gray/70 focus:border-colbeef-green focus:outline-none focus:ring-0 transition-colors'

export const contactTextareaClass =
  'w-full min-h-[140px] bg-gray-100 border-0 rounded-md px-4 py-3 text-sm text-colbeef-dark placeholder:text-colbeef-gray/70 focus:outline-none focus:ring-2 focus:ring-colbeef-green/25 resize-y'

export const contactSubmitClass =
  'inline-flex items-center justify-center bg-colbeef-green text-white px-8 py-3 rounded-full text-sm font-semibold tracking-widest uppercase hover:bg-colbeef-green-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed'

export function ContactPrivacyCheckbox({
  checked,
  onChange,
  id = 'contacto-privacy',
}: {
  checked: boolean
  onChange: (value: boolean) => void
  id?: string
}) {
  return (
    <label htmlFor={id} className="flex items-start gap-2.5 cursor-pointer">
      <input
        id={id}
        type="checkbox"
        required
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-4 h-4 mt-0.5 accent-colbeef-green shrink-0"
      />
      <span className="text-[11px] sm:text-xs text-colbeef-gray leading-relaxed">
        {contactoPrivacyText}{' '}
        <Link
          to="/corporativo/gobierno-corporativo"
          className="text-colbeef-green font-semibold underline"
        >
          Ver política
        </Link>
        .
      </span>
    </label>
  )
}
