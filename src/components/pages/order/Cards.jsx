import styled from 'styled-components'
import { formatPrice } from '../../../../utils/maths'
import PrimaryButton from '../../reusable-ui/PrimaryButton'
import { theme } from '../../../theme'

export default function Cards({ pathPicture, title, price }) {
  return (
    <CardsStyled>
      <img src={pathPicture} alt={title} />
      <h2>{title}</h2>
      <div className="container-price">
        <div>{formatPrice(price)}</div>
        <PrimaryButton label={'Ajouter'} className={'primary-button-card'} />
      </div>
    </CardsStyled>
  )
}

const CardsStyled = styled.div`
  padding: 50px 20px 10px 20px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: 15px;
  max-width: 200px;

  img {
    width: 200px;
    height: 145px;
    margin-bottom: 15px;
    box-sizing: border-box;
  }

  h2 {
    font-family: ${theme.fonts.family.secondary};
    font-size: ${theme.fonts.size.P4};
    margin: 0;
    padding: 0 5px 0 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .container-price {
    padding: 10px 5px 5px 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${theme.colors.primary};

    .primary-button-card {
      width: 95px;
      padding: 12px 0;
    }
  }
`
