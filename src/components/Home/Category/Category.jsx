import {useNavigate} from 'react-router-dom'

import "./Category.scss";

// import cat1 from '../../../assets/category/cat-1.jpg'

const Category = ({ categories }) => {

    const navigate = useNavigate()

    return (
        <div className="shop-by-category">
            <div className="categories">
                {categories?.data?.map((item) => (
                    <div 
                        key={item.id}
                        className="category"
                        onClick={() => navigate(`/category/${item.id}`)}
                    >
                        <img 
                        loading='lazy'
                        src={item.attributes.img.data.attributes.url} alt={item.attributes.title} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
