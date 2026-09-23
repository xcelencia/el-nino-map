import { useState } from 'react'
import useAreaDetection from './useAreaDetection'

interface Laylo {
  openPopup: (options: {
    id: string
    minimal: boolean
    customCTA: string
    color: string
    theme: string
    background: string
    fullWidth: boolean
    secondsToWait: number
  }) => void
}

declare global {
  interface Window {
    laylo?: Laylo
  }
}

const useMap = () => {
  const [isMusicOpen, setIsMusicOpen] = useState(false)
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false)
  const [isPlannetOpen, setIsPlannetOpen] = useState(false)
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false)
  const { handleMouseMove, area } = useAreaDetection()

  const clickMap = () => {
    if (area === 'music') setIsMusicOpen(!isMusicOpen)
    if (area === 'video') setIsVideoOpen(!isVideoOpen)
    if (area === 'merch') window.open('http://laequis.shop/', '_blank')
    if (area === 'live-show') setIsComingSoonOpen(!isComingSoonOpen)
    if (area === 'subscribe') setIsSubscribeOpen(!isSubscribeOpen)
    if (area === 'plannet') setIsPlannetOpen(true)
  }

  return {
    clickMap,
    isMusicOpen,
    setIsMusicOpen,
    isVideoOpen,
    setIsVideoOpen,
    isSubscribeOpen,
    setIsSubscribeOpen,
    isPlannetOpen,
    setIsPlannetOpen,
    isComingSoonOpen,
    setIsComingSoonOpen,
    handleMouseMove,
    area,
  }
}

export default useMap
