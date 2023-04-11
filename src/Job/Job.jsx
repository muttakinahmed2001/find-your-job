import React from 'react';

const Job = ({job}) => {
    const {jobName,img,companyName,jobType,jobTime,location,salary}=job
    return (
        <div className=' col-md-6'>
            <img src={img} alt="" />
            <h1>{jobName}</h1>
        </div>
    );
};

export default Job;