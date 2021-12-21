import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'react-toastify/dist/ReactToastify.css';
import "../estilos/ItemDetail.css";





function ItemCount({stock,onAdd}) {

    const [number, setNumber] = useState(1);

    const add = () => {
        number !== stock && setNumber(number + 1);
    }
    const substract = () => {
        number !== 1 && setNumber(number - 1);
    }
    
    return (
        <div>
            <h1 className="countValue">{number}</h1>
            <Button className="m-1 count" variant="dark" onClick={substract}>-</Button>
            <Button className="m-1 count" variant="dark" onClick={add} disabled={number === stock}>+</Button>
            <br />
            <Button className="m-1 count" variant="dark" disabled={number === 0} onClick={() => onAdd(number)}>Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount
