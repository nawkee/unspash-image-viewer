import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PhotoScreen = () => {
    const { id } = useParams();
    const photos = useSelector((state) => state.photos);
    const photo = photos.find((photo) => photo.id === id);

    return (
        <div className="photo-screen">
            {photo ? (
                <img src={photo.urls.regular} alt={photo.alt_description} />
            ) : (
                <p>Error loading photo...</p>
            )}
        </div>
    );
};

export default PhotoScreen;
