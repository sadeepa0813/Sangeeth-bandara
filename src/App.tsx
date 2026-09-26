import { Routes, Route } from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import Auth from './pages/Auth'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/login" element={<Auth />} />
    </Routes>
  )
}
