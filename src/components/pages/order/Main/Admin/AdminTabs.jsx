import styled from 'styled-components'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdModeEditOutline } from 'react-icons/md'
import React, { Fragment } from 'react'
import Tab from '../../../../reusable-ui/Tab'
import { theme } from '../../../../../theme'

export default function AdminTabs({ isCollapsed, setIsCollapsed, isTabSelected, setTabSelected }) {
  const panelTab = [
    {
      id: 'collapseUpAndDown',
      label: '',
      Icon: isCollapsed ? <FiChevronUp /> : <FiChevronDown />,
      onClick: () => setIsCollapsed(!isCollapsed),
      className: isCollapsed ? 'is-active' : '',
    },
    {
      id: 'add',
      label: 'Ajouter un produit',
      Icon: <AiOutlinePlus />,
      onClick: () => {},
      className: isTabSelected ? 'is-active' : '',
    },
    {
      id: 'edit',
      label: 'Modifier un produit',
      Icon: <MdModeEditOutline />,
      onClick: () => {},
      className: isTabSelected ? 'is-active' : '',
    },
  ]

  return (
    <AdminTabsStyled>
      {panelTab.map(({ id, label, Icon, onClick, className }) => {
        return (
          <Fragment key={id}>
            <Tab Icon={Icon} label={label} onClick={onClick} className={className} />
          </Fragment>
        )
      })}
    </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
  display: flex;
  gap: 1px;

  .is-active {
    background: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
  }
`
