import "./Banner.scss";

import BannerImg from '../../../assets/banner-img3.webp'

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>Sales</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur 
                        adipisicing elit. Ea culpa corporis rerum incidunt inventore alias facilis 
                        illum! Excepturi culpa recusandae saepe neque ratione autem voluptas!
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img src={BannerImg} alt="Banner" className="banner-img"/>
            </div>
        </div>
    );
};

export default Banner;
