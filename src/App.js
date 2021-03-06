
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import  CartContextProvider from './components/Context/CartContext';
import Cart from './components/cart/Cart';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App bg container-fluid p-2">
            <NavBar />
            <Routes>
              <Route exact
              path="/" element={<ItemListContainer />} />

              <Route exact path="/categoria/:idCateg" element={<ItemListContainer />} />

              <Route exact path="/detalle/:id" element={<ItemDetailContainer />} />

              <Route exact path="/cart" element={<Cart/>} />

              
              
            </Routes>
            <Footer/>
        </div>
      </BrowserRouter>
      </CartContextProvider>

  );
}

export default App;
