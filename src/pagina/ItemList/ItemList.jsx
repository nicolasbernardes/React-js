import React from "react";
import Item from "../Item/Item";    



const ItemList = ({ mercadoria }) => {   

    return (

        <>
            <div className="ApresetacionProducto">
                {mercadoria?.map((producto) => (  

                    <Item

                    key={producto.id} nombre={producto.nombre} precio={producto.precio} tipo={producto.tipo} imagen={producto.imagen} id={producto.id} category={producto.category}/>

                ))}
            </div>
        </>

   );

};

export default ItemList