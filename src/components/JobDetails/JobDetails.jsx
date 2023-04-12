import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './JobDetails.css'

const JobDetails = () => {

    const { jobId } = useParams();
    const details = useLoaderData()


    const detailsData = details.find(dt => dt.id === jobId)
    console.log(detailsData)

    const {jobName,jobDescription,jobResponsibility,educationalRequirements,experience,contactInformation,location,salary}=detailsData

    return (
        <div>
            <h1 className='text-center fs-1 mb-5 pb-5'>Job details</h1>
            
             <div className="details-container">
                <div>
                    <div><p className='fs-4'> <span className='fw-bold fs-4'>Job description: </span>  {jobDescription}</p></div>
                    <div> <p className='fs-4'> <span className='fw-bold fs-4'>Job Responsibility: </span>{jobResponsibility}</p>
                  </div>

                  <div>  <p className='fs-4'> <span className='fw-bold fs-4'>Educational Requirements: <br /> <br /> </span>{educationalRequirements}</p></div>
                    
                   <div> <p className='fs-4'> <span className='fw-bold fs-4'>Experience: <br /> <br /></span> {experience}</p></div>
                   
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    
                    <section className='border pt-3 ps-3 pe-3 box'><p className='fw-bold fs-5'>Job details</p>
                    <hr />
                    <p className='fs-5'><span className='fw-bold fs-5'><img className='iconic-img' src="../../../images/All Images/dolour.png" alt="" /> Salary:</span> {salary}</p>
                    <p className='fs-5'> <span className='fw-bold fs-5'><img className='iconic-img' src="/images/All Images/job.png" alt="" /> Job name:</span> {jobName}</p>
                    
                    <p className='fs-5 fw-bold'>Contact information</p>
                    <hr />
                    <p className='fs-5'><span className='fs-5 fw-bold'> <img className='iconic-img' src="../../../images/All Images/phone.png" alt="" /> Contact: </span> {contactInformation.phone}</p>
                    <p className='fs-5'><span className='fs-5 fw-bold'><img className='iconic-img'src="../../../images/All Images/mail.png" alt="" /> Email: </span>{contactInformation.email}</p>
                    <p className='fs-5'><img className=' iconic-img' src="../../../public/images/All images/location.png" alt="" /> <span className='fs-5 fw-bold'>Address: </span>{contactInformation.address}</p>
 
</section>
                        
                   <button className='btn-apply'>Apply now</button>
                </div>

             </div>


        </div>
    );
};

export default JobDetails;