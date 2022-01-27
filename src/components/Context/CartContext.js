import {createContext, useState, useContext} from "react"





const CartContext = createContext ([])
export const useCartContext = ()=> useContext(CartContext)



function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    //MODAL
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);








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
    



    const totalPrice = cartList.reduce((acum, item) => acum + (item.cantidad * item.precio),0)

    


    
    return (
        <CartContext.Provider value ={{
            cartList,
            agregarAlCarrito,
            borrarCarrito,
            borrarItem,
            totalPrice,
            handleClose,
            handleShow,
            show,
            setCartList
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
