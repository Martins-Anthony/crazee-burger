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
  padding: 18px 24px;
  width: 352px;
  gap: 13px;
  border-radius: ${theme.borderRadius.round};

  svg {
    color: ${theme.colors.greyBlue};
    font-size: ${theme.fonts.P2};
  }

  input {
    width: 100%;
    border: none;
    font-size: ${theme.fonts.P0};

    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
  }
`
