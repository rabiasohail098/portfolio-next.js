import React from 'react'
import Link from 'next/link';

const Navbar = ()  => {
  return (
    <div className='inline-flex justify-between items-center h-[70px] bg-orange-400 w-[98%] mt-[20px] mb-[20px] align-middle ml-[15px] mr-[15px]'>
        <div>
            <h1 className='text-[30px] hover:text-yellow-300 w-[150px] text-center m-auto font-semibold'>RSK Zai</h1>
        </div>
       <div className=" w-[30%]">
       <ul className='flex gap-8 text-[24px] ml-[40px] items-center justify-center mr-[60%] font-bold'>
  <li><Link className='hover:text-yellow-300' href="/">Home</Link></li>
  <li><Link className='hover:text-yellow-300' href="/About">About</Link></li>
  <li><Link className='hover:text-yellow-300' href="/Project">Projects</Link></li>
  <li><Link className='hover:text-yellow-300' href="/Contact">Contact</Link></li>
</ul>
       </div>
       {/* <div className='flex mr-20 border justify-center text-[20px] border-blue-950 rounded-xl bg-green-700 text-white w-[12%] text-center'> 
        <button className='text-red-200 hover:text-white '>Download CV</button>
        <IoMdDownload className='mt-1 ml-2 bg-red-500' />
        
       </div> */}
    </div>
  )
}

export default Navbar;