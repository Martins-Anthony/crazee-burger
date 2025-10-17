import styled from 'styled-components'
import NavBar from '../../reusable-ui/NavBar'

export default function OrderPage() {
  return (
    <OrderPageStyled>
      <div className="container">
        <NavBar></NavBar>
      </div>
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
  height: 100vh;
  border: 1px solid red;
  display: flex;
  justify-content: space-evenly;

  .container {
    width: 100%;
    max-width: 1400px;
  }
`
