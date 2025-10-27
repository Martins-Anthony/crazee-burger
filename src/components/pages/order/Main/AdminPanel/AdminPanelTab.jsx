import styled from 'styled-components'
import { theme } from '../../../../../theme'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdModeEditOutline } from 'react-icons/md'

export default function AdminPanelTab() {
  return (
    <AdminPanelTabStyled>
      <button className="panel-tab-button">
        <span className="panel-tab-icon">
          <FiChevronDown />
        </span>
      </button>
      <button className="panel-tab-button">
        <span className="panel-tab-icon">
          <AiOutlinePlus />
        </span>
        Ajouter un produit
      </button>
      <button className="panel-tab-button">
        <span className="panel-tab-icon">
          <MdModeEditOutline />
        </span>{' '}
        Modifier un produit
      </button>
    </AdminPanelTabStyled>
  )
}

const AdminPanelTabStyled = styled.div`
  padding-left: 4.45rem;
  display: flex;
  gap: 1px;

  .panel-tab-button {
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
  }
`
