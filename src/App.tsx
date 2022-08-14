import { Routes, Route } from 'react-router-dom'
import NavBar, { Nav } from './components/NavBar/NavBar'
import CSSPage from './pages/css/CSSPage'
import PositionPage from './pages/css/PositionPage'
import HomePage from './pages/HomePage'
import StyledApp from './StyledApp'

function App() {
  const naves: Nav[] = [
    { label: 'Home', path: '/' },
    { label: 'CSS', path: '/css' },
  ]
  return (
    <StyledApp>
      <NavBar naves={naves} />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/css" element={<CSSPage />}>
          <Route path="position" element={<PositionPage />}></Route>
        </Route>
      </Routes>
    </StyledApp>
  )
}

export default App
