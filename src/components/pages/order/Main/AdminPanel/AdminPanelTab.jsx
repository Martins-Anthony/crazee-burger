import styled from 'styled-components'
import { theme } from '../../../../../theme'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdModeEditOutline } from 'react-icons/md'
import { v4 as uuidv4 } from 'uuid'
import React, { useContext, Fragment } from 'react'
import AdminContext from '../../../../../context/AdminContext'
import TabButton from './TabButton'

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
          <Fragment key={id}>
            <TabButton icon={icon} label={label} onClick={onClick} />
          </Fragment>
        )
      })}
    </AdminPanelTabStyled>
  )
}

const AdminPanelTabStyled = styled.div`
  padding-left: 4.45rem;
  display: flex;
  gap: 1px;
`
