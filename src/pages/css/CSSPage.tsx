import { Outlet } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'

type Props = {}

const CSSPage = () => {
  const naves = [{ label: 'Position', path: '/css/position' }]
  return (
    <div>
      <NavBar naves={naves} />
      <Outlet />
    </div>
  )
}

export default CSSPage
