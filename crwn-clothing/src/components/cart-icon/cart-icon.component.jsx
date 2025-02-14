import { useContext } from 'react';
import { cartContext } from '../../contexts/cart.context';
import './cart-icon.styles.scss'; 
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

const CartIcon = () => {
    const {cartOpen, setCartOpen} = useContext(cartContext); 
    return (
        <div className='cart-icon-container' onClick={() => setCartOpen(!cartOpen)}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>10</span>
        </div>
    );
}

export default CartIcon; 