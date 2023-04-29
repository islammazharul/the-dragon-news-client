import React from 'react';
import { useParams } from 'react-router-dom';
const { id } = useParams()

const News = () => {
    return (
        <div>
            <h2>News is coming: {id}</h2>
        </div>
    );
};

export default News;