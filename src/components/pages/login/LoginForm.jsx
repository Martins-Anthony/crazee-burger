import { useState } from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import { theme } from '../../../theme'
import { IoChevronForward, IoPersonCircleOutline } from 'react-icons/io5'
import TextInput from '../../reusable-ui/TextInput'
import PrimaryButton from '../../reusable-ui/PrimaryButton'

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
      <TextInput
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="Entrez votre prénom"
        required
        icon={<IoPersonCircleOutline />}
      />
      <PrimaryButton label={'Accéder à mon espace'} icon={<IoChevronForward />} />
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${theme.spacing.xl} ${theme.spacing.lg};
  font-family: ${theme.fonts.family.secondary};
  font-weight: ${theme.fonts.weights.bold};
  color: ${theme.colors.white};
  gap: ${theme.spacing.md};
  max-width: 400px;

  h1 {
    font-size: ${theme.fonts.size.P5};
    margin-bottom: ${theme.spacing.sm};
  }

  hr {
    border: 1.5px solid ${theme.colors.orange};
    width: 100%;
    margin-bottom: ${theme.spacing.md};
    box-sizing: border-box;
  }

  h2 {
    font-size: ${theme.fonts.size.P4};
    margin: 0;
  }
`
