import styled from 'styled-components'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdModeEditOutline } from 'react-icons/md'
import { v4 as uuidv4 } from 'uuid'
import React, { useContext, Fragment } from 'react'
import AdminContext from '../../../../../context/AdminContext'
import TabButton from './TabButton'

export default function AdminPanelTabs() {
  const { isAdminPanel, setIsAdminPanel } = useContext(AdminContext)

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
    <AdminPanelTabsStyled>
      {panelTab.map(({ id, label, icon, onClick }) => {
        return (
          <Fragment key={id}>
            <TabButton icon={icon} label={label} onClick={onClick} />
          </Fragment>
        )
      })}
    </AdminPanelTabsStyled>
  )
}

const AdminPanelTabsStyled = styled.div`
  padding-left: 4.45rem;
  display: flex;
  gap: 1px;
`
