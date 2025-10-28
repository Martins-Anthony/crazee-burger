import styled from 'styled-components'
import { theme } from '../../../../theme'
import Menu from './Menu'
import AdminPanel from './AdminPanel/AdminPanel'
import { useContext } from 'react'
import AdminContext from '../../../../context/AdminContext'

export default function Main() {
  const { isModeAdmin } = useContext(AdminContext)

  return (
    <MainStyled>
      <Menu />
      {isModeAdmin && <AdminPanel />}
    </MainStyled>
  )
}

const MainStyled = styled.main`
  flex: 1;
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
  overflow-y: scroll;
`
