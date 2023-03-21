import React from 'react'
import spinnerCss from './Spinner.module.scss'
import Overlay from '@ui/Overlay/Overlay'

const Spinner = ({ withOverlay = true }: { withOverlay?: boolean }) => {
  return (
    <>
      {withOverlay && <Overlay />}
      <div className={`${spinnerCss.spinner} ${withOverlay && spinnerCss.spinnerWithOverlay}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  )
}

export default Spinner
