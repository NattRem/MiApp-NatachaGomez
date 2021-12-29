import {createContext, useState, useContext,useEffect} from "react"

const CartContext = createContext ([])
export const useCartContext = ()=> useContext(CartContext)



function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])
    const [total, setTotal] = useState(0)


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


        
    // const subTotal = parseInt(cartList.reduce((a, c) => a + c.cantidad * c.precio, 0));

    // const ivaPrice = subTotal * 0.21;
    // const totalPrice = subTotal + ivaPrice;
    useEffect(() => {
        const getTotal = ()=>{
            const res = cartList.reduce((prev,item) => {
                return prev + (item.precio * item.cantidad)
            },0)
            setTotal(res)
        }
        getTotal()
    },[cartList])
    // const total = (cartList) =>{
    //     cartList?.reduce((amount, item)=> item.precio + amount)
    // }
    
    return (
        <CartContext.Provider value ={{
            cartList,
            agregarAlCarrito,
            borrarCarrito,
            borrarItem,
            total:[total, setTotal]
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
