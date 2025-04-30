import './cart-dropdown.styles.scss'; 
import Button from '../button/button.component';
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';

const CartDropDown = () => {
    const {cartOpen, cartItems} = useContext(CartContext);  
    const navigate = useNavigate(); 

    const handleClick = () =>  {
        navigate('/checkout'); 
    }

    if(cartOpen ===true){
    return (
        <div className='cart-dropdown-container'>
            {cartItems.length === 0 ? 
            (<div className='empty-message'>
                Cart is empty
            </div>) : (<div className='cart-items'>{cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}</div>)}
            <Button onClick={handleClick}>Checkout</Button>
        </div>
    )}; 
}

export default CartDropDown; 
