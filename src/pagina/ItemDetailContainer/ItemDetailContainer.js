import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';

import db from '../../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const [carregar, setCarregar] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    setCarregar(true);
    

    const myItem = doc(db, 'produtos', id)

    getDoc(myItem).then((res) => {
      const result = { id: res.id, ...res.data() };
      setDetail(result);

    })
    .finally( () =>{

      setCarregar(false);

    });
      
      
  }, [ id ]);

  return carregar ?  

  <div class="spinner">                 
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
  </div> 


: <ItemDetail {...detail} />;
};


export default ItemDetailContainer; 