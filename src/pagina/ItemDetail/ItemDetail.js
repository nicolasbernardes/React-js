import React, {useState, useContext} from "react";
import ItemCount from "../../ItemCount/ItemCount";
import { Link } from "react-router-dom"
import { Contexto } from "../../componentes/CartContext";

const ItemDetail = ({ id, nombre, imagen, precio, texto, stock }) => {

  const [compro, setCompro] = useState(false)
  const {onAdd} = useContext(Contexto)

  const adicionar = (props)=>{
    setCompro(true)
    onAdd({id,nombre,precio}, props.unidades)
    alert (`agrego ${props.unidades} al carrito`)

  }

  return !id ? (
      <h1>NOT FOUND</h1>

      
    ) : (
          <>
            <h1 className="NombreDetail">{nombre}</h1>
            <img className="ImgDetail" src={imagen} alt={nombre} />
            <h2 className="PrecioDetail"> {precio}</h2>
            <h2 className="TextoDetail">{texto}</h2> 
            {!compro? <ItemCount stock={stock} onAdd={adicionar} /> : <Link to='/cart'><button className="ButtonDetail">terminar la compra</button></Link>}
          </>
  );

};


export default ItemDetail;
