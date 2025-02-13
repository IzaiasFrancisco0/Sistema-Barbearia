import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Agendar from './components/agendar/Agendar.jsx';
import MostrarTabela from './components/tabela/MostrarTabela.jsx';
import Concluidos from './components/concluidos/Concluidos.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Agendar" element={<Agendar />} />
        <Route path="/MostrarTabela" element={<MostrarTabela />} />
        <Route path="/Concluidos" element={<Concluidos />} />
      </Routes>
    </Router>
  </StrictMode>,
)
