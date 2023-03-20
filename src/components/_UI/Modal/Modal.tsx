import Portal from '@components/Portal/Portal'
import Overlay from '@ui/Overlay/Overlay'
import Button from '@ui/Button/Button'
import ModalCss from './Modal.module.scss'

interface IModalProps {
  active?: boolean
  children?: JSX.Element
  closeModal: (b: boolean) => void
}

const Modal = ({
  active,
  closeModal,
  children,
}: IModalProps): JSX.Element | null => {
  if (!active) return null
  return (
    <Portal>
      <>
        <Overlay onHandleOverlayClick={closeModal} />
        <div className={ModalCss.modal}>
          {children}
          {/*           <Button onClick={() => setActive(false)}>
            <span>Close</span>
          </Button> */}
        </div>
      </>
    </Portal>
  )
}

export default Modal
