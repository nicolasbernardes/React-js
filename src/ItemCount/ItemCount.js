import React, {useState} from "react";


const ItemCount = (props) =>{
const [cantidad, setCantidad] = useState(props.stock)
const [unidades, setUnidades] = useState(0)

const handleStock={

    sumastock:()=>{
      if(cantidad===0){
        alert('No tengo mas deste producto')
      } else {
          setUnidades(unidades+1)
          setCantidad(cantidad-1)
        }
    },

 
    restaStock:()=>{

        if(unidades===0){
          alert('no podes menos de 0')
        } else {
            setUnidades(unidades-1)
            setCantidad(cantidad+1)
        }
    } 




}

return(
    <div>
        
        <div>
            <button className="ButtonResta" onClick={handleStock.restaStock}>-</button>
            <p className="TextoUnidades" >{unidades}</p>
            <button className="ButtonSuma" onClick={handleStock.sumastock}>+</button>
        </div>

        <div>
            <p className="TextoStock">Stock disponible: {cantidad}</p>
        </div>
        
        <div>
            <button className="ButtonFinal" onClick={()=>props.onAdd ({unidades})}>comprar no carito</button>
        </div>


    </div>
)

}

export default ItemCount;