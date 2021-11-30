import db from '../firebase/firebase'
import { collection , addDoc, getDocs} from "firebase/firestore";
import { useEffect, useState } from 'react';





export const Welcome = () =>{

    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPhone, setNewPhone] = useState(0);


    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db,'orders')


    const createUser = async () => {
        await addDoc(usersCollectionRef,  {
            name: newName,
            email: newEmail, 
            telefono: newPhone})

    };

    useEffect(() => {
        const getUsers = async () => {
          const data = await getDocs(usersCollectionRef);
          setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
    
        getUsers();

    }, );


    return(


        <div className="formulario"> 

            <div className="formularioPergunta">

                <input placeholder="Nombre y Apellido"
                onChange={(event) => {setNewName(event.target.value);
                }}
                />

                <input placeholder="Email" 
                onChange={(event) => {setNewEmail(event.target.value);
                }}
                />

                <input type="number" placeholder="Telefono"
                onChange={(event) => {setNewPhone(event.target.value);
                }}
                />

                <button onClick={createUser}> Crear </button>

            </div> 

            {users.map((user) => {
                return (
                    <div className="formularioResposta">
                        {" "}
                        <p>Name: {user.name} </p>
                        <p>Email: {user.email} </p>
                        <p>Telefono: {user.telefono} </p>

                            
                    </div>
                    );
                })}  
              
        </div>
    ); 

};
    
 













