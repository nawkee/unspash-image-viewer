import React from 'react';
import ListItem from './ListItem';
import { useNavigate } from 'react-router-dom';

const ListScreen = ({ photos }) => {
    const navigate = useNavigate();

    const handleImageClick = (image) => {
        navigate(`/photo/${image.id}`);
    };

    return (
        <div className="list-screen">
            {photos.map((image) => (
                <ListItem key={image.id} image={image} onClick={() => handleImageClick(image)} />
            ))}
        </div>
    );
};

export default ListScreen;
