import styled from 'styled-components'
import NavBar from './NavBar/NavBar'
import { theme } from '../../../theme'
import Main from './Main/Main'
import OrderContext from '../../../context/OrderContext'
import { useState } from 'react'
import { fakeMenu } from '../../../fakeData/fakeMenu'

export default function OrderPage() {
  const [isModeAdmin, setIsModeAdmin] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isAddSelected, setIsAddSelected] = useState(true)
  const [isEditSelected, setIsEditSelected] = useState(false)
  const [currentTabSelected, setCurrentTabSelected] = useState('add')
  const [menu, setMenu] = useState(fakeMenu.LARGE)

  const handleAdd = newProduct => {
    const copyMenu = [...menu]
    const updateMenu = [newProduct, ...copyMenu]
    setMenu(updateMenu)
  }

  const handleDelete = idOfProductToDelete => {
    const copyMenu = [...menu]
    const updateMenu = copyMenu.filter(product => product.id !== idOfProductToDelete)
    setMenu(updateMenu)
  }

  const OrderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    isAddSelected,
    setIsAddSelected,
    isEditSelected,
    setIsEditSelected,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    handleAdd,
    handleDelete,
  }

  return (
    <OrderPageStyled>
      <div className="container">
        <OrderContext.Provider value={OrderContextValue}>
          <NavBar></NavBar>
          <Main></Main>
        </OrderContext.Provider>
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
