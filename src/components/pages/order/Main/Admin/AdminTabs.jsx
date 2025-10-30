import styled from 'styled-components'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdModeEditOutline } from 'react-icons/md'
import { v4 as uuidv4 } from 'uuid'
import React, { useContext, Fragment } from 'react'
import OrderContext from '../../../../../context/OrderContext'
import Tab from '../../../../reusable-ui/Tab'

export default function AdminTabs() {
  const { isAdminPanel, setIsAdminPanel } = useContext(OrderContext)

  const panelTab = [
    {
      id: uuidv4(),
      label: '',
      icon: isAdminPanel ? <FiChevronDown /> : <FiChevronUp />,
      onClick: () => {
        setIsAdminPanel(!isAdminPanel)
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
    <AdminTabsStyled>
      {panelTab.map(({ id, label, icon, onClick }) => {
        return (
          <Fragment key={id}>
            <Tab icon={icon} label={label} onClick={onClick} />
          </Fragment>
        )
      })}
    </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
  padding-left: 4.45rem;
  display: flex;
  gap: 1px;
`
