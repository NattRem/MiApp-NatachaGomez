
import {Card, Container, Row, Col} from "react-bootstrap"
import "../estilos/ItemDetail.css"
import ItemCount from "../ItemListContainer/ItemCount"
import {useState} from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer} from 'react-toastify';
import { useCartContext } from "../Context/CartContext";



const ItemDetail = ({ producto }) => {
    const [goCart, setGoCart] = useState (false)

    const {cartList, agregarAlCarrito}=useCartContext()

    const onAdd = (cantidad)=> {
        toast(`Agregaste ${cantidad} productos al carrito`, {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                    });
        setGoCart(true);
        agregarAlCarrito({...producto, cantidad:cantidad})
    }

    console.log(cartList);
    return (
        <Container className='m-5 pb-5 mx-auto bg-card card'>
            <Row >
                <Col><Card.Img src={`${producto.imagenID}`} className='detail-img'/></Col>
                <Col><Card.Body>
                    <Card.Title className='detail-title'>{producto.title}</Card.Title>
                    <Card.Text >
                        <h3 className="card-precio detail-precio">{producto.precio}</h3>
                        <h4 className="detail-texto">{producto.descripcion}</h4>
                    </Card.Text>
                    {!goCart ? (
                        <ItemCount stock={producto.stock} onAdd={onAdd}/>
                        
                    ) : (
                        <div>
                            <Link to="/cart" type="button" class="btn btn-dark m-4">Ir al Carrito</Link>
                            <Link to="/" className="btn btn-dark m-4" >Seguir comprando</Link>
                        </div>)}
                    <ToastContainer />
                </Card.Body>
                
                </Col>
            </Row>
        </Container>
    );
};
export default ItemDetail;