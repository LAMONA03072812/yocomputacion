export const metadata = {
  title: 'Yo Computacion - Herramientas tecnologicas',
  description: 'Herramientas tecnologicas',
}

import Hero from '@/components/hero'
import FeaturesBlocks from '@/components/features-blocks'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesBlocks />
    </>
  )
}
