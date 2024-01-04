import { fetchNewestPhotos } from '../api/unsplash';

export const fetchPhotos = () => async (dispatch) => {
    try {
        const photos = await fetchNewestPhotos();
        dispatch({ type: 'FETCH_PHOTOS_SUCCESS', payload: photos });
    } catch (error) {
        dispatch({ type: 'FETCH_PHOTOS_FAILURE', error });
    }
};
