import styled from 'styled-components'
import { theme } from '../../../../../theme'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdModeEditOutline } from 'react-icons/md'
import { v4 as uuidv4 } from 'uuid'
import { useContext } from 'react'
import AdminContext from '../../../../../context/AdminContext'

export default function AdminPanelTab() {
  const { isAdminPanelDisplay, setIsAdminPanelDisplay } = useContext(AdminContext)

  const panelTab = [
    {
      id: uuidv4(),
      label: '',
      icon: isAdminPanelDisplay ? <FiChevronDown /> : <FiChevronUp />,
      onClick: () => {
        setIsAdminPanelDisplay(!isAdminPanelDisplay)
      },
    },
    {
      id: uuidv4(),
      label: 'Ajouter un produit',
      icon: <AiOutlinePlus />,
      onClick: () => {},
    },
    { id: uuidv4(), label: 'Modifier un produit', icon: <MdModeEditOutline />, onClick: () => {} },
  ]

  return (
    <AdminPanelTabStyled>
      {panelTab.map(({ id, label, icon, onClick }) => {
        return (
          <button key={id} className="panel-tab-button" onClick={onClick}>
            <span className="panel-tab-icon">{icon}</span>
            {label}
          </button>
        )
      })}
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
