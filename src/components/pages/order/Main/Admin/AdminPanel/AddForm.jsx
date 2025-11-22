import styled from 'styled-components'
import { theme } from '../../../../../../theme'
import TextInput from '../../../../../reusable-ui/TextInput'
import ImagePreview from '../../../../../reusable-ui/ImagePreview'
import { useContext, useState } from 'react'
import OrderContext from '../../../../../../context/OrderContext'
import { getAddFormConfig } from './getAddFormConfig'
import SubmitMessage from './SubmitMessage'

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

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <ImagePreview imageSource={newProduct.imageSource} title={newProduct.title} />
      {getAddFormConfig.map(({ placeholder, Icon, name, version, type }, index) => {
        return (
          <TextInput
            key={index}
            placeholder={placeholder}
            Icon={Icon}
            value={newProduct?.[name] ? newProduct?.[name] : ''}
            onChange={handleChange}
            name={name}
            version={version}
            type={type}
          />
        )
      })}
      <SubmitMessage isSubmitted={isSubmitted} />
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
`
