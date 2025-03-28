import {createContext, useState , useEffect} from 'react'; 

const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id);

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
);
}
    return [...cartItems, {...productToAdd, quantity: 1}]; 
}

export const cartContext = createContext({
    cartOpen: false, 
    setCartOpen: () => {},
    cartItems: [] , 
    addItemToCart: () => {},
    cartCount: 0 
});

export const CartProvider = ({children}) => {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]); 
    const [cartCount, setCartCount] = useState(0); 

    useEffect (() => {
        const  newCartCount = cartItems.reduce((total, cartItem) =>
             total + cartItem.quantity, 0)
        setCartCount(newCartCount);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd)); 
    }

    const value = {cartOpen, setCartOpen, addItemToCart, cartItems, cartCount};

    return (
        <cartContext.Provider value ={value}>
            {children}
        </cartContext.Provider>
    );
};