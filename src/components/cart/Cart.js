
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'




function Cart() {

    const {cartList, borrarCarrito,borrarItem, total} = useCartContext()

    
    return (
        <div className="mb-4 mt-4 pt-4 pb-5">
            {cartList.length === 0 ? (
                                    <div className="mb-4 mt-4 pt-4 pb-5">
                                        <h2 className="mb-4 mt-4 pt-5 pb-5 detail-texto border">NO HAY PRODUCTOS EN EL CARRITO</h2>
                                        <Link to="/" className="btn btn-dark mb-4 mt-4 p-3" >Volver a la tienda</Link>
                                    </div>
                                    )
            :
            (<div className="mb-4 mt-4 pt-4 pb-5">
                <Table striped bordered hover variant="dark" className="width offset-lg-2 mt-4">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio X unidad</th>
                            <th width="15%">Descripción</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                    {cartList.map(item=>
                        <tr>
                            <td><Button className="btn btn-dark m-2" onClick={() => borrarItem(item.id)}>🗑</Button>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.cantidad}</td>
                            <td>{item.precio}</td>
                            <td><img src={`${item.imagen}`} width="50%" alt="ImagenProducto"/></td>
                            <td></td>
                        </tr>)}

                        <tr>
                            <td></td>
                            <td></td>
                            <td>IVA</td>
                            <td></td>
                            <td>TOTAL</td>
                            <td>{total}</td>
                        </tr>
                    </tbody>
                    
                </Table>
                <Button className="btn btn-dark m-3" onClick={borrarCarrito}>Vaciar Carrito</Button>
                <Link to="/" className="btn btn-dark m-4" >Seguir comprando</Link>
            </div>
            )}
            
        </div>
    )
}

export default Cart
