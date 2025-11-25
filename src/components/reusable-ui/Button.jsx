import styled, { css } from 'styled-components'
import { theme } from '../../theme'

export default function Button({ label, Icon, className, onClick, version = 'primary' }) {
  return (
    <ButtonStyled className={className} onClick={onClick} version={version}>
      {label} {Icon && <div className="icon">{Icon}</div>}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: ${theme.spacing.sm};

  color: ${theme.colors.white};

  &:hover {
    cursor: pointer;
    transition: all 0.3s ease-out;
  }

  ${({ version }) => extraStyled[version]}
`

const extraStyledPrimary = css`
  font-size: ${theme.fonts.size.SM};

  border: 1px solid ${theme.colors.primary_burger};
  border-radius: ${theme.borderRadius.round};

  padding: ${theme.spacing.md} 0;

  background: ${theme.colors.primary_burger};

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background: ${theme.colors.white};
    color: ${theme.colors.primary_burger};
  }

  &:active {
    background: ${theme.colors.primary_burger};
    color: ${theme.colors.white};
  }
`

const extraStyledSuccess = css`
  font-weight: ${theme.fonts.weights.bold};
  font-size: ${theme.fonts.size.XS};

  border: 1px solid ${theme.colors.success};
  border-radius: ${theme.borderRadius.round};

  padding: ${theme.spacing.sm} ${theme.spacing.lg};

  background: ${theme.colors.success};

  &:hover {
    background: ${theme.colors.white};
    color: ${theme.colors.success};
  }

  &:active {
    background: ${theme.colors.white};
    color: ${theme.colors.success};
  }
`

const extraStyledDanger = css`
  position: absolute;

  border: none;
  background: none;

  margin-left: 10.95rem;
  padding: 0;

  font-size: 1.875rem;
  color: ${theme.colors.primary};

  &:hover {
    color: ${theme.colors.red};
  }
`

const extraStyled = {
  primary: extraStyledPrimary,
  success: extraStyledSuccess,
  danger: extraStyledDanger,
}
