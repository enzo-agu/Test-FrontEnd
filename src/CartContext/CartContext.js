import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])
    const onAdd = (newValue) => {
       setCartList(newValue)
    }
    return (<>
        <CartContext.Provider value={{cartList,onAdd }}>
            {children}
        </CartContext.Provider>
    </>)
}
export default CartContextProvider
