import { useNavigate } from "react-router-dom";

import "./Product.scss";

// import prod from '../../../assets/products/headphone-prod-1.webp'

const Product = ({ id,data }) => {

    const navigate = useNavigate()

    // console.log(id);

    return (
        <div className="product-card"
            onClick={()=>navigate(`/product/${id}`)}
            key={id}
        >
            <div className="thumbnail">
                <img loading="lazy" src={data?.img?.data?.[0]?.attributes?.url} alt="product name" />
            </div>
            <div className="prod-details">
                <span className="name">{data.title}</span>
                <span className="price">₹{data.price}</span>
            </div>
        </div>
    );
};

export default Product;
