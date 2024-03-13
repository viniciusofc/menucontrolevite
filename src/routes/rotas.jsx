import * as React from 'react';

//ROTAS
import RotasPublicas from './rotasPublicas';
import RotasPrivadas from './rotasPrivadas';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { useContext } from 'react';


const RoutesApp = () => {
  //const { signed, IsTokenValid } = useContext(AuthContext);
  const { signed } = useContext(AuthContext);

  const router = true 
  return (
    // signed && IsTokenValid ? <RotasPrivadas /> : <RotasPublicas />
    <Router>
      <Routes>
        {/* Rotas públicas acessíveis para todos */}
     

        {/* Rotas privadas acessíveis somente para usuários autenticados */}
        {router ? (
          <Route path="/*" element={<RotasPrivadas />} />
        ) : (
          <Route path="/*" element={<RotasPublicas />} />
        )}
         
      </Routes>
    </Router>

  )
}

export default RoutesApp;