import {createContext, useState} from 'react'; 

export const cartContext = createContext({
    cartOpen: false, 
    setCartOpen: () => {}
});

export const CartProvider = ({children}) => {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]); 

    return (
        <cartContext.Provider value ={{cartOpen, setCartOpen}}>
            {children}
        </cartContext.Provider>
    );
};