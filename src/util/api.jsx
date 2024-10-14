import axios from 'axios';

const params = {
    headers : {
        Authorization : "bearer " + import.meta.VITE_STRAPI_KEY 
    },
}

export const fetchDataFromApi = async(url) => {
    // console.log(process.env.REACT_APP_DEV_URL + url);
    try{
        const { data } = await axios.get(
            import.meta.VITE_APP_DEV_URL + url,
            params
        );
        return data;
    }catch(error){
        console.log(error);
        return error;
    }
}