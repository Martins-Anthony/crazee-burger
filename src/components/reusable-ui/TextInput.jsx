import styled from 'styled-components'
import { theme } from '../../theme'

export default function TextInput({ className, value, onChange, Icon, ...restProps }) {
  return (
    <InputStyled className={className}>
      {Icon && Icon}
      <input value={value} onChange={onChange} {...restProps} />
    </InputStyled>
  )
}

const InputStyled = styled.div`
  background-color: ${theme.colors.white};
  display: flex;
  align-items: center;
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
