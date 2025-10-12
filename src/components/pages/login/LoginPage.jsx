import Logo from '../../Logo'
import LoginForm from './LoginForm'
import backgroundBurger from '../../../assets/burger-background.jpg'
import styled from 'styled-components'

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <div className="container">
        <Logo />
        <LoginForm />
      </div>
    </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
  width: 1512px;
  height: 982px;
  position: relative;
  background-image: url(${backgroundBurger});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  .container {
    padding-top: 200px;
  }
`
