import styled from 'styled-components'
import { theme } from '../../../../../../theme'
import TextInput from '../../../../../reusable-ui/TextInput'
import { FaHamburger } from 'react-icons/fa'
import { BsFillCameraFill } from 'react-icons/bs'
import { MdOutlineEuro } from 'react-icons/md'
import ImagePreview from '../../../../../reusable-ui/ImagePreview'
import { useContext, useState } from 'react'
import OrderContext from '../../../../../../context/OrderContext'

const EMPTY_PRODUCT = {
  id: '',
  title: '',
  imageSource: '',
  price: 0,
}

export default function AddForm() {
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)

  const { handleAdd } = useContext(OrderContext)

  const handleSubmit = event => {
    event.preventDefault()

    const newProductToAdd = {
      id: crypto.randomUUID(),
      imageSource: newProduct.imageSource,
      title: newProduct.title,
      price: newProduct.price,
    }

    handleAdd(newProductToAdd)
    setNewProduct(EMPTY_PRODUCT)
  }

  const handleChange = event => {
    const { name, value } = event.target
    setNewProduct({
      ...newProduct,
      [name]: value,
    })
  }

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <ImagePreview url={newProduct.imageSource} className={'image-preview'} />
      <TextInput
        className={'input-product'}
        placeholder={'Nom du produit (ex: Super Burger)'}
        Icon={<FaHamburger />}
        value={newProduct.title}
        onChange={handleChange}
        name={'title'}
      />
      <TextInput
        className={'input-product input-image'}
        placeholder={`Lien URL D'une image (ex: https://la-photo-de-mon-produit.png)`}
        Icon={<BsFillCameraFill />}
        type={'url'}
        value={newProduct.imageSource}
        onChange={handleChange}
        name={'imageSource'}
      />
      <TextInput
        className={'input-product input-price'}
        placeholder={'Prix'}
        Icon={<MdOutlineEuro />}
        type={'number'}
        value={newProduct.price ? newProduct.price : ''}
        onChange={handleChange}
        name={'price'}
      />
      <button className="button-product">Ajouter un nouveau produit au menu</button>
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: ${theme.spacing.md};
  grid-row-gap: ${theme.spacing.xs};

  width: 70%;

  .input-product {
    padding: ${theme.spacing.xs} ${theme.spacing.md};
    background: ${theme.colors.background_white};

    input {
      background: ${theme.colors.background_white};
    }
  }

  .input-image {
    grid-column-start: 2;
  }

  .input-price {
    grid-column-start: 2;
    grid-row-start: 3;
  }

  .button-product {
    grid-column-start: 2;
    grid-row-start: 4;

    width: 50%;

    font-weight: ${theme.fonts.weights.bold};
    font-size: ${theme.fonts.size.XS};
    color: ${theme.colors.white};

    border: 1px solid ${theme.colors.success};
    border-radius: ${theme.borderRadius.round};

    padding: ${theme.spacing.sm} ${theme.spacing.lg};

    background: ${theme.colors.success};
  }
`
