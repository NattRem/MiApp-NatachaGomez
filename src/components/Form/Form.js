import React from 'react'
import { Modal } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'
import { useFormHook } from './useFormHook'
import { useCartContext } from '../Context/CartContext'


const initialForm = {
    name:"", email:"", phone:"", emailValit: ""
}

const validationsForm = (form) =>{
    let errors = {};

    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexPhone = /^[0-9]+$/;


    if(!form.name.trim()){
        errors.name = "Necesitamos tu nombre"
    }else if(!regexName.test(form.name.trim())){
        errors.name = "El nombre solo puede contener letras y espacios en blanco"
    }

    if(!form.email.trim()){
        errors.email = "Necesitamos tu email"
    }else if(!regexEmail.test(form.email.trim())){
        errors.email = "El email es incorrecto"
    }

    if(!form.phone.trim()){
        errors.phone = "Necesitamos tu teléfono"
    }else if(!regexPhone.test(form.phone.trim())){
        errors.phone = "El telefono es incorrecto"
    }

    if(!form.emailValit.trim()){
        errors.emailValit = "Necesitamos validar tu email"
    }else if(!regexEmail.test(form.emailValit.trim())){
        errors.emailValit = "El email es incorrecto"
    }else if(form.emailValit !== form.email){
        errors.emailValit = "El email es incorrecto"
    }

    return errors;
}
let styles = {
    color: "#dc3545"
}

const Form = () => {
    const{form, errors, handleChange, handleBlur, handleSubmit, idOrder} = useFormHook(initialForm, validationsForm)
    const {handleClose, show} = useCartContext()

    
    

        return (
            <>

                <Modal show={show} onHide={handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>Finalice su compra</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form
                        onSubmit={handleSubmit}>
                            <input 
                                type = "text" 
                                name= "name" 
                                placeholder= "NOMBRE" 
                                className='form-control'
                                value= {form.name}
                                onBlur={handleBlur}
                                onChange={handleChange}required
                            /><br/>
                            {errors.name && <p style={styles}>{errors.name}</p>}
                            <input 
                                type = "text"
                                name="phone" 
                                placeholder="TELEFONO" 
                                value= {form.phone}
                                className='form-control'
                                onBlur={handleBlur}
                                onChange={handleChange}required
                            /><br/>
                            {errors.phone && <p style={styles}>{errors.phone}</p>}
                            <input 
                                type = "email" 
                                name="email" 
                                placeholder="EMAIL" 
                                value= {form.email}
                                className='form-control'
                                onBlur={handleBlur}
                                onChange={handleChange}required
                            /><br/>
                            {errors.email && <p style={styles}>{errors.email}</p>}
                            <input 
                                type = "email" 
                                name="emailValit" 
                                placeholder="VALIDE SU EMAIL" 
                                value= {form.emailValit}
                                className='form-control'
                                onBlur={handleBlur}
                                onChange={handleChange}required
                            /><br/>
                            {errors.emailValit && <p style={styles}>{errors.emailValit}</p>}
                            <input type="submit" value="Finalizar compra" className="btn btn-dark m-4"/>
                            <Link to="/" className="btn btn border-dark m-4">Volver a comprar</Link>
                        </form>
                    </Modal.Body>
                    <Modal.Footer className="d-flex justify-content-start">
                        <p >El identificador de su compra es: {idOrder.length !== 0 && idOrder}</p>
                        <ToastContainer />
                    </Modal.Footer>
                </Modal>
            </>
        )
}

export default Form
