import styled from 'styled-components'

export const CustomImage = styled.img`
  border-radius: ${({ isRound }) => (isRound ? '50%' : '0%')};
  box-shadow: 0 0 0 2px rgba(240, 246, 252, 0.1);
  cursor: pointer;
`
