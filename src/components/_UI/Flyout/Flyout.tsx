import Portal from '@components/Portal/Portal'
import Overlay from '@ui/Overlay/Overlay'
import Button from '@ui/Button/Button'
import InlineSVG from "react-inlinesvg";
import productActionGroupCss
  from "@pages/Home/sections/Shop/Goods/ProductCard/ProductActionGroup/ProductActionGroup.module.scss";
import close from "@assets/images/svg/close.svg";
import React from "react";
import FlyoutCss from './Flyout.module.scss'

type FlyoutType = {
  isOpen: boolean,
  closeFlyout: ()=> void
}

const Flyout = ({ isOpen, closeFlyout }: FlyoutType): JSX.Element | null => {
  if (!isOpen) return null
  return (
    <Portal>
      <>
        <Overlay onHandleOverlayClick={closeFlyout} />
        <div className={FlyoutCss.flyout}>
          <Button
            size="auto"
            variant="link"
            onClick={() => {
              closeFlyout()
            }}
          >
            <InlineSVG
              title="close flyout"
              className={productActionGroupCss.svgIcons}
              width={24}
              height={24}
              src={close}/>
          </Button>

        </div>
      </>
    </Portal>
  )
}

export default Flyout
