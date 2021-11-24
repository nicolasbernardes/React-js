import React, {useContext} from "react";
import { Contexto } from "../../componentes/CartContext";
import { Link } from 'react-router-dom'


const Cart = ()=>{
    const {carrito, tudo, unidades,Remover} = useContext(Contexto);

    return unidades > 0 ? (
        <>
        <h1  className="TextoCarrito">El total del carrito es {tudo} y tenes {unidades} unidades</h1>
        {carrito.map( (item) => {

            return(

            <div className="DivCarrito">
                <h2>nombre:{item.nombre}</h2>
                <h2>precio:${item.precio}</h2>
                <h2>cantidad:{item.cantidad}</h2>
                <h2>subtotal:${item.subtotal}</h2>
                <button onClick={() => Remover (item.id)}>X</button>
            </div>

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

 





