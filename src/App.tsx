import { Routes, Route } from 'react-router-dom'
import NavBar, { Nav } from './components/NavBar/NavBar'
import AntD from './pages/antd/AntD'
import CSSPage from './pages/css/CSSPage'
import PositionPage from './pages/css/PositionPage'
import HomePage from './pages/HomePage'
import QRCodeDemo from './pages/qr-code/QRCodeDemo'
import TsPage from './pages/ts/TsPage'
import Wenyuan from './pages/wenyuan/Wenyuan'
import StyledApp from './StyledApp'

function App() {
  const naves: Nav[] = [
    { label: 'Home', path: '/' },
    { label: 'CSS', path: '/css' },
    { label: 'Typescript', path: '/ts' },
    { label: 'QR Code', path: '/qr-code' },
    { label: 'wenyuan', path: '/wenyuan' },
    { label: 'antd', path: '/antd' },
  ]
  return (
    <StyledApp>
      <NavBar naves={naves} />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/css" element={<CSSPage />}>
          <Route path="position" element={<PositionPage />}></Route>
        </Route>
        <Route path="/ts" element={<TsPage />}></Route>
        <Route path="/qr-code" element={<QRCodeDemo />}></Route>
        <Route path="/wenyuan" element={<Wenyuan />}></Route>
        <Route path="/antd" element={<AntD />}></Route>
      </Routes>
    </StyledApp>
  )
}

export default App
