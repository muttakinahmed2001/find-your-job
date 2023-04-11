import React from 'react';
import './Job.css'

const Job = ({job}) => {
    const {jobName,img,companyName,jobType,jobTime,location,salary}=job
    return (
        <div className='job'>
            <img className='company-img' src={img} alt="" />
            <h1 className='job-name'>{jobName}</h1>
            <h4 className='company-name'>{companyName}</h4>
            <section className='d-flex gap-2'>
                <button className='border border-primary btn-job'>{jobType}</button>
                <button className='border border-primary btn-job'>{jobTime}</button>
            </section>
            <section className='d-flex gap-4 mb-3'>
                <p className='location'><img className='location-img' src="../../public/images/All Images/location.png" alt="" />{location}</p>
                <p className='salary'>Salary:{salary}</p>
                 
            </section>
            <button className='btn-details'>View Details</button>
            
        </div>
    );
};

export default Job;