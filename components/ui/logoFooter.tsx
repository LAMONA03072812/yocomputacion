import Link from 'next/link'

export default function LogoFooter() {
  return (
      <Link href="/" className="block" aria-label="Cruip">
          <img src="images/logofooter.png" width="50%" className="rounded mt-3  shadow-xl logo"
               alt="Herramientas tecnologicas"
               title="Herramientas tecnologicas"/>
      </Link>
  )
}
