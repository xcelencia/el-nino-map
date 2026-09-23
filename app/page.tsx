import LandingPage from '@/components/LandingPage'
import { MapProvider } from '@/providers/MapProvider'
import { TipProvider } from '@/providers/TipProvider'
import OnBoarding from '@/components/OnBoarding'
import { Metadata } from 'next'
import { APP_URL } from '@/lib/consts'

const TITLE = 'El Niño Maravilla Pt. 1'
const DESCRIPTION = `El Niño Maravilla is the debut album by xcelencia, showcasing a unique blend of Latin
urban and pop sounds. This project brings together a talented team of designers,
developers, and producers to create a groundbreaking musical experience.`

export const revalidate = 300

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [`${APP_URL}/favicon.png`],
  },
}

const Page = () => (
  <TipProvider>
    <MapProvider>
      <LandingPage />
      <OnBoarding />
    </MapProvider>
  </TipProvider>
)

export default Page
