import styled from 'styled-components'
import { theme } from '../../../../../../theme'
import TextInput from '../../../../../reusable-ui/TextInput'
import ImagePreview from '../../../../../reusable-ui/ImagePreview'
import { useContext, useState } from 'react'
import OrderContext from '../../../../../../context/OrderContext'
import { getInputTextsConfig } from './getInputTextsConfig'
import SubmitMessage from './SubmitMessage'
import Button from '../../../../../reusable-ui/Button'

export const EMPTY_PRODUCT = {
  id: '',
  title: '',
  imageSource: '',
  price: 0,
}

export default function AddForm() {
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext)

  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const inputTexts = getInputTextsConfig(newProduct)

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <ImagePreview imageSource={newProduct.imageSource} title={newProduct.title} />
      {inputTexts.map(input => {
        return <TextInput key={input.id} {...input} onChange={handleChange} />
      })}
      <div className="submit">
        <Button
          label={'Ajouter un nouveau produit au menu'}
          className={`${isSubmitted && 'success'}`}
          version={'success'}
        />
        {isSubmitted && <SubmitMessage />}
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

  .submit {
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
  }
`
