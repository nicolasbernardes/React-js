import React, {useContext} from "react";
import { Contexto } from "../../componentes/CartContext";
import { Link } from 'react-router-dom'
import { Welcome } from "../../componentes/Welcome";
import swal from 'sweetalert';




const Cart = () =>{

    const mostrarAlerta = () =>{
        swal({
            title:"Comprar",
            text:"Desea finalizar su compra?",
            icon:"warning",
            buttons:["No","Si"]




        }).then(resposta =>{
            if(resposta){
                
                swal({
                    
                    title:"La compra fue realizada",
                    
                    icon:"success"})
            }
        })
            
           
    }
    

    const {carrito, tudo, unidades,remove} = useContext(Contexto);
    

    return unidades > 0 ? (
        <>
       
        <Welcome/>

      <button onClick={()=>mostrarAlerta()} className="buttonCompra">comprar</button>

        
        <h1  className="TextoCarrito">El total del carrito es {tudo} y tenes {unidades} unidades</h1>
        {carrito.map( (item) => {

            return(
            <>        
                <div className="DivCarrito">
                    <h2>nombre:{item.nombre}</h2>
                    <h2>precio:${item.precio}</h2>
                    <h2>cantidad:{item.cantidad}</h2>
                    <h2>subtotal:${item.subtotal}</h2>
                    <button onClick={() => remove (item.id)}>X</button>
                </div>

                
            </>    
            );

            

        })}

        </>
            
    ) : (

        <>
          <h1 className="SinItem">NO HAY PEDIDOS</h1>  

            <Link className="LinkTiendaSinItem" to="/">Tienda</Link>


        </>
    );
};

export default Cart;  

 





