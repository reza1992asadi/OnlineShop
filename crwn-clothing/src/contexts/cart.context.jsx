import {createContext, useState} from 'react'; 

export const cartContext = createContext({
    cartOpen: false, 
    setCartOpen: () => {}
});

export const CartProvider = ({children}) => {
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <cartContext.Provider value ={{cartOpen, setCartOpen}}>
            {children}
        </cartContext.Provider>
    );
};