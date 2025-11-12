import styled from 'styled-components'
import { formatPrice } from '../../../utils/maths'
import PrimaryButton from './PrimaryButton'
import { theme } from '../../theme'
import { TiDelete } from 'react-icons/ti'

export default function Card({ imageSource, title, price }) {
  return (
    <CardStyled>
      <div className="image-container">
        <div className="Icon-deleted">
          <TiDelete />
        </div>
        <img src={imageSource} alt={title} />
      </div>
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
  box-shadow: ${theme.shadows.medium};
  border-radius: ${theme.borderRadius.extraRound};
  box-sizing: border-box;
  width: 15rem;
  list-style-type: none;
  position: relative;

  .image-container {
    display: flex;
    flex-direction: column;

    .Icon-deleted {
      display: flex;
      position: absolute;

      margin-bottom: 10rem;
      margin-left: 10.95rem;

      font-size: 1.875rem;
      color: ${theme.colors.primary};

      &:hover {
        color: ${theme.colors.red};
        cursor: pointer;
      }
    }

    img {
      width: 100%;
      height: 9rem;
      margin-top: ${theme.spacing.lg};
      margin-bottom: ${theme.spacing.sm};
      box-sizing: border-box;
      object-fit: contain;
    }
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
      font-size: ${theme.fonts.size.XS};
    }
  }
`
