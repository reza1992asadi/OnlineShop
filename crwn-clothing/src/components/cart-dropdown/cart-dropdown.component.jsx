import { useContext } from 'react';
import { cartContext } from '../../contexts/cart.context';
import './cart-dropdown.styles.scss' 
import Button from '../button/button.component'; 
import CartItem from '../cart-item/cart-item.component';

const CartDropdown =() => {
    const {cartItems} = useContext(cartContext); 

    const {cartOpen} = useContext(cartContext) ; 
    if (cartOpen === true) {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => 
                <CartItem key={item.id} cartItem={item} />)}
            </div>
            <Button>Checkout</Button>
        </div>
    );}
};

export default CartDropdown ;