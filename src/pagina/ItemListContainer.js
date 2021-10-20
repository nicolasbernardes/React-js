import React, {useState, useEffect} from "react";
import ItemList from "./ItemList/ItemList";
import comidas from "../Comidas/Comidas"




const ItemListContainer = () => {

    const [mercadoria, setMercadoria] = useState ('')
    const [finalizado, setFinalizado] = useState(true)

    useEffect( ()=>{
        const ListaDeProdutos= new Promise((resultado, rej)=>{
            setTimeout(()=>{
                resultado(comidas)
            },3000);

            
        });

        ListaDeProdutos.then((comidas)=>{
            setMercadoria(comidas)
            setFinalizado(false)
        })

        
    },[]);

    

    return(
        <>

            

            <div>
                {finalizado ? <h2>Cargando....</h2> : <ItemList mercadoria={mercadoria}/>}
            </div>
            
            

        </>

    );



}


export default ItemListContainer;