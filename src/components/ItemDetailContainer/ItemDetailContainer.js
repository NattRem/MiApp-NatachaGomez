import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import {getProducto} from "../../helpers/getProducto";
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom"

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true)


    const {id} = useParams()


    useEffect(() => {
    getProducto
        .then((res) => setItem(res.find(item => item.id === parseInt(id))))
        .catch((err) => console.log(err))
        .finally(()=> setLoading(false))
    },[id]);

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
                <ItemDetail item={item} />
                </div>
            }
        </div>
    
    );
};
export default ItemDetailContainer;
