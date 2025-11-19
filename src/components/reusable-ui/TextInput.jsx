import styled from 'styled-components'
import { theme } from '../../theme'

export default function TextInput({ className, value, onChange, Icon, ...restProps }) {
  return (
    <InputStyled className={className}>
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
  padding: ${theme.spacing.md} ${theme.spacing.lg};

  background-color: ${theme.colors.white};

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

    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
  }
`
