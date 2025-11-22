import { BsFillCameraFill } from 'react-icons/bs'
import { FaHamburger } from 'react-icons/fa'
import { MdOutlineEuro } from 'react-icons/md'

export const getInputTextsConfig = newProduct => [
  {
    id: "1",
    placeholder: 'Nom du produit (ex: Super Burger)',
    Icon: <FaHamburger />,
    value: newProduct.title,
    name: 'title',
    version: 'minimalist',
  },
  {
    id: "2",
    placeholder: `Lien URL D'une image (ex: https://la-photo-de-mon-produit.png)`,
    Icon: <BsFillCameraFill />,
    value: newProduct.imageSource,
    name: 'imageSource',
    version: 'minimalist',
    type: 'url',
  },
  {
    id: "3",
    placeholder: 'Prix',
    Icon: <MdOutlineEuro />,
    value: newProduct.price ? newProduct.price : '',
    name: 'price',
    version: 'minimalist',
    type: 'number',
  },
]
