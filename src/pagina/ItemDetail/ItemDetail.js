import React from "react";

const ItemDetail = ({ id, nombre, imagen, precio, texto }) => {
    return !id ? (
      <h1>NOT FOUND</h1>

      
    ) : (
          <>
            <h1>{nombre}</h1>
            <img src={imagen} alt={nombre} />
            <h2>$ {precio}</h2>
            <h2>{texto}</h2>
          </>
        );
};


export default ItemDetail;
