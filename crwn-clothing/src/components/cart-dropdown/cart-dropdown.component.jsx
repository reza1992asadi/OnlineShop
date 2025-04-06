import './cart-dropdown.styles.scss'; 
import Button from '../button/button.component';

const CartDropDown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='empty-message'>
                Cart is empty
            </div>
            <Button>Checkout</Button>
        </div>
    ); 
}

export default CartDropDown; 