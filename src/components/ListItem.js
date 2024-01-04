import React from 'react';

const ListItem = ({ image, onClick }) => {
    return (
        <div className="list-item" onClick={onClick}>
            <img src={image.urls.full} alt={image.alt_description} />
            <h3>{image.description || image.alt_description}</h3>
            <p>By {image.user.username}</p>
        </div>
    );
};

export default ListItem;
