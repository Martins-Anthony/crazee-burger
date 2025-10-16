import styled from 'styled-components'
import { theme } from '../../theme'

export default function TextInput({ value, onChange, icon, ...restProps }) {
  return (
    <InputStyled>
      {icon && icon}
      <input value={value} onChange={onChange} {...restProps} />
    </InputStyled>
  )
}

const InputStyled = styled.div`
  background-color: ${theme.colors.white};
  display: flex;
  align-items: center;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  width: 100%;
  gap: ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.round};
  box-sizing: border-box;

  svg {
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
