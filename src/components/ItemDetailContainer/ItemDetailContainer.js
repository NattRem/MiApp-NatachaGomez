import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
// import {getProducto} from "../../helpers/getProducto";
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom"
import{doc, getDoc,getFirestore} from "firebase/firestore"

const ItemDetailContainer = () => {
    // const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true)
    const[producto, setProducto] = useState({})


    const {id} = useParams()


    // useEffect(() => {
    // getProducto
    //     .then((res) => setItem(res.find(item => item.id === parseInt(id))))
    //     .catch((err) => console.log(err))
    //     .finally(()=> setLoading(false))
    // },[id]);

    useEffect(() => {
        const db = getFirestore()
        const queryDb = doc(db, "productos", id)
        getDoc(queryDb)
        .then (resp => setProducto({ id: resp.id, ...resp.data() }))
        .catch((err) => console.log(err))
        .finally(()=> setLoading(false))

    }, {id})
    console.log(producto);

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
