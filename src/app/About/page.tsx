import React from 'react'
import Image from 'next/image'
import ProgressBar from './progressbar'
import ProgressBar2 from '../components/progress2'
const about = () => {
  return (
    <div>
         <div className='flex w-[90%]'>
            <div className='flex w-[55%]'>
            <Image src="/image/rab (4).jpg" className='mt-[50px] ml-[50px] rounded-3xl'
            alt=""
            width={350}
            height={200}/>
            <div className='text-white ml-[60px] mt-[150px]'>
                <h3 className='text-[25px] hover:text-yellow-300 mt-[20px]'>Name: <span>Rabia Sohail</span></h3>
                <h3 className='text-[25px] hover:text-yellow-300 mt-[20px]'>Job Role: <span>Web Developer</span></h3>
                <h3 className='text-[25px] hover:text-yellow-300 mt-[20px]'>Experience: <span>5 years 3 Months</span></h3>
                <h3 className='text-[25px] hover:text-yellow-300 mt-[20px]'>Address: <span>Karachi Pakistan</span></h3>
            </div>
         </div>
      
         <div className='w-[35%] text-[50px] font-extrabold mt-[80px] justify-center text-white'>
            <div>
                <h1 className='hover:text-red-600'>About Me</h1>
                <p className='text-[25px] text-left font-thin'>With over 5 years of comprehensive experience in the field of data science & analytics, accompanied by a bachelors degree in engineering. Proficient in data analysis, statistical analysis, hypothesis testing, customer behaviour analysis, & machine learning. Demonstrated success in leading impactful projects and providing effective mentorship.</p>
            </div>
         </div>
         </div>
         <div className='flex w-[90%'>
            <div className='w-[50%]'>
         <h1 className=' text-[35px] w-[100%] text-white hover:text-yellow-300 ml-[30%] mt-[40px]'> Skills </h1>
         <h1 className=' text-[24px] w-[100%] text-white hover:text-red-600 ml-[20px] mt-[40px]'> SQL 95% </h1>
       <ProgressBar skill={''} percentage={''}/>
       <h1 className=' text-[24px] w-[100%] text-white hover:text-red-600 ml-[20px] mt-[40px]'>TypeScript 95%</h1>
       <ProgressBar skill={''} percentage={''}/>
       <h1 className=' text-[24px] w-[100%] text-white hover:text-red-600 ml-[20px] mt-[40px]'>HTML 95%</h1>
       <ProgressBar skill={''} percentage={''}/>
       <h1 className=' text-[24px] w-[100%] text-white hover:text-red-600 ml-[20px] mt-[40px]'>CSS 85%</h1>
       <ProgressBar2 skill={''} percentage={''}/>
       </div>
       
       <div className='text-[30px] text-left  mt-[80px] justify-center text-white w-[30%] '>
        <h1 className='mb-[30px] hover:text-yellow-300'>
            <strong className='font-bold'>Profile:</strong><span className='ml-[20px] hover:text-red-700'>Rabia Sohail</span> 
        </h1>
        <h1 className='mb-[30px] hover:text-yellow-300'>
            <strong className='font-bold'>Education:</strong> <span className='ml-[20px] hover:text-red-700'>Bachelor of Arts </span>
        </h1>
        <h1 className='mb-[30px] hover:text-yellow-300'>
            <strong className='font-bold'>Language:</strong> <span className='ml-[20px] hover:text-red-700'>English, Urdu</span> 
        </h1>
        <h1 className='mb-[30px] hover:text-yellow-300'>
            <strong className='font-bold'>Skills:</strong> <span className='ml-[20px] hover:text-red-700'>HTML, CSS, TypeScript, JavaScript</span> 
        </h1>
        <h1 className='mb-[30px] hover:text-yellow-300'>
            <strong className='font-bold'>Interest:</strong> <span className='ml-[20px] hover:text-red-700'>Teaching, Coding, Travelling</span> 
        </h1>
        <h1 className='mb-[30px] hover:text-yellow-300'>
            <strong className='font-bold'>Email:</strong> <span className='ml-[20px] hover:text-red-700'><a href="https://www.gmail.com">rabiasohail1209@gmail.com</a></span> 
        </h1>
        </div>
       </div>
       <div>
        <button className="w-[15%] text-[30px] ml-[40%] mt-[40px] rounded-2xl h-[50px] mb-[40px] hover:text-yellow-300 border-separate bg-green-700 border font-semibold text-[24px]"><a href="https://www.linkedin.com/in/rabia-sohail-684740278/" target='_blank'></a>Linkedin</button>
       </div>
        </div>
  )
}

export default about