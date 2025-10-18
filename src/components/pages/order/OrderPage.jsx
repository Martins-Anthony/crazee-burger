import styled from 'styled-components'
import NavBar from '../../reusable-ui/NavBar'
import { theme } from '../../../theme'
import Main from './Main'

export default function OrderPage() {
  return (
    <OrderPageStyled>
      <div className="container">
        <NavBar></NavBar>
        <Main></Main>
      </div>
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
  height: 100vh;
  border: 1px solid red;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: ${theme.colors.primary};

  .container {
    width: 100%;
    max-width: 1400px;
    height: 95vh;
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
  }
`
