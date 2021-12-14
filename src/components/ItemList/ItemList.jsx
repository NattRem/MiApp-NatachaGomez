import React from 'react'
import { Row } from 'react-bootstrap'
import Item from '../Item/Item'


function ItemList({productos}) {
    return (
        <div className='container-fluid'>
            <Row xs={2} md={3} lg={4}>
                {productos.map((prod) => <Item prod={prod}/>)}
            </Row>
        </div>
    )
}

export default ItemList
