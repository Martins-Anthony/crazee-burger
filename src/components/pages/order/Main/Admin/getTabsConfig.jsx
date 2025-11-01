import { AiOutlinePlus } from 'react-icons/ai'
import { MdModeEditOutline } from 'react-icons/md'

export const getTabsConfig = () => [
  {
    id: 'add',
    label: 'Ajouter un produit',
    Icon: <AiOutlinePlus />,
  },
  {
    id: 'edit',
    label: 'Modifier un produit',
    Icon: <MdModeEditOutline />,
  },
]
