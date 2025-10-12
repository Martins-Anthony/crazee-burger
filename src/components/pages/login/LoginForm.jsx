import { useState } from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import { theme } from '../../../theme'
import { IoChevronForward, IoPersonCircleOutline } from 'react-icons/io5'

export default function LoginForm() {
  const [inputValue, setInputValue] = useState('')
  const navigate = useNavigate()

  const handleSubmit = event => {
    event.preventDefault()
    setInputValue(event.target[0].value)
    navigate(`order/${inputValue}`)
    setInputValue('')
  }

  const handleChange = event => {
    setInputValue(event.target.value)
  }

  return (
    <LoginFormStyled>
      <h1>Bienvenue chez nous !</h1>
      <span className="line"></span>
      <h2>Connectez-vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <div className="inputContainer">
          <IoPersonCircleOutline />
          <input
            type="text"
            placeholder="Entrez votre prénom"
            required
            value={inputValue}
            onChange={handleChange}
          />
        </div>
        <button type="submit">
          Accédez à votre espace <IoChevronForward />
        </button>
      </form>
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h1,
  h2 {
    font-family: ${theme.fontsFamily.primary};
    font-weight: ${theme.weights.bold};
    color: ${theme.colors.white};
  }

  h1 {
    font-size: ${theme.fonts.P5};
  }

  .line {
    width: 400px;
    height: 3px;
    background-color: ${theme.colors.orange};
  }

  h2 {
    font-size: ${theme.fonts.P4};
  }

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 18px;

    input,
    button {
      font-size: ${theme.fonts.P0};
    }

    input {
      width: 100%;
      border: none;
      &::placeholder {
        color: ${theme.colors.greyMedium};
      }
    }

    button {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 18px 0;
      background: ${theme.colors.primary_burger};
      color: ${theme.colors.white};
      gap: 10px;
      border: none;

      &:hover {
        background: ${theme.colors.white};
        color: ${theme.colors.primary_burger};
        cursor: pointer;
        border: 1px solid ${theme.colors.primary_burger};
      }

      &:active {
        background: ${theme.colors.primary_burger};
        color: ${theme.colors.white};
      }
    }
  }

  .inputContainer {
    background-color: ${theme.colors.white};
    display: flex;
    align-items: center;
    padding: 18px 24px;
    width: 352px;
    gap: 13px;

    svg {
      color: ${theme.colors.greyBlue};
    }
  }

  .inputContainer,
  button {
    border-radius: ${theme.borderRadius.round};
  }
`
