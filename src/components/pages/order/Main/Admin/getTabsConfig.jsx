import { AiOutlinePlus } from 'react-icons/ai'
import { MdModeEditOutline } from 'react-icons/md'
import AddAProduct from './panel/AddAProduct'
import EditAProduct from './panel/EditAProduct'

export const getTabsConfig = [
  {
    id: 'add',
    label: 'Ajouter un produit',
    Icon: <AiOutlinePlus />,
    content: <AddAProduct />,
  },
  {
    id: 'edit',
    label: 'Modifier un produit',
    Icon: <MdModeEditOutline />,
    content: <EditAProduct />,
  },
]

export const getTabsSelected = (tabs, currentTabSelected) => {
  return tabs.find(tab => tab.id === currentTabSelected)
}
