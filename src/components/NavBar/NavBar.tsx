import { Link, useLocation } from 'react-router-dom'
import StyledNavBar from './StyledNavBar'

export type Nav = {
  path: string
  label: string
}

type Props = {
  naves: Nav[]
}

const NavBar = ({ naves }: Props) => {
  const location = useLocation()

  return (
    <StyledNavBar>
      {naves.map((item, index) => (
        <Link
          to={item.path}
          key={index}
          className={[location.pathname === item.path ? 'active' : ''].join(
            ' '
          )}
        >
          {item.label}
        </Link>
      ))}
    </StyledNavBar>
  )
}

export default NavBar
