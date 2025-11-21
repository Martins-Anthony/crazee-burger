import styled, { css } from 'styled-components'
import { theme } from '../../theme'

export default function TextInput({
  className,
  value,
  onChange,
  Icon,
  version = 'normal',
  ...restProps
}) {
  return (
    <InputStyled className={className} version={version}>
      <div className="icon">{Icon && Icon}</div>
      <input value={value} onChange={onChange} {...restProps} />
    </InputStyled>
  )
}

const InputStyled = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;

  gap: ${theme.spacing.sm};

  border-radius: ${theme.borderRadius.round};
  box-sizing: border-box;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 ${theme.spacing.xs} 0 ${theme.spacing.sm};

    color: ${theme.colors.greyBlue};
    font-size: ${theme.fonts.size.P2};
  }

  input {
    width: 100%;
    border: none;
    font-size: ${theme.fonts.size.P0};
  }

  ${({ version }) => extraStyled[version]}
`

const extraStyledNormal = css`
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  background: ${theme.colors.white};

  input {
    &::placeholder {
      color: ${theme.colors.greyLight};
    }
  }
`

const extraStyledMinimalist = css`
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  background: ${theme.colors.background_white};

  input {
    background: ${theme.colors.background_white};
    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
  }
`

const extraStyled = {
  normal: extraStyledNormal,
  minimalist: extraStyledMinimalist,
}
