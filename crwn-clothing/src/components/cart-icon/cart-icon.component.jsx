import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg" ; 
import './cart-icon.styles.scss'; 
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const CartIcon = () => {
    const {cartOpen, setCartOpen, cartCount} = useContext(CartContext); 

    const handleClick = () => {
        setCartOpen(!cartOpen); 
    }

    return (
        <div className="cart-icon-container" onClick={handleClick}>
            <ShoppingIcon className="shopping-icon" />
            <div className="item-count">{cartCount}</div>
        </div>
    )
}

export default CartIcon; 