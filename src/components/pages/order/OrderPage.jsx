import styled from 'styled-components'
import NavBar from '../../reusable-ui/NavBar'

export default function OrderPage() {
  return (
    <OrderPageStyled>
      <NavBar></NavBar>
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
  height: 100vh;
  border: 1px solid red;
`
