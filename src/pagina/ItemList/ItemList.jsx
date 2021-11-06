import React from "react";
import Item from "../Item/Item";    



const ItemList = ({ mercadoria }) => {   

    return (

        <>
            <div className="ApresetacionProducto">
                {mercadoria.map((producto) => (  

                    <Item

                    Key={producto.id} nombre={producto.nombre} precio={producto.precio} tipo={producto.tipo} imagen={producto.imagen} />

                ))}
            </div>
        </>

   );

};

export default ItemList