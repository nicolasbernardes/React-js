import React from "react";



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
                
                <a className="NavLinkLogo" href="LinkCart"><img className="NavLinkImg" src="../../../logoCart.jpg" alt="logoCart" /></a>

            </div>

        </div>




    );



};



export default Navbar;
