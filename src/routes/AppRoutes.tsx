import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Integrantes from '../pages/Integrantes'
import IntegranteDetalhe from '../pages/IntegranteDetalhe'
import Sobre from '../pages/Sobre'
import FAQ from '../pages/FAQ'
import Contato from '../pages/Contato'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/integrantes" element={<Integrantes />} />
      <Route path="/integrantes/:id" element={<IntegranteDetalhe />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
