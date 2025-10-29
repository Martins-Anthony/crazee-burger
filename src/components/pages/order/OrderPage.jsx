import styled from 'styled-components'
import NavBar from './NavBar/NavBar'
import { theme } from '../../../theme'
import Main from './Main/Main'
import AdminContext from '../../../context/AdminContext'
import { useState } from 'react'

export default function OrderPage() {
  const [isModeAdmin, setIsModeAdmin] = useState(false)
  const [isAdminPanel, setIsAdminPanel] = useState(true)

  const adminContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isAdminPanel,
    setIsAdminPanel,
  }

  return (
    <OrderPageStyled>
      <div className="container">
        <AdminContext.Provider value={adminContextValue}>
          <NavBar></NavBar>
          <Main></Main>
        </AdminContext.Provider>
      </div>
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: ${theme.colors.primary};

  .container {
    width: 100%;
    max-width: 1400px;
    height: 95vh;
    display: flex;
    flex-direction: column;
  }
`
