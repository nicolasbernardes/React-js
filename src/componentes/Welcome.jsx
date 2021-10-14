import React from "react";



const Welcome = ({title}) => {
    

    return(

       
        <div>
            <p>{title ?? 'hola nicolas'}</p>
            
        </div>


    );
};




export default Welcome;