import "./CartItem.scss";

import prod1 from '../../../assets/products/speaker-prod-1.webp'
import { MdClose } from "react-icons/md";

const CartItem = () => {
    return (
        <div className="cart-products">
            <div className="cart-product">
                <div className="img-container">
                    <img src={prod1} alt="product-name" />
                </div>
                <div className="prod-details">
                    <span className="name">Product Name</span>
                    <MdClose className="close-btn"/>
                    <div className="quantity-buttons">
                        <span>-</span>
                        <span>1</span>
                        <span>+</span>
                    </div>
                    <div className="text">
                        <span>3</span>
                        <span className="highlight">X</span>
                        <span>₹1500</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
