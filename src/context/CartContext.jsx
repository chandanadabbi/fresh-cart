import { createContext,useState } from "react";

const cartContext=createContext()

function CartProvider({children}){
    const [cartItems,setCartItems]=useState([])

    const addToCart=(product)=>{
        setCartItems([...cartItems,product])
    }
    
    return(
        <cartContext.Provider value={{cartItems,addToCart}}>
            {children}
        </cartContext.Provider>
    )
}

export {CartProvider}

export default cartContext