
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'
import Form from '../Form/Form'




function Cart() {

    const {cartList, borrarCarrito,borrarItem, totalPrice, handleShow} = useCartContext()

    
    return (
        <div className="mb-4 mt-4 pt-4 pb-5">
            
            {!cartList.length ? 
            (<div>
                <h2 className="m-4 p-5 detail-texto border">NO HAY PRODUCTOS EN EL CARRITO</h2>
                <Link to="/" className="btn btn-dark mb-4 mt-4 p-3" >Volver a la tienda</Link>
            </div>
            )
            :
            (<div >
                
                <Table striped bordered hover variant="dark" className="width offset-lg-2 mt-4">
                    <thead>
                        <tr>
                            <th></th>
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
                            <td><Button className="btn btn-dark m-2" onClick={() => borrarItem(item.id)}>🗑</Button></td>
                            <td>{item.title}</td>
                            <td>{item.cantidad}</td>
                            <td>$ {item.precio}</td>
                            <td><img src={`${item.imagenID}`} width="50%" alt="ImagenProducto"/></td>
                            <td>$ {item.precio * item.cantidad}</td>
                        </tr>)}
                        <tr>
                            <td>TOTAL</td>
                            <td><strong>$ {totalPrice}</strong></td>
                            
                        </tr>
                    </tbody>
                    
                </Table>
                <Button className="btn btn-dark m-3" onClick={borrarCarrito}>Vaciar Carrito</Button>
                <Link to="/" className="btn btn-dark m-4" >Seguir comprando</Link>
                <Button className="btn btn-dark m-3 border-info"  onClick={handleShow}>
                    Finalizar compra
                </Button>
                <Form />
                
                
            </div>
            )}
            
        </div>
    )
}

export default Cart
