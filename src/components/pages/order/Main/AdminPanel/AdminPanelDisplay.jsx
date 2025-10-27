import styled from 'styled-components'
import { theme } from '../../../../../theme'

export default function AdminPanelDisplay() {
  return <AdminPanelDisplayStyled>AdminPanelDisplay</AdminPanelDisplayStyled>
}

const AdminPanelDisplayStyled = styled.div`
  border: 1px solid ${theme.colors.greyLight};
  height: 15.65rem;
  padding-top: 1.05rem;
  padding-left: ${theme.spacing.md};
  background: ${theme.colors.white};
  border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
  box-shadow: ${theme.shadows.subtle};
`
