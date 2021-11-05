import logo from './logo.svg';
import './App.css';
import Home from './pagina/Home';
import ItemListContainer from './pagina/ItemListContainer';
import Principal from './componentes/Principal';
import {BrowserRouter, Switch, Router, Redirect } from 'react-router-dom'


function App() {

  

  return (

    <>
     
      <BrowserRouter>
        <Home/>
        
        
          <Principal/>

          

           

            <ItemListContainer greeting={'LISTA ITEMS'} />

         

         


         
        
        
      </BrowserRouter>
       
    </> 

  );

}

export default App;
