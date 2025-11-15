import PrimaryButton from '../../../../reusable-ui/PrimaryButton'
import { EmptyMenuStyled } from './EmptyMenuStyled'

export default function EmptyMenuAdmin({ onReset }) {
  return (
    <EmptyMenuStyled>
      <h1>Le menu est vide ?</h1>
      <p>Cliquez ci-dessous pour le réinitialiser</p>
      <PrimaryButton
        label={'Générer de nouveaux produits'}
        onClick={onReset}
      />
    </EmptyMenuStyled>
  )
}
