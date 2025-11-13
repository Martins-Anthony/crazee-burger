import styled from 'styled-components'
import { theme } from '../../../../../theme'
import Card from '../../../../reusable-ui/Card'
import { useContext } from 'react'
import OrderContext from '../../../../../context/OrderContext'
import EmptyMenuAdmin from './EmptyMenuAdmin'
import EmptyMenuClient from './EmptyMenuClient'

const IMAGE_BY_DEFAULT = '/public/images/coming-soon.png'

export default function Menu() {
  const { menu, isModeAdmin, handleDelete, resetMenu } = useContext(OrderContext)

  if (menu.length === 0) {
    if (!isModeAdmin) return <EmptyMenuClient />
    return <EmptyMenuAdmin onReset={() => resetMenu()} />
  }

  return (
    <MenuStyled>
      {menu.map(({ id, imageSource, title, price }) => {
        return (
          <Card
            key={id}
            imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT}
            title={title}
            price={price}
            hasDeleteButton={isModeAdmin}
            onDelete={() => handleDelete(id)}
          />
        )
      })}
    </MenuStyled>
  )
}

const MenuStyled = styled.ul`
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  padding: ${theme.spacing.xl} ${theme.spacing.xl} ${theme.spacing.xxxl};
  display: grid;
  grid-row-gap: ${theme.spacing.xl};
  grid-template-columns: repeat(auto-fit, minmax(18.75rem, 1fr));
  justify-items: center;
  margin: 0;
  overflow-y: scroll;
  border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
`
