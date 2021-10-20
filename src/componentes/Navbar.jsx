import React from "react";
import CartWidget from "./CartWidget";



const Navbar = () => {

    return(

        <div className="NavBar">
            
            <div>
                
                <img className="NavLogo" src="../../../logoAPP.png" alt="logo" />

            </div>
            

            <div className="NavLinks">
                <a className="Links" href="teste1">Home</a>
                <a className="Links" href="teste2">Products</a>
                <a className="Links" href="teste3">Info</a>
                <a className="Links" href="teste4">Others</a>
            </div>



            <div className="NavCart">
                <CartWidget/>
            </div>

        </div>


        




    );



};



export default Navbar;
