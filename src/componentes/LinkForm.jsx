import React, {  useState } from "react";


const LinkForm = (props) => {

    const initialStateValues = {
        email:'',
        name:'',
        telefono:''
    };

   const [values, setValues] = useState(initialStateValues);


   const handleInputChange = (e) => {      
        const {name, value} = e.target;
        setValues({...values, [name]: value})
        
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.addOrEditLink(values);
        setValues({...initialStateValues})
    };

    

    

    return (

        <form className="card card-body" onSubmit={handleSubmit}>
            <div className="form-group input-group">

                <div className="input-group-text bg-light"/>

                 

                



                <input
                type="text" 
                className="form-control"
                placeholder="Email"
                name="email"
                onChange={handleInputChange}
                value={values.email} />

            </div>
            

            <div className="form-group input-group">
                <div className="input-group-text bg-light"> 
                    <i className="material-icons">creat</i>
                </div> 

                <input
                type="text"
                className="form-control" 
                name="name" 
                placeholder="Nombre y Apellido"
                onChange={handleInputChange}
                value={values.name}  />
            </div>


            <div className="form-group input-group">
                <div className="input-group-text bg-light"> 
                    <i className="material-icons">creat</i>
                </div> 

                <input
                type="number"
                className="form-control" 
                name="telefono" 
                placeholder="Telefono"
                onChange={handleInputChange}
                value={values.telefono}  />
            </div>

            <button className="btn btn-primary btn-block">
                save
            </button>

        </form>

    )
};




export default LinkForm;