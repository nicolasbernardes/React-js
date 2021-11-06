import React, { useState, useEffect } from 'react';
import  ItemDetail  from './ItemDetail/ItemDetail'
import { comidas } from '../Comidas/Comidas'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const [carregar, setCarregar] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setCarregar(true);
    const todosItens = new Promise((resolve) => {
      setTimeout(() => {
        resolve(comidas);
      }, 1000);
    });

    
    todosItens.then((comidas) => {
        setDetail(comidas.find((i) => i.id === id));
      })
      .finally(() => setCarregar(false));
      
  }, [id]);

  return carregar ? <h3>Cargando...</h3> : <ItemDetail {...detail} />;
};


export default ItemDetailContainer;