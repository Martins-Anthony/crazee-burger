import Cards from './Cards'

export default function Menu({ listMenu }) {
  return (
    <>
      {listMenu.map(menu => {
        return (
          <Cards
            key={menu.id}
            pathPicture={menu.imageSource}
            title={menu.title}
            price={menu.price}
          />
        )
      })}
    </>
  )
}
