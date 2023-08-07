import './Styles/EstilosGlobais.scss'
import PaginaInicial from "./Paginas/PaginaInicial";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cabecalho from './Componentes/Cabecalho';
import SobreMim from 'Paginas/SobreMim';
import Rodape from 'Componentes/Rodape';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Routes>
        <Route path='/' element={<PaginaInicial />} />
        <Route path='/sobre' element={<SobreMim />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
