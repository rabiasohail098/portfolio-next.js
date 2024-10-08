import React from 'react';
import Image from 'next/image';
import ProgressBar from './progressbar';
import ProgressBar2 from './progressbar';
import Link from 'next/link';
const About = () => {
  return (
    <div>
      {/* Parent div - Flex on large screens, Stack on smaller screens */}
      <div className='flex flex-col lg:flex-row w-full'>
        
        {/* Left side - Image and details */}
        <div className='lg:w-[60%] w-full'>
          <div className='flex flex-col lg:flex-row w-full'>
            <Image
              src="/image/rab (4).jpg"
              className='mt-[50px] mx-auto lg:ml-[20px] rounded-3xl'
              alt=""
              width={400}
              height={400}
            />
            <div className='text-white w-full lg:ml-[40px] mt-[20px] lg:mt-[150px] text-center lg:text-left'>
              <h3 className='text-[18px] lg:text-[25px] hover:text-yellow-300 mt-[10px] lg:mt-[20px]'>
                Name: <span> Rabia&nbsp;Sohail</span>
              </h3>
              <h3 className='text-[18px] lg:text-[25px] hover:text-yellow-300 mt-[10px] lg:mt-[20px]'>
                Job Role: <span> Web&nbsp;Developer</span>
              </h3>
              <h3 className='text-[18px] lg:text-[25px] hover:text-yellow-300 mt-[10px] lg:mt-[20px]'>
                Experience: <span> 5 years</span>
              </h3>
              <h3 className='text-[18px] lg:text-[25px] hover:text-yellow-300 mt-[10px] lg:mt-[20px]'>
                Address: <span> Karachi&nbsp;Pakistan</span>
              </h3>
            </div>
          </div>
        </div>

        {/* Right side - About Me section */}
        <div className='lg:w-[35%] w-full text-[22px] lg:text-[50px] font-extrabold mt-[20px] lg:mt-[80px] text-center lg:text-left'>
          <h1 className='hover:text-red-600 mb-[20px] text-white'>About Me</h1>
          <p className='text-[16px] lg:text-[25px] mt-[20px] font-thin text-white'>
            With over 5 years of comprehensive experience in the field of data science & analytics, accompanied by a bachelor’s degree in engineering...
          </p>
          <p className='text-[16px] lg:text-[25px] mt-[20px] font-thin hover:text-yellow-300 text-white'><span className='hover:text-red-500 fonn-bold'>Name: </span>Rabia Sohail</p>
          <p className='text-[16px] lg:text-[25px] mt-[20px] font-thin hover:text-yellow-300 text-white'><Link href="https://rabiasohail1209@gmail.com" target='_blank'><span className='hover:text-red-500 fonn-bold'>Email: </span>rabiasohail1209@gmail.com</Link></p>
          <p className='text-[16px] lg:text-[25px] mt-[20px] font-thin hover:text-yellow-300 text-white'><span className='hover:text-red-500 fonn-bold'>Phone: </span>1234567890</p>
        </div>
      </div>

      {/* Skills section */}
      <div className='flex flex-wrap lg:flex-nowrap w-full lg:w-[90%]'>
        <div className='w-full lg:w-[50%]'>
          <h1 className='text-[22px] lg:text-[35px] text-white hover:text-yellow-300 ml-[20px] lg:ml-[30%] mt-[40px]'>
            Skills
          </h1>
          <h1 className='text-[16px] lg:text-[24px] text-white hover:text-red-600 ml-[20px] mt-[40px]'>SQL 95%</h1>
          <ProgressBar skill='' percentage='' />
          <h1 className='text-[16px] lg:text-[24px] text-white hover:text-red-600 ml-[20px] mt-[40px]'>TypeScript 95%</h1>
          <ProgressBar skill='' percentage='' />
          <h1 className='text-[16px] lg:text-[24px] text-white hover:text-red-600 ml-[20px] mt-[40px]'>HTML 95%</h1>
          <ProgressBar skill='' percentage='' />
          <h1 className='text-[16px] lg:text-[24px] text-white hover:text-red-600 ml-[20px] mt-[40px]'>CSS 95%</h1>
          <ProgressBar2 skill='' percentage='' />
        </div>

        <div className='text-[18px] lg:text-[30px] mt-[20px] lg:mt-[80px] text-white w-full lg:w-[30%]'>
          <h1 className='mb-[20px] hover:text-yellow-300'>
            <strong className='font-bold'>Profile:</strong><span className='ml-[10px] hover:text-red-700'> Rabia Sohail</span>
          </h1>
          <h1 className='mb-[20px] hover:text-yellow-300'>
            <strong className='font-bold'>Education:</strong> <span className='ml-[10px] hover:text-red-700'>Bachelor of Arts</span>
          </h1>
          <h1 className='mb-[20px] hover:text-yellow-300'>
            <strong className='font-bold'>Language:</strong> <span className='ml-[10px] hover:text-red-700'>English, Urdu</span>
          </h1>
          <h1 className='mb-[20px] hover:text-yellow-300'>
            <strong className='font-bold'>Skills:</strong> <span className='ml-[10px] hover:text-red-700'>HTML, CSS, TypeScript, JavaScript</span>
          </h1>
          <h1 className='mb-[20px] hover:text-yellow-300'>
            <strong className='font-bold'>Interest:</strong> <span className='ml-[10px] hover:text-red-700'>Teaching, Coding, Travelling</span>
          </h1>
          <h1 className='mb-[20px] hover:text-yellow-300'>
            <strong className='font-bold'>Email:</strong> <span className='ml-[10px] hover:text-red-700'><a href="https://www.gmail.com">rabiasohail1209@gmail.com</a></span>
          </h1>
        </div>
      </div>

      {/* LinkedIn Button */}
      <div className='text-center'>
        <button className='w-[60%] lg:w-[15%] text-[18px] lg:text-[30px] mt-[20px] lg:mt-[40px] rounded-2xl h-[50px] bg-green-700 hover:text-yellow-300 font-semibold'>
          <a href="https://www.linkedin.com/in/rabia-sohail-684740278/" target='_blank'>LinkedIn</a>
        </button>
      </div>
    </div>
  );
};

export default About;
