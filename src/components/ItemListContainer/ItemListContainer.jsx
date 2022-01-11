import React from 'react';
import {useState, useEffect} from "react";
import ItemList from '../ItemList/ItemList';
import "../estilos/ItemListContainer.css";
import {Spinner} from "react-bootstrap"
import {useParams} from "react-router-dom"
import{ collection, query, where,getFirestore, getDocs} from "firebase/firestore"




function ItemListContainer({saludo}) {
    const[productos, setProductos] = useState([])

    const [loading, setLoading] = useState(true)

    const {idCateg} = useParams()

    useEffect(() => {
        const db = getFirestore()
        if (idCateg) {
            
            const queryCollection = query(collection(db, "productos"),where("categ", "==", idCateg))
            getDocs(queryCollection)
            .then(resp => setProductos(resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
            .catch(err => console.log(err))
            .finally(()=> setLoading (false))
        } else {
            const db = getFirestore(idCateg)
            const queryCollection = collection(db, "productos")
            getDocs(queryCollection)
            .then(resp => setProductos(resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
            .catch(err => console.log(err))
            .finally(()=> setLoading (false))
        }

    }, [idCateg]);




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
