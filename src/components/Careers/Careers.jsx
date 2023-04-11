
import React, { useEffect, useState } from 'react';
import Job from '../../Job/Job';
 import './Careers.css'

const Careers = () => {
    const [jobs,setJobs]=useState([]);
    useEffect(()=>{
        fetch('career.json')
        .then(res=>res.json())
        .then(data => setJobs(data))
    },[])
    const newJobs =jobs.slice(0,4)
    
    return (
        <div className='careers'>
          {newJobs.map(job => <Job
          key={job.id}
          job={job}></Job>)}
        </div>
    );
};

export default Careers;