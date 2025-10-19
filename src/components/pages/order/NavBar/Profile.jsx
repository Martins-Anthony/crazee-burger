import { IoPersonCircleOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../../../theme'

export default function Profile({ username }) {
  return (
    <ProfileStyled>
      <div className="info">
        <h4>
          Hey, <b className="user">{username}</b>
        </h4>
        <Link to={'/'}>
          <button className="logout">Se déconnecter</button>
        </Link>
      </div>
      <IoPersonCircleOutline className="picture" />
    </ProfileStyled>
  )
}

const ProfileStyled = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};

  .info {
    color: ${theme.colors.greyBlue};
    text-align: right;

    h4 {
      font-weight: ${theme.fonts.weights.regular};
      margin: 0;
    }

    .user {
      color: ${theme.colors.primary};
    }
  }

  .picture {
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
  }

  .logout {
    font-size: ${theme.fonts.size.XXS};
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
