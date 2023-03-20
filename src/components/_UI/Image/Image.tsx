import React, { useRef } from 'react'
import ImageCss from './Image.module.scss'

type IImageProps = React.ImgHTMLAttributes<HTMLImageElement>

const Image = ({ src, srcSet, alt }: IImageProps) => {
  const imageRef = useRef<HTMLImageElement>(null)

  return (
    <img
      className={ImageCss.Image}
      ref={imageRef}
      src={src}
      srcSet={srcSet}
      alt={alt}
    />
  )
}

export default Image
