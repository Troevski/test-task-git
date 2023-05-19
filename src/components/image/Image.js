import React from 'react'

import { CustomImage } from './Image.styles'

export const Image = ({ url, width = 100, height = 100, isRound = true }) => {
  return (
    <CustomImage
      src={url}
      width={width}
      height={height}
      alt={url}
      isRound={isRound}
      loading="lazy"
    />
  )
}
