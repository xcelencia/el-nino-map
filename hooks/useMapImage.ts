import { useCallback, useEffect, useMemo, useState } from 'react'
import map from '@/lib/image-map.json'

// Map coords in image-map.json are authored against the full 8000px artwork.
const FULL = { src: '/images/map-elements.webp', width: 8000 }
const MEDIUM = { src: '/images/map-elements-3840.webp', width: 3840 }
const SMALL = { src: '/images/map-elements-2560.webp', width: 2560 }

// Start with a screen-sized, lossless version and upgrade to the full artwork on zoom.
const useMapImage = () => {
  const [image, setImage] = useState(SMALL)
  const [wantsFull, setWantsFull] = useState(false)

  useEffect(() => {
    if (window.innerWidth * window.devicePixelRatio > 3000) setImage(MEDIUM)
  }, [])

  useEffect(() => {
    if (!wantsFull || image === FULL) return
    const img = new Image()
    img.src = FULL.src
    img
      .decode()
      .then(() => setImage(FULL))
      .catch(() => {})
  }, [wantsFull, image])

  const handleZoom = useCallback((scale: number) => {
    if (scale > 1.5) setWantsFull(true)
  }, [])

  const scaledMap = useMemo(() => {
    const ratio = image.width / FULL.width
    return {
      ...map,
      areas: map.areas.map((a) => ({ ...a, coords: a.coords.map((c) => c * ratio) })),
    }
  }, [image])

  return { src: image.src, map: scaledMap, handleZoom }
}

export default useMapImage
