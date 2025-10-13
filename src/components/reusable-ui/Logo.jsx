import { Link } from 'react-router'
import logo from '../../assets/logo-orange.png'
import styled from 'styled-components'
import { theme } from '../../theme'

function Logo() {
  return (
    <LogoStyled>
      <Link to={'/'}>
        <div className="logoContainer">
          <span>CRAZEE</span>
          <img src={logo} alt="Logo Crazee Burger" />
          <span>BURGER</span>
        </div>
      </Link>
    </LogoStyled>
  )
}

export default Logo

const LogoStyled = styled.div`
  display: flex;
  justify-content: center;

  .logoContainer {
    display: flex;
    align-items: center;
  }

  span {
    font-size: 110px;
    color: ${theme.colors.primary};
    font-family: ${theme.fontsFamily.primary};
    font-weight: ${theme.weights.bold};
    margin: 0 ${theme.spacing.sm};
  }

  img {
    width: 200px;
    height: 150px;
  }
`
