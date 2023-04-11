
import React, { useEffect, useState } from 'react';
import Job from '../../Job/Job';
 import './Careers.css'

const Careers = () => {
    const [jobs,setJobs]=useState([]);
    useEffect(()=>{
        fetch('/career.json')
        .then(res=>res.json())
        .then(data => setJobs(data))
    },[])
    const newJobs =jobs.slice(0,4)
    
    return (
        <div className='d-flex flex-column justify-content-center'>
            <div className='careers'>{newJobs.map(job => <Job
          key={job.id}
          job={job}></Job>)}</div>
          
         <section > <button className='btn-see-all'>See All Jobs</button></section>
         
        </div>
    );
};

export default Careers;