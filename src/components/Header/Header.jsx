import { useEffect,useState } from "react";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Cart from "../Cart/Cart";
import "./Header.scss";

const Header = () => {

    const [scrolled,setScroll] = useState(false);
    const [showCart,setShowCart] = useState(false);

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

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    },[])

    return (
        <>
            <header className={`main-header ${scrolled ? 'sticky-header' : ''}`}>
                <div className="header-content">
                    <ul className="left">
                        <li>Home</li>
                        <li>About</li>
                        <li>Categories</li>
                    </ul>
                    <div className="center">TJDEVSTORE.</div>
                    <div className="right">
                        <TbSearch/>
                        <AiOutlineHeart/>
                        <span className="cart-icon">
                            <CgShoppingCart onClick={handleCart}/>
                            <span>5</span>
                        </span>
                    </div>
                </div>
            </header>
            {showCart && <Cart setShowCart = {handleCart}/>}
        </>
    );
};

export default Header;
