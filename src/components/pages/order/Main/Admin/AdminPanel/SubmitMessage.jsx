import { FiCheckCircle } from 'react-icons/fi'
import Button from '../../../../../reusable-ui/Button'
import styled from 'styled-components'
import { theme } from '../../../../../../theme'

export default function SubmitMessage({ isSubmitted }) {
  return (
    <SubmitMessageStyled>
      <Button
        label={'Ajouter un nouveau produit au menu'}
        className={`${isSubmitted && 'success'}`}
        version={'success'}
      />
      {isSubmitted && (
        <span>
          <FiCheckCircle /> Ajouté avec succès !
        </span>
      )}
    </SubmitMessageStyled>
  )
}

const SubmitMessageStyled = styled.div`
  grid-column-start: 2;
  grid-row-start: 4;

  display: grid;
  grid-template-columns: 50% 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  text-align: center;

  .success {
    background: ${theme.colors.white};
    color: ${theme.colors.success};
    font-weight: ${theme.fonts.weights.bold};
    font-size: ${theme.fonts.size.XS};

    border: 1px solid ${theme.colors.success};
    border-radius: ${theme.borderRadius.round};

    padding: ${theme.spacing.sm} ${theme.spacing.lg};
  }

  span {
    display: flex;
    align-items: center;
    padding-left: 0.94rem;
    gap: 5px;

    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.success};

    svg {
      font-size: ${theme.fonts.size.P1};
    }
  }
`
