import "./Footer.scss";

import {
    FaLocationArrow,
    FaMobileAlt,
    FaEnvelope
} from 'react-icons/fa'

import Payment from '../../assets/payments.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing 
                        elit. Ad voluptas, consectetur cumque aspernatur maxime
                        natus cum laudantium laborum dolorum libero!
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow/>
                        <div className="text">
                            Kayaloram Rd,Punnamada,Kottakulangara,Alappuzza,
                            Kerala, India
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt/>
                        <div className="text">
                            Phone : +91 1234567890
                        </div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope/>
                        <div className="text">
                            Email : support@tjdevstore.com
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy & Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Condition</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        &copy; 2023 TJ Dev Store. All Rights Reserved 
                    </div>
                    <img src={Payment} alt="payment" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
