import styled from 'styled-components'
import { theme } from '../../../theme'
import Cards from './Cards'
import { fakeMenu2 } from '../../../fakeData/fakeMenu'

export default function Main() {
  return (
    <MainStyled>
      <Cards
        pathPicture={fakeMenu2[0].imageSource}
        title={fakeMenu2[0].title}
        price={fakeMenu2[0].price}
      />
    </MainStyled>
  )
}

const MainStyled = styled.main`
  flex: 1;
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.main};
  border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
`
