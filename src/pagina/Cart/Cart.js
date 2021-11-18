import React, {useContext} from "react";
import { Contexto } from "../../componentes/CartContext";


const Cart = ()=>{
    const {carrito, tudo, unidades} = useContext(Contexto)

    return(
        <>
        <h1  className="TextoCarrito">El total del carrito es {tudo} y tenes {unidades} unidades</h1>
        {carrito.map((item)=>
            <div className="DivCarrito">
                <h2>nombre:{item.nombre}</h2>
                <h2>precio:${item.precio}</h2>
                <h2>cantidad:{item.cantidad}</h2>
                <h2>subtotal:${item.subtotal}</h2>
                <button>X</button>
            </div>
            )}
        </>
    )
}

export default Cart;  



