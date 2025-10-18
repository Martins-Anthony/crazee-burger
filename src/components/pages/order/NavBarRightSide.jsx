import { IoPersonCircleOutline } from 'react-icons/io5'
import { Link } from 'react-router'
import styled from 'styled-components'
import { theme } from '../../../theme'

export default function NavBarRightSide({ username }) {
  return (
    <NavBarRightSideStyled>
      <div className="card-user">
        <h4>
          Hey, <span className="user">{username}</span>
        </h4>
        <Link to={'/'}>
          <button className="logout">Se déconnexion</button>
        </Link>
      </div>
      <IoPersonCircleOutline />
    </NavBarRightSideStyled>
  )
}

const NavBarRightSideStyled = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};

  .card-user {
    font-family: ${theme.fonts.family.secondary};
    color: ${theme.colors.greyBlue};

    h4 {
      font-weight: ${theme.fonts.weights.regular};
      margin: 0;
    }

    .user {
      color: ${theme.colors.primary};
      font-weight: ${theme.fonts.weights.bold};
    }
  }

  svg {
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
  }

  .logout {
    font-size: ${theme.fonts.size.XXS};
    font-family: ${theme.fonts.family.secondary};
    font-weight: ${theme.fonts.weights.regular};
    color: ${theme.colors.greyBlue};
    padding: 0;
    border: none;
    background: none;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
      text-underline-offset: 0.25rem;
    }
  }
`
