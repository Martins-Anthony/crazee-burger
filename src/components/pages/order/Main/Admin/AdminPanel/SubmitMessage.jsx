import { FiCheckCircle } from 'react-icons/fi'
import Button from '../../../../../reusable-ui/Button'
import styled from 'styled-components'
import { theme } from '../../../../../../theme'

export default function SubmitMessage() {
  return (
    <SubmitMessageStyled>
      <FiCheckCircle /> Ajouté avec succès !
    </SubmitMessageStyled>
  )
}

const SubmitMessageStyled = styled.div`
  display: flex;
  align-items: center;
  padding-left: 0.94rem;
  gap: 5px;

  font-size: ${theme.fonts.size.SM};
  color: ${theme.colors.success};

  svg {
    font-size: ${theme.fonts.size.P1};
  }
`
