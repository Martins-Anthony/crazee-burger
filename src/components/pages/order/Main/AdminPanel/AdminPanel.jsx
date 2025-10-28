import styled from 'styled-components'
import AdminPanelDisplay from './AdminPanelDisplay'
import AdminPanelTab from './AdminPanelTab'
import { theme } from '../../../../../theme'
import { useContext } from 'react'
import AdminContext from '../../../../../context/AdminContext'

export default function AdminPanel() {
  const { isAdminPanelDisplay } = useContext(AdminContext)
  return (
    <AdminPanelStyled>
      <AdminPanelTab />
      {isAdminPanelDisplay && <AdminPanelDisplay />}
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
  border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
  position: absolute;
  bottom: 20px;
  width: 1400px;
`
