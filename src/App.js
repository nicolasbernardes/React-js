/* import logo from './logo.svg'; */
import './App.css';
import Home from './pagina/Home';
import ItemListContainer from './pagina/ItemListContainer';
import Principal from './componentes/Principal';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './pagina/ItemDetailContainer/ItemDetailContainer';
import { CartContext } from './componentes/CartContext'
import Cart from './pagina/Cart/Cart';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  

  return (

    <>  
      <BrowserRouter>
      
        <CartContext>  

          <Home/>

          <ToastContainer/>
            
          <Routes>  

            

              

            <Route  ///TODOS LOS PRODUCTOS
              path="/"
              element={ <>  <Principal /> <ItemListContainer /> </>}
            />

            <Route  ///Categorias a y b 
              path="/categoria/:cambiosId"
              element={<ItemListContainer />}
            />

            <Route path="/item/:id" element={<ItemDetailContainer />} /> 

            <Route path="/cart" element={<Cart />} /> 

            

            
            


          </Routes>  
          
        </CartContext>  
        
      </BrowserRouter> 

    </>
  );

}

export default App;
