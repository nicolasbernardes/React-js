/* import logo from './logo.svg'; */
import './App.css';
import Home from './pagina/Home';
import ItemListContainer from './pagina/ItemListContainer';
import Principal from './componentes/Principal';
import {BrowserRouter, Routes, Route, /* Redirect */ } from 'react-router-dom';
import ItemDetailContainer from './pagina/ItemDetailContainer/ItemDetailContainer';


function App() {

  

  return (

    <>  
      <BrowserRouter>
      
        
        <Home/>
          
        <Routes>  

          <Principal/>

            

          <Route  ///TODOS LOS PRODUCTOS
            path="/"
            element={<ItemListContainer />}
          />

          <Route  ///Categorias a y b 
            path="/category/:cambiosId"
            element={<ItemListContainer />}
          />

          <Route path="/item/:id" element={<ItemDetailContainer />} /> 
          {/* prductos details */}


        </Routes>  
          
        
        
      </BrowserRouter> 

    </>
  );

}

export default App;
