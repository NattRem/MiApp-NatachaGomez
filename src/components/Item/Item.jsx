import React from 'react'
import '../estilos/card.css'
import {Card, Button} from "react-bootstrap"
import {Link} from "react-router-dom"

function Item({prod}) {
    return (    
        <Card key={prod.id} style={{ width: '18rem' }} className='m-4 mx-auto bg-card card'>
            <Card.Img src={prod.imagenID} className='card-img'/>
            <Card.Body>
            <Card.Title className='card-title'>{prod.title}</Card.Title>
            <Card.Text >
                <h3 className="card-precio">$ {prod.precio}</h3>
            </Card.Text>
            <Link to ={`/detalle/${prod.id}`}><Button variant="dark">+ info</Button></Link>
            
            </Card.Body>
        </Card>                   
    )
}

export default Item
