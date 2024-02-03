import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";

import {
    FaCartPlus, 
    FaFacebook, 
    FaInstagram, 
    FaLinkedin, 
    FaPinterest, 
    FaTwitter
} from 'react-icons/fa'

import prod1 from "../../assets/products/watch-prod-1.webp"

const SingleProduct = () => {
    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={prod1} alt="headphone" />
                    </div>
                    <div className="right">
                        <span className="name">Headphone</span>
                        <span className="price">₹ 450</span>
                        <span className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus pariatur inventore tempora tenetur error, iusto rem exercitationem explicabo quibusdam facilis.</span>
                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span>-</span>
                                <span>1</span>
                                <span>+</span>
                            </div>
                            <button className="add-to-cart-button">
                                <FaCartPlus size={20} />
                                ADD TO CART
                            </button>
                        </div>
                        <span className="divider" />
                        <div className="info-item">
                            <span className="text-bold">
                                Category:
                                <span>Headphones</span>
                            </span>
                            <span className="text-bold">
                                Share:
                                <span className="social-icons">
                                    <FaFacebook size={16} />
                                    <FaInstagram size={16} />
                                    <FaTwitter size={16} />
                                    <FaPinterest size={16} />
                                    <FaLinkedin size={16} />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <RelatedProducts />
            </div>
        </div>
    );
};

export default SingleProduct;
