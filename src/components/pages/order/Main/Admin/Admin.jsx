import styled from 'styled-components'
import AdminPanel from './panel/AdminPanel'
import AdminTabs from './AdminTabs'
import { theme } from '../../../../../theme'
import { useContext } from 'react'
import OrderContext from '../../../../../context/OrderContext'

export default function Admin() {
  const { isCollapsed } = useContext(OrderContext)

  return (
    <AdminStyled>
      <AdminTabs />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  )
}

const AdminStyled = styled.div`
  border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
`
