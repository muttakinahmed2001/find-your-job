import React from 'react';
import './Category.css'

const Category = ({category}) => {
    const { name,icon,jobsCount}=category
    return (
        <div className='category'>
             
             <img src={icon} alt="" />
            <h2 className='category-name'>{name}</h2>
            <p className='jobs-number'>{jobsCount} jobs available</p>
        </div>
    );
};

export default Category;