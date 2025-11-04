import styled from 'styled-components'
import { theme } from '../../theme'

export default function ImagePreview() {
  return <ImagePreviewStyled className="image-preview">Aucune image</ImagePreviewStyled>
}

const ImagePreviewStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 7.5rem;

  border: 1px solid ${theme.colors.greyLight};
  border-radius: ${theme.borderRadius.round};

  color: ${theme.colors.greySemiDark};
`
