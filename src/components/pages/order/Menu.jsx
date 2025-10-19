import styled from 'styled-components'
import Cards from './Cards'
import { theme } from '../../../theme'

export default function Menu({ listMenu }) {
  return (
    <MenuStyled>
      {listMenu.map(menu => {
        return (
          <Cards
            key={menu.id}
            pathPicture={menu.imageSource}
            title={menu.title}
            price={menu.price}
          />
        )
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
