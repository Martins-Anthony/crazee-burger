import { Link } from 'react-router'
import logo from '../../assets/logo-orange.png'
import styled from 'styled-components'
import { theme } from '../../theme'

function Logo() {
  return (
    <LogoStyled>
      <Link to={'/'}>
        <div className="logo-container">
          <span>CRAZEE</span>
          <img src={logo} alt="Logo-Crazee-Burger" />
          <span>BURGER</span>
        </div>
      </Link>
    </LogoStyled>
  )
}

export default Logo

const LogoStyled = styled.div`
  transform: scale(2.5);

  .logo-container {
    display: flex;
    align-items: center;
  }

  span {
    font-size: ${theme.fonts.P4};
    color: ${theme.colors.primary};
    font-family: ${theme.fontsFamily.primary};
    font-weight: ${theme.weights.bold};
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
