import React from "react";

const ItemDetail = ({ id, nombre, imagen, precio, texto }) => {
    return !id ? (
      <h1>EL ITEM NO EXISTE</h1>
    ) : (
          <>
            <h1>{nombre}</h1>
            <img src={imagen} alt={nombre} />
            <p>$ {precio}</p>
            <p>{texto}</p>
          </>
        );
};


export default ItemDetail;