import styled from 'styled-components'
import { theme } from '../../../theme'
import Cards from './Cards'
import { fakeMenu2 } from '../../../fakeData/fakeMenu'

export default function Main() {
  return (
    <MainStyled>
      {fakeMenu2.map(menu => {
        return (
          <Cards
            key={menu.id}
            pathPicture={menu.imageSource}
            title={menu.title}
            price={menu.price}
          />
        )
      })}
    </MainStyled>
  )
}

const MainStyled = styled.main`
  flex: 1;
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.main};
  border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
`
