import styled from 'styled-components'
import { theme } from '../../../../../../theme'
import TextInput from '../../../../../reusable-ui/TextInput'
import { FaHamburger } from 'react-icons/fa'
import { BsFillCameraFill } from 'react-icons/bs'
import { MdOutlineEuro } from 'react-icons/md'

export default function PostProduct() {
  return (
    <AddAProductStyled>
      <div className="image-preview">Image preview</div>
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
  border: 1px solid;
  display: grid;
  grid-template-columns: 25% 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: ${theme.spacing.md};
  grid-row-gap: 0px;

  max-width: 880px;

  .image-preview {
    border: 1px solid green;
    height: 7.5rem;
  }

  .input-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 2.2rem);
    grid-column-gap: 0px;
    grid-row-gap: 8px;
    margin-bottom: ${theme.spacing.xs};

    .input-product {
      //height: 35px;
      padding: ${theme.spacing.xs} ${theme.spacing.md};
    }
  }

  .button-product {
    padding: ${theme.spacing.sm} ${theme.spacing.lg};
  }

  div {
    border: 1px solid red;
  }
`
