import React, { ReactElement } from 'react'
import OverlayCss from './Overlay.module.scss'

interface IOverlayProps {
  onHandleOverlayClick: any | undefined
}

const Overlay = ({ onHandleOverlayClick }: IOverlayProps): ReactElement => (
  <div
    aria-hidden
    className={OverlayCss.overlay}
    onClick={onHandleOverlayClick}
  />
)

export default Overlay
