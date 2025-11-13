import styled from 'styled-components'
import { theme } from '../../theme'

export default function PrimaryButton({ label, Icon, className, onClick }) {
  return (
    <PrimaryButtonStyled className={className} onClick={onClick}>
      {label} {Icon && Icon}
    </PrimaryButtonStyled>
  )
}

const PrimaryButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.md} 0;
  background: ${theme.colors.primary_burger};
  color: ${theme.colors.white};
  gap: ${theme.spacing.sm};
  border: 1px solid ${theme.colors.primary_burger};
  border-radius: ${theme.borderRadius.round};
  font-size: ${theme.fonts.size.SM};

  &:hover {
    background: ${theme.colors.white};
    color: ${theme.colors.primary_burger};
    cursor: pointer;
    transition: all 0.3s ease-out;
  }

  &:active {
    background: ${theme.colors.primary_burger};
    color: ${theme.colors.white};
  }
`
