import styled from 'styled-components'
import { theme } from '../../theme'

export default function ImagePreview({ url }) {
  return (
    <ImagePreviewStyled>
      {url.length > 0 ? <img src={url} alt="Image-preview" /> : <div>Aucune image</div>}
    </ImagePreviewStyled>
  )
}

const ImagePreviewStyled = styled.div`
  color: ${theme.colors.greySemiDark};
  grid-row: span 3 / span 3;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr;

  div {
    display: grid;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 100%;

    border: 1px solid ${theme.colors.greyLight};
    border-radius: ${theme.borderRadius.round};
  }

  img {
    width: 100px;
    height: 100px;
    margin: 0 auto;
  }
`
