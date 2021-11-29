import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Contexto } from "./CartContext";



const CartWidget =()=>{
    
    const {unidades} = useContext(Contexto)

        return(



            unidades > 0 && (


                <Link className="NavLinkLogo" to="/cart">
                    <img className="NavLinkImg" src="../../../teste.jpg" alt="" />

                    <p className="NumberCart">{unidades}</p>
                </Link>     
            
            )
            
            
        );
};

export default CartWidget;