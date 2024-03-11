
import { AuthProvider } from '../src/context/authContext';
// import { CartProvider } from './context/CartContext'
// import { SnackProvider } from './context/SnackContext'
import RoutesApp from './routes/rotas';


function App() {

  return (
    <AuthProvider>

      {/* <CartProvider> */}
      <RoutesApp />
      {/* </CartProvider> */}

    </AuthProvider>

  );
}

export default App;
