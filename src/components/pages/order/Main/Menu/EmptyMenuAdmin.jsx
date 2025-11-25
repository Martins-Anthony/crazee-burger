import Button from '../../../../reusable-ui/Button'
import { EmptyMenuStyled } from './EmptyMenuStyled'

export default function EmptyMenuAdmin({ onReset }) {
  return (
    <EmptyMenuStyled>
      <h1>Le menu est vide ?</h1>
      <p>Cliquez ci-dessous pour le réinitialiser</p>
      <Button
        label={'Générer de nouveaux produits'}
        onClick={onReset}
      />
    </EmptyMenuStyled>
  )
}
