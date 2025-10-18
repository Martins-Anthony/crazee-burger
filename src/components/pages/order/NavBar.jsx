import styled from 'styled-components'
import { theme } from '../../../theme'
import NavBarRightSide from './NavBarRightSide'
import Logo from '../../reusable-ui/Logo'

export default function NavBar({ username }) {
  return (
    <NavBarStyled>
      <Logo />
      <NavBarRightSide username={username} />
    </NavBarStyled>
  )
}

const NavBarStyled = styled.nav`
  border: 1px solid green;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding: 0 ${theme.spacing.md};
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0 0;
`
