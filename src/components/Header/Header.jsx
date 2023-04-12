import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
         <nav className="d-flex justify-content-around align-items-center">
            <h2 className='title'>Find your job</h2>
            <section className='link'>
                 <Link to='/'>Home</Link>
            <Link to='/statistics'>Statistic</Link>
            <Link to='/appliedJobs'>Applied jobs</Link>
            <Link to='/blog'>Blog</Link>
            </section>
            <button className='btn'>Start Applying</button>
           
             
         </nav>
    );
};

export default Header;