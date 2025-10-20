import styled from 'styled-components'
import { theme } from '../../../../theme'
import { useState } from 'react'
import { fakeMenu2 } from '../../../../fakeData/fakeMenu'
import Card from '../../../reusable-ui/Card'

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2)
  return (
    <MenuStyled>
      {menu.map(({ id, imageSource, title, price }) => {
        return <Card key={id} imageSource={imageSource} title={title} price={price} />
      })}
    </MenuStyled>
  )
}

const MenuStyled = styled.ul`
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.main};
  padding: ${theme.spacing.xl} ${theme.spacing.xl} ${theme.spacing.xxxl};
  display: grid;
  grid-row-gap: ${theme.spacing.xl};
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  margin: 0;
`
