import React, { useState } from "react";


const Contexto = React.createContext()

const CartContext = ({ children }) =>{
    const [carrito, setCarrito] = useState([]);
    const [unidades, setUnidades] = useState(0);
    const [tudo, setTudo] = useState(0);

    const onAdd = (producto, cantidad) =>{
        const hayItem=carrito.find(item=>item.id===producto.id)
        if(!hayItem){
            setCarrito([...carrito, {id:producto.id, nombre:producto.nombre, precio:producto.precio, cantidad:cantidad, subtotal:(producto.precio*cantidad)}])
            setTudo(tudo+(producto.precio*cantidad))
            setUnidades(unidades+1)

            setUnidades(unidades+cantidad);
        } else {
            const carrinho=carrito.map((receta)=>{
                if(receta.id===producto.id){
                    receta.cantidad+=cantidad
                    receta.subtotal+=(producto.precio*cantidad)
                }
                return receta
            })
            setCarrito(carrinho)
            setTudo(tudo+(producto.precio*cantidad))



            setUnidades(unidades + cantidad);

           
        }
    }

    
    const remove = (id) =>{

        const meusitens = carrito.find ((item => item.id === id));

        const CarritoFilter = carrito.filter((item) => item.id !==id);

        setCarrito(CarritoFilter);


        setUnidades(unidades - meusitens.cantidad);


        setTudo(tudo - meusitens.subtotal);


        


    };



    
    return <Contexto.Provider value={{carrito, unidades, tudo, onAdd, remove }}>
        {children}
    </Contexto.Provider>




    

}


export { CartContext, Contexto } 

