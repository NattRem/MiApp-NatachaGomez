import React from 'react'
import '../estilos/card.css'
import {Card, Button} from "react-bootstrap"

function Item({prod}) {
    return (    
        <Card key={prod.id} style={{ width: '18rem' }} className='m-4 mx-auto bg-card card'>
            <Card.Img src={prod.foto} className='card-img'/>
            <Card.Body>
            <Card.Title className='card-title'>{prod.nombre}</Card.Title>
            <Card.Text >
            </Card.Text>
            <Button className="card-precio" variant="dark">{prod.precio}</Button>
            </Card.Body>
        </Card>                   
    )
}

export default Item
