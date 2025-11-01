import styled from 'styled-components'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdModeEditOutline } from 'react-icons/md'
import React, { Fragment, useContext } from 'react'
import Tab from '../../../../reusable-ui/Tab'
import { theme } from '../../../../../theme'
import OrderContext from '../../../../../context/OrderContext'

export default function AdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    isAddSelected,
    setIsAddSelected,
    isEditSelected,
    setIsEditSelected,
  } = useContext(OrderContext)

  const selectTab = tabSelected => {
    setIsCollapsed(false)

    if (tabSelected === 'add') {
      setIsAddSelected(true)
      setIsEditSelected(false)
    }

    if (tabSelected === 'edit') {
      setIsEditSelected(true)
      setIsAddSelected(false)
    }
  }
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
      onClick: () => {
        selectTab('add')
      },
      className: isAddSelected ? 'is-active' : '',
    },
    {
      id: 'edit',
      label: 'Modifier un produit',
      Icon: <MdModeEditOutline />,
      onClick: () => {
        selectTab('edit')
      },
      className: isEditSelected ? 'is-active' : '',
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
