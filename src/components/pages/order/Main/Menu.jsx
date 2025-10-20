import styled from 'styled-components'
import Cards from './Cards'
import { theme } from '../../../../theme'
import { useState } from 'react'
import { fakeMenu2 } from '../../../../fakeData/fakeMenu'

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2)
  return (
    <MenuStyled>
      {menu.map(({ id, imageSource, title, price }) => {
        return <Cards key={id} pathPicture={imageSource} title={title} price={price} />
      })}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.main};
  padding: ${theme.spacing.xl} ${theme.spacing.xl} ${theme.spacing.xxxl};
  display: grid;
  grid-row-gap: ${theme.spacing.xl};
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
`
