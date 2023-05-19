import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { colors } from './../../constants/colors'

export const Content = styled.div`
  display: flex;
  justify-content: center;
`

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  max-width: 350px;
`

export const MajorText = styled.span`
  color: ${colors.GRAY_100};
  font-size: 32px;
  line-height: 1.25;
  margin-top: 24px;
`

export const SubText = styled.span`
  color: ${colors.GRAY_100};
  font-size: 22px;
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: 2;
`

export const AdditionalInformation = styled.div`
  display: flex;
  flex-direction: column;
`

export const SubLink = styled.a`
  cursor: pointer;
  font-size: 22px;
  line-height: 2;
  text-decoration: none;
  color: ${colors.GRAY_100};
  :hover {
    text-decoration: underline;
    color: ${colors.BLUE_300};
  }
`

export const MinText = styled.span`
  font-size: 18px;
  :hover {
    color: ${colors.BLUE_300};
    text-decoration: underline;
    cursor: pointer;
  }
  line-height: 2;
`

export const Companies = styled.div``

export const SubLinkCompanies = styled.a`
  cursor: pointer;
  font-size: 22px;
  line-height: 2;
  font-weight: 600;
  :hover {
    text-decoration: underline;
    color: ${colors.GRAY_100};
  }
`

export const Back = styled(NavLink)`
  position: fixed;
  top: 5%;
  left: 5%;
  color: ${colors.GRAY_100};
  cursor: pointer;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid ${colors.GRAY_400};
  :hover {
    color: ${colors.WHITE};
  }
`
