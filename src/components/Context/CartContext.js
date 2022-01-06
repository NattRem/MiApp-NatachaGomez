import {createContext, useState, useContext} from "react"

const CartContext = createContext ([])
export const useCartContext = ()=> useContext(CartContext)



function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])



    function agregarAlCarrito (item) {

        const index = cartList.findIndex(i => i.id === item.id)

        if (index > -1) {
            const oldItem = cartList[index].cantidad

            cartList.splice(index, 1)

            setCartList([...cartList, { ...item, cantidad: item.cantidad + oldItem}])

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

    const totalPrice = cartList.map(x=>x.cantidad * x.precio).reduce((a,b)=>a+b,0)

    // function Comprar() {
    //     compra.buyer = buyerData
    //     compra.items = cartList
    //     compra.total = total
    //     console.log(compra);
    // }

    
    return (
        <CartContext.Provider value ={{
            cartList,
            agregarAlCarrito,
            borrarCarrito,
            borrarItem,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
