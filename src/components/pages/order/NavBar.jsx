import styled from 'styled-components'
import { theme } from '../../../theme'
import NavBarRightSide from './NavBarRightSide'
import Logo from '../../reusable-ui/Logo'
import { refreshPage } from '../../../../utils/windows'

export default function NavBar({ username }) {
  return (
    <NavBarStyled>
      <Logo className={'logo-order-page'} onClick={refreshPage} />
      <NavBarRightSide username={username} />
    </NavBarStyled>
  )
}

const NavBarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding: 0 ${theme.spacing.md};
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0 0;

  .logo-order-page {
    cursor: pointer;
  }
`
