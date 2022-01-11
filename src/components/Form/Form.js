import React from 'react'
import { Modal } from 'react-bootstrap'
import { useCartContext} from '../Context/CartContext'
import { ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'



const Form = () => {
    
    const {generarOrden, handleChange, dataForm, handleClose, show} = useCartContext()

    // const refresh= ()=>{
    //     window.location.reload(false);
    // }
    

        return (
            <>

                <Modal show={show} onHide={handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>Finalice su compra</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onChange={handleChange}>
                            <input 
                                type = "text" 
                                name= "name" 
                                placeholder= "NOMBRE" 
                                value= {dataForm.name}
                                className='form-control'
                            /><br/>
                            <input 
                                type = "number"
                                name="phone" 
                                placeholder="TELEFONO" 
                                value= {dataForm.phone}
                                className='form-control'
                            /><br/>
                            <input 
                                type = "email" 
                                name="email" 
                                placeholder="EMAIL" 
                                value= {dataForm.email}
                                className='form-control'
                            /><br/>

                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Link to="/" className="btn btn border-dark m-4">Volver a comprar</Link>
                        <button onClick={generarOrden} className="btn btn-dark m-4">Finalizar compra</button>
                        <ToastContainer />
                    </Modal.Footer>
                </Modal>
            </>
        )
}

export default Form
