import styled from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'
import { theme } from '../../../../../theme'
import { toast } from 'react-toastify'
import Profile from './Profile'
import ToggleButton from '../../../../reusable-ui/ToggleButton'
import { useContext } from 'react'
import ToastAdmin from './ToastAdmin'
import AdminContext from '../../../../../context/AdminContext'

export default function NavBarRightSide({ username }) {
  const { isModeAdmin, setIsModeAdmin } = useContext(AdminContext)

  const displayToastNotification = () => {
    if (!isModeAdmin) {
      toast.info('Mode admin activé', {
        theme: 'dark',
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
    setIsModeAdmin(!isModeAdmin)
  }

  return (
    <NavBarRightSideStyled>
      <ToggleButton
        onToggle={displayToastNotification}
        labelIfChecked="DÉSACTIVER LE MODE ADMIN"
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
      />
      <ToastAdmin />
      <Profile username={username} />
    </NavBarRightSideStyled>
  )
}

const NavBarRightSideStyled = styled.div`
  margin-right: ${theme.spacing.lg};
  display: flex;
`
