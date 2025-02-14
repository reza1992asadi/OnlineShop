import { useContext } from 'react';
import { cartContext } from '../../contexts/cart.context';
import './cart-dropdown.styles.scss' 
import Button from '../button/button.component'; 

const CartDropdown =() => {
    const {cartOpen} = useContext(cartContext) ; 
    if (cartOpen === true) {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                <span className='empty-message'>Your cart is empty</span>
            </div>
            <Button>Checkout</Button>
        </div>
    );}
};

export default CartDropdown ;