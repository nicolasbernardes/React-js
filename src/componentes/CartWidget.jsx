import React from "react";
import { Link } from "react-router-dom";



const CartWidget =()=>{
    

    return(

        <>
        
            <Link className="NavLinkLogo" to="/cart">
                <img className="NavLinkImg" src="../../../logoCart.jpg" alt="logoCart" />
            </Link>     
          
          
        
        </>
    );
};

export default CartWidget;