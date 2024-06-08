import Link from 'next/link'

export default function Logo() {
  return (
      <Link href="/" className="block" aria-label="Cruip">
          <img src="images/logotipo.jpg" width="19%" className="rounded mt-3  shadow-xl logo"
               alt="Herramientas tecnologicas"
               title="Herramientas tecnologicas"/>
      </Link>
  )
}
