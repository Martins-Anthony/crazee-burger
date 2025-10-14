import { useState } from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import { theme } from '../../../theme'
import { IoChevronForward, IoPersonCircleOutline } from 'react-icons/io5'
import TextInput from '../../reusable-ui/TextInput'


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
    <LoginFormStyled onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>
      <div className="input-with-button-container">
        <TextInput
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Entrez votre prénom"
          required
          icon={<IoPersonCircleOutline />}
        />
        <button type="submit">
          Accéder à mon espace <IoChevronForward />
        </button>
      </div>
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  font-family: ${theme.fontsFamily.primary};
  font-weight: ${theme.weights.bold};
  color: ${theme.colors.white};

  h1 {
    font-size: ${theme.fonts.P5};
  }

  hr {
    border: 1.5px solid ${theme.colors.orange};
    margin-bottom: 40px;
  }

  h2 {
    font-size: ${theme.fonts.P4};
  }

  .input-with-button-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 18px;

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
      border-radius: ${theme.borderRadius.round};
      font-size: ${theme.fonts.P0};

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
`
