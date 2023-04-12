import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';


const JobDetails = () => {

    const { jobId } = useParams();
    const details = useLoaderData()


    const detailsData = details.find(dt => dt.id === jobId)
    console.log(detailsData)

    const {jobName,jobDescription,jobResponsibility,educationalRequirements,experience,contactInformation,location,salary}=detailsData

    return (
        <div>
            
             <div className="details-container d-flex m-5 gap-5">
                <div>
                    <div><p className='fs-3'> <span className='fw-bold fs-3'>Job description: </span> {jobDescription}</p></div>
                    <div> <p className='fs-3'> <span className='fw-bold fs-3'>Job Responsibility: </span>{jobResponsibility}</p>
                  </div>

                  <div>  <p className='fs-3'> <span className='fw-bold fs-3'>Educational Requirements: </span>{educationalRequirements}</p></div>
                    
                   <div> <p className='fs-3'> <span className='fw-bold fs-3'>Experience:</span> {experience}</p></div>
                   
                </div>
                <div>
                    <p>job details</p>
                    <hr />
                    <p>salary: {salary}</p>
                    <p>job name : {jobName}</p>
                    
                    <p>Contact information</p>
                    <hr />
                    <p>Contact: {contactInformation.phone}</p>
                    <p>Email:{contactInformation.email}</p>
                    <p>Address:{contactInformation.address}</p>

                </div>
             </div>


        </div>
    );
};

export default JobDetails;