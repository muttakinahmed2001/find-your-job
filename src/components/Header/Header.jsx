import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
         <nav className='flex'>
            <h2>Find your job</h2>
            <section className='link'>
                 <Link to='/'>Home</Link>
            <Link to='/statistic'>Statistic</Link>
            <Link>Applied jobs</Link>
            <Link>Blog</Link>
            </section>
            <button>Start applying</button>
           
             
         </nav>
    );
};

export default Header;