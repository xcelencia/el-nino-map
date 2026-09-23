'use client'

import { useState } from 'react'
import Modals from './Modals'
import { useMapProvider } from '@/providers/MapProvider'
import Tooltip from './Tooltip'
import getTooltipText from '@/lib/getTooltipText'
import calculateScaledSize from '@/lib/calculateScaledSize'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import ImageMapper from 'react-img-mapper'
import useMapImage from '@/hooks/useMapImage'
import { useTipProvider } from '@/providers/TipProvider'
import { BACKGROUND_PLACEHOLDER, PULSATING_COLORS } from '@/lib/consts'

const LandingPage = () => {
  const { isVisibleToolTip, tooltipX, tooltipY, tooltipId, width, height, imageRef } =
    useTipProvider()

  const { clickMap, handleMouseMove, area } = useMapProvider()
  const mapImage = useMapImage()
  const [pulsatingCenter, setPulsatingCenter] = useState<{ x: number; y: number } | undefined>(
    undefined,
  )
  const handleMoseMoveWithPosition = (e: React.MouseEvent<HTMLDivElement>) => {
    const centerCoords = handleMouseMove(e)
    if (centerCoords) {
      setPulsatingCenter(centerCoords)
      return
    }
    setPulsatingCenter(undefined)
  }
  return (
    <div id="container">
      <TransformWrapper
        initialScale={1.1}
        centerOnInit
        onZoom={(ref) => mapImage.handleZoom(ref.state.scale)}
      >
        <TransformComponent
          contentProps={{
            onMouseMove: handleMoseMoveWithPosition,
            onClick: clickMap,
          }}
          wrapperClass="!w-screen !h-screen !overflow-hidden bg-[#151264] bg-cover bg-center"
          wrapperStyle={{
            backgroundImage: `url('/images/background.webp'), url('${BACKGROUND_PLACEHOLDER}')`,
          }}
        >
          <div ref={imageRef} className="size-full relative">
            <ImageMapper
              src={mapImage.src}
              map={mapImage.map}
              responsive
              parentWidth={calculateScaledSize(width, height).width}
            />
            {pulsatingCenter && imageRef.current && (
              <div
                className="absolute rounded-full animate-glow pointer-events-none opacity-[0.6] blur-[25px] w-[200px] h-[200px]"
                style={{
                  left: (pulsatingCenter.x / 8000) * calculateScaledSize(width, height).width - 100,
                  top: (pulsatingCenter.y / 4500) * calculateScaledSize(width, height).height - 100,
                  background: PULSATING_COLORS[area as keyof typeof PULSATING_COLORS] || 'default',
                }}
              />
            )}
          </div>
        </TransformComponent>
      </TransformWrapper>
      {isVisibleToolTip && tooltipId && (
        <Tooltip text={getTooltipText(tooltipId as string)} x={tooltipX} y={tooltipY} />
      )}
      <Modals />
    </div>
  )
}

export default LandingPage
