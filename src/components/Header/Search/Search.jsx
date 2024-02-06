import { MdClose } from 'react-icons/md'

import "./Search.scss";
import prod1 from '../../../assets/products/earbuds-prod-3.webp'

const Search = ({ setShowSearch }) => {
    return (
        <div className="search-modal">
            <div className="form-field">
                <input 
                    type="text" 
                    autoFocus 
                    placeholder='Search for product'
                />
                <MdClose className='close-btn' 
                    onClick={setShowSearch}
                />
            </div>
            <div className="search-results-content">
                <div className="search-results">
                    <div className="search-result-item">
                        <div className="img-container">
                            <img src={prod1} alt="product-name" />
                        </div>
                        <div className="prod-details">
                            <span className="name">Product Name</span>
                            <span className="desc">Product Description</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
