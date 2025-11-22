import { BsFillCameraFill } from 'react-icons/bs'
import { FaHamburger } from 'react-icons/fa'
import { MdOutlineEuro } from 'react-icons/md'

export const getAddFormConfig = [
  {
    placeholder: 'Nom du produit (ex: Super Burger)',
    Icon: <FaHamburger />,
    name: 'title',
    version: 'minimalist',
  },
  {
    placeholder: `Lien URL D'une image (ex: https://la-photo-de-mon-produit.png)`,
    Icon: <BsFillCameraFill />,
    name: 'imageSource',
    version: 'minimalist',
    type: 'url',
  },
  {
    placeholder: 'Prix',
    Icon: <MdOutlineEuro />,
    name: 'price',
    version: 'minimalist',
    type: 'number',
  },
]
