import { usePurchaseProvider } from '@/providers/PurchaseProvider'
import { useTipProvider } from '@/providers/TipProvider'
import { Fragment, useEffect } from 'react'
import useIsMobile from '@/hooks/useIsMobile'
import Icon from '../Icon'
import NFTDisplay from './NFTDisplay'
import PreviewContainer from './PreviewContainer'

const Preview = () => {
  const { tooltipId, closeTooltip } = useTipProvider()
  const { mint, purchasing, isOpenCollect, isCrossmintOpen } = usePurchaseProvider()
  const isMobile = useIsMobile()

  useEffect(() => {
    if (isCrossmintOpen) closeTooltip()
    // eslint-disable-next-line
  }, [isCrossmintOpen])

  if (tooltipId !== 'mint' || isCrossmintOpen) return <Fragment />
  if (isMobile && !isOpenCollect) return <Fragment />

  return (
    <PreviewContainer>
      <main className="bg-gray-800 p-2 rounded-lg flex flex-col items-center relative border border-gray-700 max-w-xs mt-10">
        <NFTDisplay />
        <button
          disabled={purchasing}
          type="button"
          onClick={mint}
          className="w-full py-3 bg-blue-600 text-white font-bold flex items-center justify-center gap-2 hover:bg-blue-700 disabled:opacity-50"
        >
          <Icon name="white-star" />
          <span>{purchasing ? 'Collecting...' : 'Collect Maravilla Gallery Pass'}</span>
        </button>
      </main>
    </PreviewContainer>
  )
}

export default Preview
