import styled from 'styled-components'
import { theme } from '../../../../../theme'

export default function TabButton({ label, icon, onClick }) {
  return (
    <TabButtonStyled onClick={onClick}>
      <span className="panel-tab-icon">{icon}</span>
      {label}
    </TabButtonStyled>
  )
}

const TabButtonStyled = styled.button`
  color: ${theme.colors.greySemiDark};
  background: ${theme.colors.white};
  font-size: ${theme.fonts.size.P0};
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: ${theme.colors.greyLight};
  border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0 0;
  padding: ${theme.spacing.sm} ${theme.spacing.md} ${theme.spacing.sm} ${theme.spacing.md};
  display: flex;
  gap: ${theme.spacing.sm};

  .panel-tab-icon {
    display: block;
    width: ${theme.fonts.size.P0};
    height: ${theme.fonts.size.P0};
  }

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 0.25rem;
  }

  &:active {
    background: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
  }
`
