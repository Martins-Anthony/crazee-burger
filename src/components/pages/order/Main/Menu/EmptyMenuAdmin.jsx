import PrimaryButton from '../../../../reusable-ui/PrimaryButton'

export default function EmptyMenuAdmin({ onReset }) {
  return (
    <div>
      <h1>Le menu est vide ?</h1>
      <h2>Cliquez ci-dessous pour le réinitialiser</h2>
      <PrimaryButton label={'Générer de nouveaux produits'} onClick={onReset} />
    </div>
  )
}
