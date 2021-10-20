import React from "react";


const Principal = ({texto="Tienda"}) => {

    return(
        <>

            <div>
                 <h1 className="NombreTienda">{texto ?? 'FAIL'}</h1>
            </div>

           
            <div className="Categorias">
                <h2>Nombre:</h2>
                <h2>Precio:</h2>
                <h2>Tipo:</h2>
            </div>
            

        </>    
    );



};

export default Principal;