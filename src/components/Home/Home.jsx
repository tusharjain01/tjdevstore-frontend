import { useEffect,useContext } from "react";

import "./Home.scss";

import Banner from './Banner/Banner'
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../util/api";
import { Context } from "../../util/context";

const Home = () => {
    const { categories,setCategories,
        products,setProducts } = useContext(Context)

    useEffect(() => {
        getCategories();
        getProducts();
    },[])

    const getCategories = () => {
        fetchDataFromApi('/api/categories?populate=*').then(res => {
            console.log(res);
            setCategories(res);
        })
    }
    const getProducts = () => {
        fetchDataFromApi('/api/products?populate=*&sort[0]=desc&pagination[start]=0&pagination[limit]=8').then(res => {
            // console.log(res);
            setProducts(res);
        })
    }

    return (
        <div>
        <Banner/>
        <div className="main-content">
            <div className="layout">
                <Category categories = {categories}/>
                <Products headingText = "Popular Products" products = {products}/>
            </div>
        </div>
        </div>
    );
};

export default Home;
