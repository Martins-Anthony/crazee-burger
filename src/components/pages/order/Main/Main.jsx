import styled from 'styled-components'
import { theme } from '../../../../theme'
import Menu from './Menu'
import Admin from './Admin/Admin'
import { useContext } from 'react'
import AdminContext from '../../../../context/AdminContext'

export default function Main() {
  const { isModeAdmin } = useContext(AdminContext)

  return (
    <MainStyled>
      <div className="menu-and-admin">
        <Menu />
        {isModeAdmin && <Admin />}
      </div>
    </MainStyled>
  )
}

const MainStyled = styled.main`
  height: calc(95vh - 10vh);
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
  display: grid;

  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;
  }
`
