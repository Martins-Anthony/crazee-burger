import logo from '../../assets/logo-orange.png'
import styled from 'styled-components'
import { theme } from '../../theme'

function Logo({ className, onClick }) {
  return (
    <LogoStyled className={className} onClick={onClick}>
      <span>CRAZEE</span>
      <img src={logo} alt="Logo-Crazee-Burger" />
      <span>BURGER</span>
    </LogoStyled>
  )
}

export default Logo

const LogoStyled = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.family.secondary};
    font-weight: ${theme.fonts.weights.bold};
    letter-spacing: 1.5px;
  }

  img {
    object-fit: contain;
    object-position: center;
    width: 80px;
    height: 60px;
    margin: 0 5px;
  }
`
