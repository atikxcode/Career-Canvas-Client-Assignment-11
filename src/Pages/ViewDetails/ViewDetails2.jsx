import { Link, useLoaderData } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'aos/dist/aos.css'
import Aos from "aos";
import { Helmet } from "react-helmet";

const ViewDetails2 = () => {



  const jobDetails = useLoaderData();
  


  useEffect(() => {
    Aos.init();
  },[])


  const {user} = useContext(AuthContext);
  


    


  return (
    <div className="" >
      <Helmet>
      <meta charSet="utf-8" />
      <title>CareerCanvas - View Details</title>

      </Helmet>
      <NavBar></NavBar>
          <div className="w-full mx-auto container my-32"  data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" >
          <div className=" bg-[#1b1b1b]">
           
           <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row">

          
           <img className="w-full h-auto " src={jobDetails.image} alt="" />
           
           
           <div className="flex flex-col justify-between items-center text-white ">
  
           <div className="flex flex-col   h-full items-start p-8 bg-[#1b1b1b] opacity-70">
            <div className="flex justify-center  w-full">

            <p className="text-2xl mb-2 text-orange-500">{jobDetails.title}</p>
            </div>
            
            <div className="flex flex-col  h-full  gap-4  justify-center">
            <p className="font-extrabold ">Job Description: <span className="text-[14px]  text-gray-400">{jobDetails.description}</span> </p>
            <p className="font-extrabold">Category:   <span className="text-[14px] text-gray-400">{jobDetails.category}</span></p>
            <p className="font-extrabold">Salary Range:  <span className="text-[14px] text-gray-400">{jobDetails.salaryRange}</span> </p>

            <p className="font-extrabold">Number of Applicants: <span className="text-[14px] text-gray-400">{jobDetails.totalApplied}</span> </p>
           
            </div>
            </div>
            
            
           </div>
           </div>
            
            </div>
          </div>
          <ToastContainer />
            </div>
  );
};

export default ViewDetails2;