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
  padding: ${theme.spacing.md} 0;
  background: ${theme.colors.primary_burger};
  color: ${theme.colors.white};
  gap: ${theme.spacing.sm};
  border: none;
  border-radius: ${theme.borderRadius.round};
  font-size: ${theme.fonts.size.P0};

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
