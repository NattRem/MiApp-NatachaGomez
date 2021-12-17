import {Card, Container, Row, Col} from "react-bootstrap"
import "../estilos/ItemDetail.css"
import ItemCount from "../ItemListContainer/ItemCount"

const ItemDetail = ({ item }) => {

    return (
        <Container className='m-5 pb-5 mx-auto bg-card card'>
            <Row >
                <Col><Card.Img src={`${item.imagen}`} className='detail-img'/></Col>
                <Col><Card.Body>
                    <Card.Title className='detail-title'>{item.title}</Card.Title>
                    <Card.Text >
                        <h3 className="card-precio detail-precio">{item.precio}</h3>
                        <h4 className="detail-texto">{item.descripcion}</h4>
                    </Card.Text>
                    <ItemCount />
                </Card.Body>
                
                </Col>
            </Row>
        </Container>
    );
};
export default ItemDetail;