import Portal from '@components/Portal/Portal'
import Overlay from '@ui/Overlay/Overlay'
import Button from '@ui/Button/Button'
import FlyoutCss from './Flyout.module.scss'

const Flyout = ({ isOpen, closeFlyout }: any): any => {
  if (!isOpen) return null
  return (
    <Portal>
      <>
        <Overlay onHandleOverlayClick={closeFlyout} />
        <div className={FlyoutCss.flyout}>
          <Button onClick={closeFlyout}>X</Button>
          {/*  FLyout ::TODO me pls :( */}
        </div>
      </>
    </Portal>
  )
}

export default Flyout
