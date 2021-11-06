import React, {useState, useEffect} from "react";
import ItemList from "./ItemList/ItemList";
import comidas from "../Comidas/Comidas"
import { useParams, /* useHistory */ } from "react-router-dom";





const ItemListContainer = () => {

    

    const [mercadoria, setMercadoria] = useState ('')
    const [finalizado, setFinalizado] = useState(true)

    const {cambiosId} = useParams();

    useEffect( () => {
        setFinalizado(true);
        const ListaDeProdutos= new Promise((resultado)=>{
            setTimeout(()=>{
                resultado(comidas)
            },1000);

            
        });

        ListaDeProdutos.then((comidas)=>{
            cambiosId ? setMercadoria(comidas.filter(i => i.category === cambiosId))
                

            :setMercadoria(comidas)
            setFinalizado(false)
        });


    },[cambiosId]);

    

    return(
        <>

            

            <div>
                {finalizado ? <h2>Cargando....</h2> : <ItemList mercadoria={mercadoria}/>}
            </div>
            
            

        </>

    );



}


export default ItemListContainer;