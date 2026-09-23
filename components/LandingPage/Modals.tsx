import { useMapProvider } from '@/providers/MapProvider'
import Subscribe from '../Subscribe'
import MusicPlayer from './MusicPlayer'
import Video from '../Video'
import DraggableModal from '../DraggableModal'
import SMS from '../SMS'
import ComingSoon from '../ComingSoon'

const Modals = () => {
  const {
    isSubscribeOpen,
    setIsSubscribeOpen,
    isMusicOpen,
    isVideoOpen,
    setIsVideoOpen,
    setIsMusicOpen,
    isComingSoonOpen,
    setIsComingSoonOpen,
  } = useMapProvider()

  return (
    <>
      {isSubscribeOpen && <Subscribe onClose={() => setIsSubscribeOpen(false)} />}
      {isMusicOpen && (
        <DraggableModal handleClose={() => setIsMusicOpen(!isMusicOpen)}>
          <MusicPlayer />
        </DraggableModal>
      )}
      {isVideoOpen && <Video onClose={() => setIsVideoOpen(!isVideoOpen)} />}
      <SMS />
      {isComingSoonOpen && <ComingSoon onClose={() => setIsComingSoonOpen(!isComingSoonOpen)} />}
    </>
  )
}

export default Modals
