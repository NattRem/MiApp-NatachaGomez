import {createContext, useState, useContext} from "react"
import {addDoc, collection, getFirestore, Timestamp} from "firebase/firestore"
import { toast } from 'react-toastify'




const CartContext = createContext ([])
export const useCartContext = ()=> useContext(CartContext)



function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])
    const [idOrden, setidOrden] = useState("")

    const [ dataForm, setdataForm] = useState({ 
        name:"", email:"", phone:""
    })

    const handleChange = (e) =>{
        setdataForm({ 
            ...dataForm, 
            [e.target.name]: e.target.value
        })
    }




    function agregarAlCarrito (item) {

        const index = cartList.findIndex(i => i.id === item.id)

        if (index > -1) {
            const oldItem = cartList[index].cantidad
            let items = [...cartList]
            items.splice(index, 1)

            setCartList([...items, { ...item, cantidad: item.cantidad + oldItem}])

        } else {
            setCartList([...cartList, item])
        }
    }

    const borrarItem = (id) =>{
        const cartListNew =cartList.filter((item)=> item.id !==id)
        setCartList(cartListNew)
    }

    function borrarCarrito() {
        setCartList([])
    }
    
    //MODAL
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
        
    const handleShow = () => setShow(true);


    const totalPrice = cartList.reduce((acum, item) => acum + (item.cantidad * item.precio),0)

    const generarOrden = (e) =>{
        e.preventDefault()
        let orden ={}
        orden.date = Timestamp.fromDate(new Date())

        orden.buyer = dataForm
        orden.total = totalPrice
        orden.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.title
            const precio = cartItem.precio * cartItem.cantidad
            const cantidad = cartItem.cantidad

            return {id, nombre, precio, cantidad}
        })
        
        
        const db = getFirestore()
        const coleccion = collection(db, "ordenes")
        addDoc(coleccion, orden)
        .then(resp => setidOrden(resp.id))
        .catch (err => console.log(err))

        toast(`Su compra fue procesada con exito.
                El ID de su compra es: ${idOrden.length !== 0 && idOrden}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        });
    }


    
    return (
        <CartContext.Provider value ={{
            cartList,
            agregarAlCarrito,
            borrarCarrito,
            borrarItem,
            totalPrice,
            generarOrden,
            idOrden,
            handleChange,
            dataForm,
            handleClose,
            handleShow,
            show
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
