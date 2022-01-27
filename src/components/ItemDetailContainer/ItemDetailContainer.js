import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom"
import{doc, getDoc,getFirestore} from "firebase/firestore"

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const[producto, setProducto] = useState({})


    const {id} = useParams()


    useEffect(() => {
        const db = getFirestore()
        const queryDb = doc(db, "productos", id)
        getDoc(queryDb)
        .then (resp => setProducto({ id: resp.id, ...resp.data() }))
        .catch((err) => console.log(err))
        .finally(()=> setLoading(false))

    },[id])

    return (
        <div>
            {loading ? 
                <div className='loading'>
                    <br/>
                    <Spinner animation="border" variant="light" />
                    <h2>cargando...</h2>
                </div>
                :
                <div>
                <ItemDetail producto={producto} />
                </div>
            }
        </div>
    
    );
};
export default ItemDetailContainer;
