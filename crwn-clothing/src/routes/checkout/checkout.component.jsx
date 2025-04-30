import Button from "../../components/button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import './checkout.styles.scss'

const CheckOut = () => {
    const {cartItems} = useContext(CartContext); 
    const sum = cartItems.reduce((acc, item) => acc + item.quantity*item.price ,0 ) ; 
    return(
    <div className="checkout-page">
        <div className="checkout-container">
            {cartItems.length>0 ?(
            <div>
                <div className="header-container">
                    <span>Product</span>
                    <span>Describtion</span>
                    <span>Quantity</span>
                    <span>Price</span>
                    <span>Remove</span>
                </div>
                <div className="items-container">
                    {cartItems.map(item => <CheckoutItem key={item.id} checkoutItem={item}/>)}
                </div>
                <div className="sum">
                    Total:€{sum}
                </div>
            </div>):(<div className="Empty_cartItem">The Cart is Empty!</div>)}
        </div>
    </div>)
}

export default CheckOut ; 