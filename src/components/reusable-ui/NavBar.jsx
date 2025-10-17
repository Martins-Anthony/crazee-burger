import { Link, useParams } from 'react-router'
import styled from 'styled-components'

export default function NavBar() {
  const { username } = useParams()
  return (
    <NavBarStyled>
      <h1>Hey {username}</h1>
      <Link to={'/'}>
        <button>Déconnexion</button>
      </Link>
    </NavBarStyled>
  )
}

const NavBarStyled = styled.div`
  border: 1px solid green;
`
