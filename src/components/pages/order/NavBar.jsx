import styled from 'styled-components'
import { theme } from '../../../theme'
import NavBarRightSide from './NavBarRightSide'

export default function NavBar({ username }) {
  return (
    <NavBarStyled>
      <div>logo</div>
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
  padding-left: ${theme.spacing.md};
  padding-right: ${theme.spacing.xl};
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0 0;
`
