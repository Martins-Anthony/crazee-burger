import styled from 'styled-components'
import { theme } from '../../../../theme'
import Menu from './Menu'
import AdminPanel from './AdminPanel/AdminPanel'

export default function Main() {
  return (
    <MainStyled>
      <Menu />
      <AdminPanel />
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
