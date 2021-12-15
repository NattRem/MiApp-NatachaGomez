import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../estilos/ItemDetail.css";




function ItemCount() {
    const inicio = 1
    const stock = 6

    const[value, setValue]= useState(inicio)

    const handSuma = ()=>{
        if (value < stock){
            setValue(value + 1)
        }
    }

    const handResta = ()=> {
        if (value > inicio){
            setValue(value - 1)
        }
    }

    const handMostrar = ()=> {
        toast(`Agregaste ${value} productos al carrito`, {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
            });
    }
    return (
        <div className="">
            <h1 className="countValue">{value}</h1>
            <Button className="m-1 count" variant="dark" onClick={handResta}>-</Button>
            <Button className="m-1 count" variant="dark" onClick={handSuma}>+</Button>
            <br />
            <Button className="m-1 count" variant="dark" onClick={handMostrar}>Agregar al carrito</Button>
            <ToastContainer />
        </div>
    )
}

export default ItemCount
