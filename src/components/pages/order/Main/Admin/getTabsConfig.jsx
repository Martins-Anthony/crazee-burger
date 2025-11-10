import { AiOutlinePlus } from 'react-icons/ai'
import { MdModeEditOutline } from 'react-icons/md'
import AddAProduct from './AdminPanel/AddForm'
import EditAProduct from './AdminPanel/DeleteForm'

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
