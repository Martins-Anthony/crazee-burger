import styled from 'styled-components'
import { theme } from '../../../../../../theme'
import TextInput from '../../../../../reusable-ui/TextInput'
import { FaHamburger } from 'react-icons/fa'
import { BsFillCameraFill } from 'react-icons/bs'
import { MdOutlineEuro } from 'react-icons/md'
import ImagePreview from '../../../../../reusable-ui/ImagePreview'
import { useContext, useState } from 'react'
import OrderContext from '../../../../../../context/OrderContext'
import { FiCheckCircle } from 'react-icons/fi'
import PrimaryButton from '../../../../../reusable-ui/PrimaryButton'

const EMPTY_PRODUCT = {
  id: '',
  title: '',
  imageSource: '',
  price: 0,
}

export default function AddForm() {
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

    displaySubmitMessage()
  }

  const displaySubmitMessage = () => {
    setIsSubmitted(true)

    setTimeout(() => {
      setIsSubmitted(false)
    }, 2000)
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
      <ImagePreview imageSource={newProduct.imageSource} title={newProduct.title} />
      <TextInput
        className={'input-product'}
        placeholder={'Nom du produit (ex: Super Burger)'}
        Icon={<FaHamburger />}
        value={newProduct.title}
        onChange={handleChange}
        name={'title'}
        version="minimalist"
      />
      <TextInput
        className={'input-image'}
        placeholder={`Lien URL D'une image (ex: https://la-photo-de-mon-produit.png)`}
        Icon={<BsFillCameraFill />}
        type={'url'}
        value={newProduct.imageSource}
        onChange={handleChange}
        name={'imageSource'}
        version="minimalist"
      />
      <TextInput
        className={'input-price'}
        placeholder={'Prix'}
        Icon={<MdOutlineEuro />}
        type={'number'}
        value={newProduct.price ? newProduct.price : ''}
        onChange={handleChange}
        name={'price'}
        version="minimalist"
      />
      <div className="submit-button">
        <PrimaryButton
          label={'Ajouter un nouveau produit au menu'}
          className={`${isSubmitted ? 'success' : 'primary-button-add'}`}
        />
        {isSubmitted && (
          <span>
            <FiCheckCircle /> Ajouté avec succès !
          </span>
        )}
      </div>
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
  height: 10rem;

  .input-image {
    grid-column-start: 2;
  }

  .input-price {
    grid-column-start: 2;
    grid-row-start: 3;
  }

  .submit-button {
    grid-column-start: 2;
    grid-row-start: 4;

    display: grid;
    grid-template-columns: 50% 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    text-align: center;

    .success {
      background: ${theme.colors.white};
      color: ${theme.colors.success};
      font-weight: ${theme.fonts.weights.bold};
      font-size: ${theme.fonts.size.XS};

      border: 1px solid ${theme.colors.success};
      border-radius: ${theme.borderRadius.round};

      padding: ${theme.spacing.sm} ${theme.spacing.lg};
    }

    .primary-button-add {
      font-weight: ${theme.fonts.weights.bold};
      font-size: ${theme.fonts.size.XS};

      border: 1px solid ${theme.colors.success};
      border-radius: ${theme.borderRadius.round};

      padding: ${theme.spacing.sm} ${theme.spacing.lg};

      background: ${theme.colors.success};

      &:hover {
        background: ${theme.colors.white};
        color: ${theme.colors.success};
        cursor: pointer;
        transition: all 0.3s ease-out;
      }

      &:active {
        background: ${theme.colors.white};
        color: ${theme.colors.success};
      }
    }

    span {
      display: flex;
      align-items: center;
      padding-left: 0.94rem;
      gap: 5px;

      font-size: ${theme.fonts.size.SM};
      color: ${theme.colors.success};

      svg {
        font-size: ${theme.fonts.size.P1};
      }
    }
  }
`
