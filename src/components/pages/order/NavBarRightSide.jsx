import styled from 'styled-components'
import { theme } from '../../../theme'
import Profile from './Profile'

export default function NavBarRightSide({ username }) {
  return (
    <NavBarRightSideStyled>
      <Profile username={username} />
    </NavBarRightSideStyled>
  )
}

const NavBarRightSideStyled = styled.div`
  margin-right: ${theme.spacing.lg};
`
