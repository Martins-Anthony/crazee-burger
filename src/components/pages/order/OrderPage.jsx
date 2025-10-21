import styled from 'styled-components'
import NavBar from './NavBar/NavBar'
import { theme } from '../../../theme'
import Main from './Main/Main'
import { useParams } from 'react-router'

export default function OrderPage() {
  const { username } = useParams()
  return (
    <OrderPageStyled>
      <div className="container">
        <NavBar username={username}></NavBar>
        <Main></Main>
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
