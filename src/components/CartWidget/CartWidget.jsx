import React from 'react'
import { Badge } from 'react-bootstrap'
import { useCartContext } from '../Context/CartContext'
import "../estilos/ItemDetail.css"

function CartWidget() {
    const {cartList} = useCartContext()

    return (
        <>
            <img src= "https://res.cloudinary.com/dlvolch1i/image/upload/v1639628893/WikyApp/IconCarrito_j3nfxm.svg" alt="Icono Carrito" width="40" />
            {cartList.length === 0 ? (<></>)
            :
            (<>
            <Badge pill bg="dark">
            {cartList.length}
            </Badge>
            </>)}
        </>
    )
}

export default CartWidget
