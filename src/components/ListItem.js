import React from 'react';

const ImageItem = ({ image, onClick }) => {
    return (
        <div className="image-item" onClick={onClick}>
            <img src={image.urls.regular} alt={image.alt_description} />
            <h3>{image.description}</h3>
            <p>{image.user.username}</p>
        </div>
    );
};

export default ImageItem;
