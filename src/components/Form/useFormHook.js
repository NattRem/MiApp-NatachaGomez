import {useState} from 'react';
import { toast } from 'react-toastify';
import { useCartContext } from '../Context/CartContext';
import { addDoc, collection, Timestamp, getFirestore} from "firebase/firestore"






export const useFormHook = (initialForm, validateForm) => {
    

    const [form,setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const {cartList, totalPrice, setCartList} = useCartContext()
    const [idOrder, setIdOrder] = useState("")


    const handleChange = (e) =>{
        const {name,value}= e.target;
        setForm({ 
            ...form, 
            [name]: value
        })
    };

    const handleBlur = (e) =>{
        handleChange(e);
        setErrors(validateForm(form));
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        setErrors(validateForm(form));

        if(Object.keys(errors).length === 0){
            toast(`¡Tu compra fue procesada con éxito!`, {
            position: "top-center",
            autoClose: 7000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
            });
            let orden ={}
            orden.date = Timestamp.fromDate(new Date())

            orden.buyer =form
            orden.total= totalPrice

            orden.items =cartList.map(cartList => {
                const id = cartList.id;
                const name = cartList.title;
                const price = cartList.precio * cartList.cantidad;
                const quantity = cartList.cantidad;

                return {id, name, price, quantity}
            })

            const db = getFirestore()
            const orderCollection = collection(db, "orders")

            addDoc(orderCollection, orden)
            .then((resp) => setIdOrder(resp.id),
                            setForm(initialForm),
                            setTimeout(() =>setCartList([]),7000),
            )
            .catch(err => console.log(err))




        }else{
            return;
        }
    };

    return {
        form,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        idOrder
    }
};
