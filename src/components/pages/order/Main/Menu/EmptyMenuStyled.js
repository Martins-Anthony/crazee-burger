import styled from 'styled-components'
import { theme } from '../../../../../theme'

export const EmptyMenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: ${theme.spacing.md};

  text-align: center;

  font-family: ${theme.fonts.family.secondary};
  font-size: ${theme.fonts.size.P4};
  text-transform: uppercase;

  color: ${theme.colors.greyBlue};

  h1,
  p {
    margin: 0;
    font-size: ${theme.fonts.size.P4};
  }

  button {
    margin-top: ${theme.spacing.sm};
    padding: ${theme.spacing.md};
  }
`
