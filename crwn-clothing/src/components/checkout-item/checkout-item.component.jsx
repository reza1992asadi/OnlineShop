import './checkout-item.styles.scss'; 
import {ReactComponent as Next} from '../../assets/next.svg' ; 
import {ReactComponent as Previous} from '../../assets/previous.svg'; 
import {ReactComponent as Delete} from '../../assets/delete.svg'; 
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

const CheckoutItem = ({checkoutItem}) => {
    const {updateCheckoutDecrease,updateCheckoutIncrease,updateCheckoutRemove} = useContext(CartContext);
    const handleDecrease = () => updateCheckoutDecrease(checkoutItem) ;
    const handleIncrease = () => updateCheckoutIncrease(checkoutItem); 
    const handleRemove = () => updateCheckoutRemove(checkoutItem); 

    const {name, imageUrl , price, quantity} = checkoutItem ; 
    return (
        <div className="checkout-item-container">
            <img className="checkout-image" src={imageUrl} alt={`${name}`} />
            <span>{name}</span>
            <span className='counter-container'>
                <span><Previous className='previous-icon' onClick={handleDecrease} /></span>
                    {quantity}
                <span><Next className='next-icon' onClick={handleIncrease} /></span>
            </span>
            <span>€{price}</span>
            <span><Delete className='delete-icon' onClick={handleRemove}/></span>
        </div>
    );
}

export default CheckoutItem; 