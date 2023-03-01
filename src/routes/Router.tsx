import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TMB } from '../components/TMB'
import { Home } from '../pages/Home'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TMB" element={<TMB />} />
      </Routes>
    </BrowserRouter>
  )
}
