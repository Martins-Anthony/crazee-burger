import styled from 'styled-components'
import { theme } from '../../../../../../theme'
import TextInput from '../../../../../reusable-ui/TextInput'
import { FaHamburger } from 'react-icons/fa'
import { BsFillCameraFill } from 'react-icons/bs'
import { MdOutlineEuro } from 'react-icons/md'
import ImagePreview from '../../../../../reusable-ui/ImagePreview'

export default function PostProduct() {
  return (
    <AddAProductStyled>
      <ImagePreview />
      <div>
        <div className="input-container">
          <TextInput
            className={'input-product'}
            placeholder={'Nom du produit (ex: Super Burger)'}
            Icon={<FaHamburger />}
          />
          <TextInput
            className={'input-product'}
            placeholder={`Lien URL D'une image (ex: https://la-photo-de-mon-produit.png)`}
            Icon={<BsFillCameraFill />}
          />
          <TextInput className={'input-product'} placeholder={'Prix'} Icon={<MdOutlineEuro />} />
        </div>
        <div>
          <button className="button-product">Ajouter un nouveau produit au menu</button>
        </div>
      </div>
    </AddAProductStyled>
  )
}

const AddAProductStyled = styled.form`
  display: grid;
  grid-template-columns: 25% 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: ${theme.spacing.md};
  grid-row-gap: 0px;

  max-width: 880px;

  .input-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 2.2rem);
    grid-column-gap: 0px;
    grid-row-gap: 8px;
    margin-bottom: ${theme.spacing.xs};

    .input-product {
      padding: ${theme.spacing.xs} ${theme.spacing.md};
    }
  }

  .button-product {
    padding: ${theme.spacing.sm} ${theme.spacing.lg};
  }
`
