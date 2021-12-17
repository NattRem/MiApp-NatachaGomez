import React from 'react';
import {useState, useEffect} from "react";
import {getFetch} from "../../helpers/getFetch"
import ItemList from '../ItemList/ItemList';
import "../estilos/ItemListContainer.css";
import {Spinner} from "react-bootstrap"
import {useParams} from "react-router-dom"


function ItemListContainer({saludo}) {
    const[productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {idCateg} = useParams()

    useEffect(() => {
        if (idCateg) {
            getFetch
                .then(resp => setProductos(resp.filter(prod => prod.categ === idCateg)))
                .catch(err => console.log(err))
                .finally(()=> setLoading(false))
        } else {
            getFetch
                .then(resp => setProductos(resp))
                .catch(err => console.log(err))
                .finally(()=> setLoading(false))
        }


        
    }, [idCateg]);

    console.log(idCateg);

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
                
            </ div>
            }
            

        </div>
    )
}

export default ItemListContainer
