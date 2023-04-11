import React from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Category from '../category/category';
import Careers from '../Careers/Careers';
 
 
 

const Home = () => {
    const categories = useLoaderData();
    return (
        <div> <div className='container d-md-inline-flex justify-content-around align-items-center'>
        <div className='writing'>
<h1 className='headline'>One Step Closer To Your <span className='pink'>Dream Job</span> </h1>
<p className='description'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
<button className='btn'>Get started</button>

        </div>
        <img src="/images/All Images/P3OLGJ1 copy 1.png" alt="" />
   </div>

   {/* catagories   */}
   <section className='text-center m-5 align-item-center'>
    <h2 className='  fs-1 fw-bold'>Job Category List</h2>
    <p className='  fs-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
    <div className='categories'>{
        categories.map(category => <Category
        key={category.id} category={category}></Category>)
     }</div>
     
   </section>
{/* featured job section  */}
   <section className='text-center featured'>
    <h1 className='featured-title'>Featured Jobs</h1>
    <p className='featured-description'>Explore thousands of job opportunities with all the information you need. Its your future</p>
    <Careers></Careers>
   </section>
   
</div>
       
    );
};

export default Home;