import { useParams } from "react-router-dom";
import { useState,useContext } from "react";

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

// import prod1 from "../../assets/products/watch-prod-1.webp"
import useFetch from "../../hooks/useFetch";
import { Context } from "../../util/context";

const SingleProduct = () => {

    const [quantity, setQuantity] = useState(1)
    const {id} = useParams()
    const { handleAddToCart } = useContext(Context)

    const {data} = useFetch(`/api/products/${id}?populate=*`)

    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img loading="lazy" src={data?.data?.attributes?.img?.data?.attributes?.formats?.small?.url} alt="headphone" />
                    </div>
                    <div className="right">
                        <span className="name">{data?.data?.attributes?.title}</span>
                        <span className="price">₹{data?.data?.attributes?.price}</span>
                        <span className="description">{data?.data?.attributes?.desc}</span>
                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span onClick={() => setQuantity(prev => {if(prev === 1) return 1; return prev - 1})}>-</span>
                                <span>{quantity}</span>
                                <span onClick={() => setQuantity(prev => prev + 1)}>+</span>
                            </div>
                            <button 
                                className="add-to-cart-button"
                                onClick={() => {
                                    handleAddToCart(data?.data,quantity)
                                    setQuantity(1)
                                }}
                            >
                                <FaCartPlus size={20} />
                                ADD TO CART
                            </button>
                        </div>
                        <span className="divider" />
                        <div className="info-item">
                            <span className="text-bold">
                                Category:
                                <span>{data?.data?.attributes?.categories?.data?.[0]?.attributes?.title}</span>
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
                <RelatedProducts 
                    productId = {id} 
                    categoryId = {data?.data?.attributes?.categories?.data?.[0]?.id}
                />
            </div>
        </div>
    );
};

export default SingleProduct;
