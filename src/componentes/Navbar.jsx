import React from "react";
import CartWidget from "./CartWidget";
import { NavLink,   Link   } from "react-router-dom";




const Navbar = () => {

    const categories = [
        { id: 'all', address: '/', text: 'TODOS LOS PRODUCTOS' },
        { id: 'cata', address: '/categoria/SALADOS', text: 'SALADOS' },
        { id: 'catb', address: '/categoria/DULCES', text: 'DULCES' },
        
    ];
    



    return(
            
        <div className="NavBar">




            
            <div>

                <Link to='/'> 
                    <img className="NavLogo" src="../../../logoAPP.png" alt="logo" />
                </Link>
                  
            </div> 
                

            {categories.map((cat) => {
                return (
                    <div className="CategoriaLinks" key={cat.id}>
                        <NavLink
                            to={cat.address}
                            style={({ isActive }) => {
                                return {
                                    color: isActive && 'rgb(14, 240, 14)',
                                    fontSize: isActive && '65px',
                                    flexDirection: isActive && 'column',
                                    
                                };
                            }}
                            >
                            {cat.text}
                        </NavLink>
                    </div>
                );
            })}
            



            <div className="NavCart">
                <CartWidget/>
            </div>

        </div>

        
        
        
    );



};



export default Navbar;
