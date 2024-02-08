import { useContext } from "react";

import prod1 from '../../../assets/products/speaker-prod-1.webp'
import { MdClose } from "react-icons/md";
import { Context } from "../../../util/context";
import "./CartItem.scss";

const CartItem = () => {

    const { cartItems, handleAddToCart, handleRemoveFromCart,handleCartProductQuantity } = useContext(Context)

    return (
        <div className="cart-products">
            {cartItems.map((item) => (
                <div className="cart-product" key={item.id}>
                    <div className="img-container">
                        <img src={item?.attributes?.img?.data?.attributes?.formats?.small?.url} alt="product-name" />
                    </div>
                    <div className="prod-details">
                        <span className="name">{item.attributes.title}</span>
                        <MdClose className="close-btn" onClick={() => handleRemoveFromCart(item)}/>
                        <div className="quantity-buttons">
                            <span onClick={() => handleCartProductQuantity('dec',item)}>-</span>
                            <span>{item.attributes.quantity}</span>
                            <span onClick={() => handleCartProductQuantity('inc',item)}>+</span>
                        </div>
                        <div className="text">
                            <span>{item.attributes.quantity}</span>
                            <span className="highlight">X</span>
                            <span>₹{item.attributes.price * item.attributes.quantity}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartItem;
