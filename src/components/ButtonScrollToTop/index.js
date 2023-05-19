import React, { useEffect, useState } from 'react'

import { ScrollContainer } from './styles'

export const ButtonScrollToTop = () => {
  const [isShow, setIsShow] = useState(false)

  const onScroll = () => {
    window.pageYOffset > 200 ? setIsShow(true) : setIsShow(false)
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return isShow ? (
    <ScrollContainer onClick={scrollToTop}>
      <span>^ Наверх</span>
    </ScrollContainer>
  ) : (
    <></>
  )
}
