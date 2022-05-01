import ItemContainer from './Containers/ItemContainer';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CartContextProvider from './CartContext/CartContext';

function App() {
  return (<>
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <ItemContainer />
        <Footer />
      </CartContextProvider>
    </BrowserRouter>
  </>
  );
}

export default App;
