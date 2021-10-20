import React from "react";
import comidas from "../../Comidas/Comidas";
import Item from "../Item/Item";




const ItemList =()=>{
    return(
        <>
            {comidas.map((producto)=>
                <Item Key={producto.id} nombre={producto.nombre} precio={producto.precio} tipo={producto.tipo} imagen={producto.imagen}/>
            )}

        </>
    )
}


export default ItemList;