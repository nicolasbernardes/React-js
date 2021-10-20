import React from "react";





const Item =({nombre, precio,id,tipo,imagen})=>{
    return(

        <div className="item">
            <h3>{id}</h3>
            <h3 className="NombreProducto">{nombre}</h3>
            <h3 className="PrecioProducto">{precio}</h3>
            <h3 className="TipoProducto">{tipo}</h3>
            <img className="ImgProducto" src={imagen} alt={nombre}/>
        </div>
    );
};


export default Item;