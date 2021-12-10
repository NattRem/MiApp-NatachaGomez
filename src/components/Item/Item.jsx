import React from 'react'

import {getFetch} from "../../helpers/getFetch"
import {Card} from "react-bootstrap"

function Item({prod}) {
    return (
        <div 
            key={prod.id}
            className='col-md-2'
        >     
        <Card border="dark" style={{ width: '18rem' }}>
            <Card.Img src={prod.foto} width="50%"/>
            <Card.Body>
            <Card.Title>{prod.nombre}</Card.Title>
            <Card.Text>
            {prod.precio}
            </Card.Text>
            </Card.Body>
        </Card>                   
        </div>
    )
}

export default Item
