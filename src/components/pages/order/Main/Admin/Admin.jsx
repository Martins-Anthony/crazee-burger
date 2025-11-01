import styled from 'styled-components'
import AdminPanel from './AdminPanel'
import AdminTabs from './AdminTabs'
import { theme } from '../../../../../theme'
import { useState } from 'react'

export default function Admin() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isTabSelected, setTabSelected] = useState('add')

  return (
    <AdminStyled>
      <AdminTabs
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        isTabSelected={isTabSelected}
        setTabSelected={setTabSelected}
      />
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
