import React from "react";
import { Link } from "react-router-dom";




const Item =({nombre, precio,id,tipo,imagen,category})=>{
    return(
        <Link to={`/item/${id}`}>

            <div className={`item ${category}-category`}>
                <h3 className="CategoriaProducto">{category}</h3>
                <h3 className="NombreProducto">{nombre}</h3>
                <h3 className="PrecioProducto">{precio}</h3>
                <h3 className="TipoProducto">{tipo}</h3>
                <img className="ImgProducto" src={imagen} alt={nombre}/>
            </div>
            
        </Link>    
    );
};


export default Item;