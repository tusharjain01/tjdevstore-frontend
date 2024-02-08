import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MdClose } from 'react-icons/md'

import "./Search.scss";
import prod1 from '../../../assets/products/earbuds-prod-3.webp'
import useFetch from '../../../hooks/useFetch'

const Search = ({ setShowSearch }) => {

    const [query, setQuery] = useState("")
    const navigate = useNavigate()

    const getQuery = (e) => {
        setQuery(e.target.value)
    }

    let { data } = useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`);

    if (query.length === 0) {
        data = null;
    }

    return (
        <div className="search-modal">
            <div className="form-field">
                <input
                    type="text"
                    autoFocus
                    placeholder='Search for product'
                    value={query}
                    onChange={getQuery}
                />
                <MdClose className='close-btn'
                    onClick={setShowSearch}
                />
            </div>
            <div className="search-results-content">
                <div className="search-results">
                {data?.data?.map((item) => (
                    <div className="search-result-item" 
                        key={item.id}
                        onClick={() => {
                        navigate(`/product/${item.id}`) 
                        setShowSearch(false)}}
                    >
                        <div className="img-container">
                            <img src={item?.attributes?.img?.data?.attributes?.formats?.small?.url} alt="product-name" />
                        </div>
                        <div className="prod-details">
                            <span className="name">{item?.attributes?.title}</span>
                            <span className="desc">{item?.attributes?.desc}</span>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default Search;
