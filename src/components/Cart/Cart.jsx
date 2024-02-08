import {
    MdClose
} from 'react-icons/md'
import { BsCartX } from 'react-icons/bs'

import "./Cart.scss";
import CartItem from './CartItem/CartItem';
import { useContext } from 'react';
import { Context } from '../../util/context';

const Cart = ({ setShowCart }) => {
    const { cartItems,cartSubTotal } = useContext(Context);
    return (
        <div className="cart-panel">
            <div className="opac-layer"></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="cart-title">Shopping Cart</span>
                    <span className="close-btn" onClick={setShowCart}><MdClose/></span>
                </div>
                
                {!cartItems?.length && 
                <div 
                    className="empty-cart" 
                    onClick={setShowCart}
                >
                    <BsCartX/>
                    <span>No Products in the cart</span>
                    <button className="return-cta">Return to shop</button>
                </div>}
                {!!cartItems?.length && <>
                    <CartItem/>
                    <div className="cart-footer">
                        <div className="subtotal">
                            <span className="text">Subtotal : </span>
                            <span className="text total">₹{cartSubTotal}</span>
                        </div>
                        <div className="total-btn">
                            <button className='checkout-cta'>
                                <BsCartX/>
                                Checkout
                            </button>
                        </div>
                    </div>
                </>}
            </div>
        </div>
    );
};
 
export default Cart;
