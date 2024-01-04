import axios from 'axios';

const apiKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

const baseUrl = 'https://api.unsplash.com/photos';

export const fetchNewestPhotos = async () => {
    try {
        const response = await axios.get(`${baseUrl}`, {
            params: {
                client_id: apiKey,
                page: 1,
                per_page: 20,
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
