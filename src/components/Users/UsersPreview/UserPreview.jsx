import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Image } from '../../image'
import { UserContainer, SubText, TextLink } from './UserPreview.styles'

export const UserPreview = ({ user }) => {
  const navigate = useNavigate()
  const { login, html_url, avatar_url } = user

  const handleClick = () => {
    navigate(`users/${login}`)
  }
  return (
    <UserContainer onClick={handleClick}>
      <Image url={avatar_url} />
      <SubText>Login: {login}</SubText>
      <SubText>
        Profile Link:{' '}
        <TextLink href={html_url} onClick={(e) => e.stopPropagation()}>
          {html_url}
        </TextLink>
      </SubText>
    </UserContainer>
  )
}
