import { createContext } from "react";
import { useState, useEffect} from "react";

const addCartItem = (cartItems, product) => {

    const existingData = cartItems.find(item => item.id === product.id); 
    if (existingData){
        return cartItems.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item)
    }
    else {
        return [...cartItems,{...product, quantity:1} ] ; 
    }
}

//functions to increase and decrease item quantity in checkout page also to remove an item completely
const IncreaseQuantity = (cartItems,checkoutItem) => {
        return cartItems.map(item => {if (item.id === checkoutItem.id)
        return {...item, quantity: checkoutItem.quantity + 1}
        else 
            return item; 
    })
}

const decreaseQuantity = (cartItems, checkoutItem) => {
        if(checkoutItem.quantity === 1)
            return RemoveItem(cartItems, checkoutItem);
        return cartItems.map(item => {
            if (item.id === checkoutItem.id)
                return {...item, quantity: checkoutItem.quantity - 1}
            else 
                return item; 
    })
}

const RemoveItem = (cartItems, checkoutItem) => {
    return cartItems.filter(item => item.id !== checkoutItem.id);
}

export const CartContext = createContext({
    cartOpen: false, 
    setCartOpen: () => {},
    cartItems: [], 
    cartCount: 0,
    addProductToCart: () => {}, 
    updateCheckoutDecrease: () => {},
    updateCheckoutIncrease: () => {},
    updateCheckoutRemove: () =>  {},
})

export const CartProvider = ({children}) => {
    const [cartOpen, setCartOpen] = useState(false); 
    const [cartItems, setCartItems] = useState([]); 
    const [cartCount, setCartCount] = useState(0); 

    const addProductToCart = (product) => {
        setCartItems(addCartItem(cartItems, product)); 
    }

    const updateCheckoutDecrease = (checkoutItem) => {
        setCartItems(decreaseQuantity(cartItems, checkoutItem));
    }

    const updateCheckoutIncrease = (checkoutItem) => {
        setCartItems(IncreaseQuantity(cartItems, checkoutItem));
    }

    const updateCheckoutRemove = (checkoutItem) => {
        setCartItems(RemoveItem(cartItems, checkoutItem));
    }

    useEffect(() => {
        const total = cartItems.reduce((acc,item)=>acc+item.quantity, 0);
        setCartCount(total);
    },[cartItems]);
    
    const value={cartOpen, setCartOpen, cartItems, setCartItems, cartCount, setCartCount, addProductToCart, updateCheckoutDecrease, updateCheckoutIncrease, updateCheckoutRemove};

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};