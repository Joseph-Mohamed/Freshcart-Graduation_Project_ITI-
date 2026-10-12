import axios from 'axios';

const API_URL = 'https://ecommerce.routemisr.com/api/v1/';

// * Get All Products
    export const getProducts = async () => {
    try {
        // const response = await axios.get(`${API_URL}/products`);
        const response = await axios.get(`${API_URL}/products`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
    };

    // * Get Specific Products Details
    export const getProductDetails = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/products/${id}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(`Error fetching product ${id}:`, error);
        return null;
    }
    };

    // * Get All Brands
    export const getBrands = async() => {
        try {
            const response = await axios.get(`${API_URL}/brands`);
            console.log(response.data);
            return response.data
            
        } catch (error) {
            console.error('Error fetching brands:', error);
            return [];
        }
    };

    // * Get Specific Brand Details
    export const getBrandsDetails = async(id) => {
        try {
            const response = await axios.get(`${API_URL}/brands/${id}`);
            console.log(response.data);
            return response.data
            
        } catch (error) {
            console.error(`Error fetching brand:${id}`, error);
            return null;
        }
    };