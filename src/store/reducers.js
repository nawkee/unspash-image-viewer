const initialState = {
    photos: [],
    loading: false,
    error: null,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_PHOTOS_SUCCESS':
            return { ...state, photos: action.payload, loading: false, error: null };
        case 'FETCH_PHOTOS_FAILURE':
            return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
}
