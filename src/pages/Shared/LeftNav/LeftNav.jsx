import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeEditor from '../HomeEditor/HomeEditor';

const LeftNav = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <h4>Category</h4>
            <div className='ps-4'>
                {
                    categories.map(category => <p key={category.id}
                    >
                        <Link to={`/category/${category.id}`} className='text-decoration-none text-black'>{category.name}</Link>
                    </p>)
                }
            </div>
            <HomeEditor></HomeEditor>
        </div>
    );
};

export default LeftNav;