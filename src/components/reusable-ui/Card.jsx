import styled from 'styled-components'
import { formatPrice } from '../../../utils/maths'
import PrimaryButton from './PrimaryButton'
import { theme } from '../../theme'

export default function Card({ imageSource, title, price }) {
  return (
    <CardStyled>
      <img src={imageSource} alt={title} />
      <hgroup className="text-info">
        <h2>{title}</h2>
        <div className="description">
          <div className="left-description">{formatPrice(price)}</div>
          <PrimaryButton label={'Ajouter'} className={'primary-button-card'} />
        </div>
      </hgroup>
    </CardStyled>
  )
}

const CardStyled = styled.li`
  padding: ${theme.spacing.md} ${theme.spacing.md} ${theme.spacing.sd} ${theme.spacing.md};
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};
  box-sizing: border-box;
  width: 15rem;
  list-style-type: none;

  img {
    width: 100%;
    height: 9rem;
    margin-top: ${theme.spacing.lg};
    margin-bottom: ${theme.spacing.sm};
    box-sizing: border-box;
    object-fit: contain;
  }

  .text-info {
    display: grid;
    grid-template-rows: 40% 60%;
    padding: 0 ${theme.spacing.xxs} 0 ${theme.spacing.xxs};
  }

  h2 {
    font-family: ${theme.fonts.family.secondary};
    font-size: ${theme.fonts.size.P4};
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .description {
    padding: ${theme.spacing.sm} 0 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${theme.colors.primary};

    .primary-button-card {
      width: 6rem;
      padding: ${theme.spacing.sm} 0;
    }
  }
`
