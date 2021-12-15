import React from 'react';
import {useState, useEffect} from "react";
import {getFetch} from "../../helpers/getFetch"
import ItemList from '../ItemList/ItemList';
import "../estilos/ItemListContainer.css";
import {Spinner} from "react-bootstrap"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer.js"


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
        <div className='container-fluid card-title'>
            {saludo}
            {loading ? 
                <div className='loading'>
                    <br/>
                    <Spinner animation="border" variant="light" />
                    <h2>cargando...</h2>
                </div>
            :
            <div className="pb-5">
                < ItemList productos ={productos}/>
                <ItemDetailContainer />
            </ div>
            }
            

        </div>
    )
}

export default ItemListContainer
