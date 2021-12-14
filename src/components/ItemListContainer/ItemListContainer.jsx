import React from 'react';
import ItemCount from "./ItemCount";
import {useState, useEffect} from "react";
import {getFetch} from "../../helpers/getFetch"
import ItemList from '../ItemList/ItemList';
import "../estilos/ItemListContainer.css";


function ItemListContainer({saludo}) {
    const[productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [])

    return (
        <div className='bg'>
            {saludo}
            {loading ? 
                <h2>cargando...</h2>
            :
                < ItemList productos ={productos}/>
            }
        </div>
    )
}

export default ItemListContainer
