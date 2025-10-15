import styled from 'styled-components'
import { theme } from '../../theme'

export default function PrimaryButton({ label, icon }) {
  return (
    <PrimaryButtonStyled>
      {label} {icon && icon}
    </PrimaryButtonStyled>
  )
}

const PrimaryButtonStyled = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 0;
  background: ${theme.colors.primary_burger};
  color: ${theme.colors.white};
  gap: 10px;
  border: none;
  border-radius: ${theme.borderRadius.round};
  font-size: ${theme.fonts.P0};

  &:hover {
    background: ${theme.colors.white};
    color: ${theme.colors.primary_burger};
    cursor: pointer;
    border: 1px solid ${theme.colors.primary_burger};
  }

  &:active {
    background: ${theme.colors.primary_burger};
    color: ${theme.colors.white};
  }
`
