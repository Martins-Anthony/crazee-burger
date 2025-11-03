import styled from 'styled-components'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import React, { Fragment, useContext } from 'react'
import Tab from '../../../../reusable-ui/Tab'
import { theme } from '../../../../../theme'
import OrderContext from '../../../../../context/OrderContext'
import { getTabsConfig } from './getTabsConfig'

export default function AdminTabs() {
  const { isCollapsed, setIsCollapsed, currentTabSelected, setCurrentTabSelected } =
    useContext(OrderContext)

  const selectTab = tabSelected => {
    setIsCollapsed(false)
    setCurrentTabSelected(tabSelected)
  }

  const tabs = getTabsConfig

  return (
    <AdminTabsStyled>
      <Tab
        label={''}
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? 'is-active' : ''}
      />
      {tabs.map(({ id, label, Icon }) => {
        return (
          <Fragment key={id}>
            <Tab
              Icon={Icon}
              label={label}
              onClick={() => selectTab(id)}
              className={currentTabSelected === id ? 'is-active' : ''}
            />
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
