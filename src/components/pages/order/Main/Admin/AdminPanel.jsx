import styled from 'styled-components'
import { theme } from '../../../../../theme'
import { useContext } from 'react'
import OrderContext from '../../../../../context/OrderContext'
import { getTabsConfig, getTabsSelected } from './getTabsConfig'

export default function AdminPanel() {
  const { currentTabSelected } = useContext(OrderContext)
  
  const tabs = getTabsConfig
  const tabSelected = getTabsSelected(tabs, currentTabSelected)

  return <AdminPanelStyled>{tabSelected && tabSelected.label}</AdminPanelStyled>
}

const AdminPanelStyled = styled.div`
  border: 1px solid ${theme.colors.greyLight};
  height: 15.65rem;
  padding-top: 1.05rem;
  padding-left: ${theme.spacing.md};
  background: ${theme.colors.white};
  border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
  box-shadow: ${theme.shadows.subtle};
`
