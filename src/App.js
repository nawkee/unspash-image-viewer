import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPhotos } from './store/actions';
import ListScreen from './components/ListScreen';
import PhotoScreen from './components/PhotoScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";

const App = () => {
    const dispatch = useDispatch();
    const photos = useSelector((state) => state.photos);

    useEffect(() => {
        dispatch(fetchPhotos());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ListScreen photos={photos} />} />
                <Route path="/photo/:id" element={<PhotoScreen />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
