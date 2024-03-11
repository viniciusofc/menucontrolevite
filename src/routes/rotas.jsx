import * as React from 'react';

//ROTAS
import RotasPublicas from './rotasPublicas';
import RotasPrivadas from './rotasPrivadas';

import { AuthContext } from '../context/authContext';
import { useContext } from 'react';


const RoutesApp = () => {
  //const { signed, IsTokenValid } = useContext(AuthContext);
  const { signed } = useContext(AuthContext);

  return (
    // signed && IsTokenValid ? <RotasPrivadas /> : <RotasPublicas />
    true ? <RotasPrivadas /> : <RotasPublicas />
  )
}

export default RoutesApp;