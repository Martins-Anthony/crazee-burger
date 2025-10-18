import Logo from '../../reusable-ui/Logo'
import LoginForm from './LoginForm'
import backgroundBurger from '../../../assets/burger-background.jpg'
import styled from 'styled-components'

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <Logo className={'logo-login-page'} />
      <LoginForm />
    </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url(${backgroundBurger}) rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: darken;
    z-index: -1;
  }

  .logo-login-page {
    transform: scale(2.5);
  }
`
