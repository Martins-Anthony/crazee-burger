import styled from 'styled-components'
import { theme } from '../../../../../theme'
import { ToastContainer } from 'react-toastify'

export default function ToastAdmin() {
  return <ToastContainerStyled className="toaster" bodyClassName="body-toast" />
}

const ToastContainerStyled = styled(ToastContainer)`
  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: ${theme.spacing.md};
      margin-left: ${theme.spacing.xxs};
    }
    div {
      line-height: 1.3em;
    }
  }
`
