import React from "react";


const Principal = ({Texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore asperiores suscipit voluptatem maiores. Maxime ea vitae ipsum? Nostrum molestias aut atque repudiandae ipsam dolore quasi? Incidunt temporibus tempore reiciendis quos?"}) => {

    return(

        
        <p>{Texto ?? 'FAIL'}</p>


            
    );



};

export default Principal;