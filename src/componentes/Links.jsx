import React, {useEffect, useState} from "react";
import LinkForm from "./LinkForm";
import db from '../firebase/firebase'
import { toast } from "react-toastify";




const Links = () =>{


    const [links,setLinks] = useState([]);

    const addOrEditLink = async (linkObject) => {
      await db.collection('orders').doc().set(linkObject);
      toast('novo', {
          type:'final'
      })
    };


    const onDeleteLink = async (id) => {
       if (window.confirm('quer mesmo apagar ?')){
         await db.collection('orders').doc(id).delete();
         toast('removido', {
            type:'apagou',
            autoClose:2000
        })
       }
        
    };


    const getLinks = async () => {
        db.collection("orders").onSnapshot((querySnapshot)=> {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id});
        });

        setLinks(docs);

        });

    }

    useEffect(() => {
        getLinks();

    }, []);


    return <div>

        <div className="col-md-4 p-2">
            <LinkForm addOrEditLink={addOrEditLink}/>
        </div>
        

        <div className="col-md-8 p-2">
            {links.map (link => (

                <div className="card mb-1" key={link.id}>

                    <div className="card-body">
                        <div className="d-flex justify-content-between"> 
                            <h4>{link.name}</h4>

                            <i className="material-icons text-danger" onClick={() => onDeleteLink(link.id)}>close</i>

                        </div>
                            
                        <p>{link.email}</p>

                    </div>

                </div>
            ))}
                
               
        </div>


    </div>
}


export default Links;