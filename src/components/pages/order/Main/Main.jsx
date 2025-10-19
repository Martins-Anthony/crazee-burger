import styled from 'styled-components'
import { theme } from '../../../../theme'
import { fakeMenu2 } from '../../../../fakeData/fakeMenu'
import Menu from './Menu'

export default function Main() {
  return (
    <MainStyled>
      <Menu listMenu={fakeMenu2} />
    </MainStyled>
  )
}

const MainStyled = styled.main`
  flex: 1;
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.main};
  border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
  overflow-y: scroll;
`
