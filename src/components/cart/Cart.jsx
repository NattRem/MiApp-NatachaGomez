
import { Button, Table } from 'react-bootstrap'
import { useCartContext } from '../Context/CartContext'




function Cart() {

    const {cartList, borrarCarrito} = useCartContext()


    return (
        <div className="mb-4 mt-4 pt-4 pb-5">
            
            <Table striped bordered hover variant="dark" className="width offset-lg-2 mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio X unidad</th>
                        <th width="15%">Descripción</th>
                    </tr>
                </thead>
                <tbody>
                {cartList.map(item=>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.cantidad}</td>
                        <td>{item.precio}</td>
                        <td><img src={`${item.imagen}`} width="50%" alt="ImagenProducto"/></td>
                    </tr>)}
                </tbody>
            </Table>
            
            <Button className="btn btn-dark m-3" onClick={borrarCarrito}>Vaciar Carrito</Button>
        </div>
    )
}

export default Cart
