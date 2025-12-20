import { usePurchaseProvider } from '@/providers/PurchaseProvider'
import { useTipProvider } from '@/providers/TipProvider'
import { ReactNode } from 'react'
import useIsMobile from '@/hooks/useIsMobile'
import Modal from '../Modal'

const PreviewContainer = ({ children }: { children: ReactNode }) => {
  const { setIsOpenCollect, isOpenCollect } = usePurchaseProvider()
  const isMobile = useIsMobile()
  const { tooltipX, tooltipY } = useTipProvider()

  if (isMobile)
    return (
      <Modal onClose={() => setIsOpenCollect(false)} open={isOpenCollect}>
        {children}
      </Modal>
    )

  return (
    <div
      className="fixed z-[9999] w-screen h-screen md:size-fit flex justify-center items-center"
      style={{
        left: isMobile ? 0 : tooltipX,
        top: isMobile ? 0 : tooltipY - 350,
      }}
    >
      {children}
    </div>
  )
}

export default PreviewContainer
