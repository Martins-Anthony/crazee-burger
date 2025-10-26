import styled from 'styled-components'
import AdminPanelDisplay from './AdminPanelDisplay'
import AdminPanelTab from './AdminPanelTab'
import { theme } from '../../../../../theme'

export default function AdminPanel() {
  return (
    <AdminPanelStyled>
      <AdminPanelTab />
      <AdminPanelDisplay />
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
  border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
  position: absolute;
  bottom: 20px;
  width: 1400px;
`
