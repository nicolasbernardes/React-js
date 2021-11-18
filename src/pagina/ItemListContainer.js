import React, {useState, useEffect} from "react";
import ItemList from "./ItemList/ItemList";
import { useParams, /* useHistory */ } from "react-router-dom";

import db from "../firebase/firebase";
import { collection, query, where, getDocs } from 'firebase/firestore';





const ItemListContainer = () => {

    

    const [mercadoria, setMercadoria] = useState ('')
    const [finalizado, setFinalizado] = useState(true)

    const {cambiosId} = useParams();

    useEffect( () => {

        setFinalizado(true);

        


        const misItems = cambiosId 
            
        ? query (collection(db, 'produtos'), where('category', '==', cambiosId) )
        :
        collection(db, 'produtos');


        getDocs(misItems).then((res) => {

        const results = res.docs.map( (doc) => {
          return {...doc.data(), id: doc.id };
        });


        setMercadoria(results);

        }).finally( () => setFinalizado(false));

            
        


    },[cambiosId]);

    

    return(
        <>

            <div>
                {finalizado ? 
                
            <div class="spinner">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
            </div>                               
            
            : <ItemList mercadoria={mercadoria}/>}
            </div>

            
            

        </>

    );



}


export default ItemListContainer;