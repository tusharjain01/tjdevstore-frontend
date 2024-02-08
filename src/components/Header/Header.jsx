import { useContext, useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Cart from "../Cart/Cart";
import Search from './Search/Search';
import "./Header.scss";
import { Context } from "../../util/context";

const Header = () => {
    
    const [scrolled,setScroll] = useState(false);
    const [showCart,setShowCart] = useState(false);
    const [showSearch,setShowSearch] = useState(false);
    const{cartCounts} = useContext(Context)
    const navigate = useNavigate()

    const handleScroll = () => {
        const offset = window.scrollY;
        if(offset > 200){
            setScroll(true);
        }
        else{
            setScroll(false);
        }
    }

    const handleCart = () => {
        setShowCart(showCart => !showCart);
    }
    const handleSearch = () => {
        setShowSearch(showSearch => !showSearch);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    },[])

    return (
        <>
            <header className={`main-header ${scrolled ? 'sticky-header' : ''}`}>
                <div className="header-content">
                    <ul className="left">
                        <li onClick={() => navigate('/')}>Home</li>
                        <li>About</li>
                        <li>Categories</li>
                    </ul>
                    <div className="center" onClick={() => navigate('/')}>TJDEVSTORE.</div>
                    <div className="right">
                        <TbSearch onClick={handleSearch}/>
                        <AiOutlineHeart/>
                        <span className="cart-icon">
                            <CgShoppingCart onClick={handleCart}/>
                            {!!cartCounts && <span>{cartCounts}</span>}
                        </span>
                    </div>
                </div>
            </header>
            {showCart && <Cart setShowCart = {handleCart}/>}
            {showSearch && <Search setShowSearch = {handleSearch}/>}
        </>
    );
};

export default Header;
