import { createContext, useState } from "react";

const cartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cartItems.map((item) => {
        if (item.id !== product.id) {
          return item;
        }
        return { ...item, quantity: item.quantity + 1 };
      });
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const decreaseQuantity = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct && existingProduct.quantity > 1) {
      const updatedCart = cartItems.map((item) => {
        if (item.id !== product.id) {
          return item;
        }
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      });
      setCartItems(updatedCart);
    } else {
      const updatedCart = cartItems.filter((item) => item.id !== product.id);

      setCartItems(updatedCart);
    }
  };
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  
  const totalItems=cartItems.reduce((total,item)=>total+item.quantity,0)
  

  return (
    <cartContext.Provider value={{ cartItems, addToCart,decreaseQuantity,totalItems,totalPrice }}>
      {children}
    </cartContext.Provider>
  );
}

export { CartProvider };

export default cartContext;
