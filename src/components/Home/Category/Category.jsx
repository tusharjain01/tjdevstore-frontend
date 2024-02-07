import "./Category.scss";

// import cat1 from '../../../assets/category/cat-1.jpg'

const Category = ({ categories }) => {
    categories?.data?.map((item) => {
        console.log(item.attributes.title);
        console.log(process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url)
    })
    return (
        <div className="shop-by-category">
            <div className="categories">
                {categories?.data?.map((item) => (
                    <div key={item.id}className="category">
                        <img src={process.env.REACT_APP_DEV_URL + 
                        item.attributes.img.data.attributes.url} alt={item.attributes.title} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
