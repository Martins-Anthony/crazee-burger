import styled from 'styled-components'
import { theme } from '../../theme'

export default function Tab({ label, icon, onClick }) {
  return (
    <TabStyled onClick={onClick}>
      <span className="icon">{icon}</span>
      {label}
    </TabStyled>
  )
}

const TabStyled = styled.button`
  height: 2.7rem;

  position: relative;
  left: 5%;
  top: 1px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0 0;
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: ${theme.colors.greyLight};

  background: ${theme.colors.white};

  font-size: ${theme.fonts.size.P0};
  color: ${theme.colors.greySemiDark};

  box-shadow: ${theme.shadows.subtle};

  padding: 0 ${theme.spacing.md} 0 ${theme.spacing.md};
  gap: ${theme.spacing.sm};

  .icon {
    display: flex;
  }

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 0.25rem;
    border-bottom: 2px solid ${theme.colors.white};
  }
`
