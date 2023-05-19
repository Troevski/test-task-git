import React from 'react'
import { useParams } from 'react-router-dom'
import { nanoid } from 'nanoid'

import { useGetUserQuery } from '../../services/usersAPI/usersApi'
import {
  UserContainer,
  Content,
  MajorText,
  SubText,
  AdditionalInformation,
  SubLink,
  MinText,
  Companies,
  SubLinkCompanies,
  Back,
} from './User.styles'
import { Image } from '../image'

export const User = () => {
  const { login } = useParams()
  const { data } = useGetUserQuery(login)
  const created_date = new Date(data?.created_at)
  const companies = data?.company?.split(',')

  return (
    <Content>
      <Back to="/"> ← Back</Back>
      <UserContainer>
        <Image url={data?.avatar_url} width={296} height={296} />
        <MajorText>{data?.name}</MajorText>
        <AdditionalInformation>
          <SubText>{data?.bio}</SubText>
          <div>
            <MinText>{data?.followers} followers · </MinText>
            <MinText>{data?.following} following </MinText>
          </div>
          <SubText>Created at: {created_date.toDateString()}</SubText>
          <Companies>
            {companies?.map((_company) => (
              <SubLinkCompanies key={nanoid()}> {_company} </SubLinkCompanies>
            ))}
          </Companies>
          {data?.location && <SubText>Location: {data?.location}</SubText>}
          <SubLink href={data?.email}>{data?.email}</SubLink>
          <SubLink href={data?.blog}>{data?.blog}</SubLink>
        </AdditionalInformation>
      </UserContainer>
    </Content>
  )
}
