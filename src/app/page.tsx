<<<<<<< HEAD
// import Image from "next/image";


// export default function Home() {
//   return (
//   <div>
    
//     <div className="flex text-white w-[100%]">
//       <div className="w-[100%] flex">
//     <div className="infodev items-center w-[40%]">
//       <h1 className="text-[40px] hover:text-red-600 mt-[200px] ml-[25%]" >Hello I am</h1>
//       <h1 className="text-[70px] hover:text-red-600 ml-[24%]">Rabia Sohail</h1>
//     <div className=" items-center justify-center">
//         <h1 className="text-[35px] hover:text-red-600 ml-[25%]">Web Developer</h1>
//         <h1 className="text-[35px] hover:text-red-600 ml-[25%]"> Youtuber </h1>
//         <h1 className="text-[35px] hover:text-red-600 ml-[25%]">Teacher</h1>
//         </div>
//         <div>
//           <button className="w-[20%] ml-[130px] hover:text-yellow-300 mt-[40px] border-separate bg-green-700 border font-semibold text-[24px] rounded-2xl">
//             <a href="https://www.youtube.com/@Parniya098" target="_blank">YouTube</a>
//           </button>
//           <button className="w-[20%] ml-[40px] mt-[40px] hover:text-yellow-300 border-separate bg-green-700 border font-semibold text-[24px] rounded-2xl">
//             <a href="https://github.com/rabiasohail098" target="_blank">My Work</a>
//           </button>
//         </div>
      
//       </div>
//       <div className="devimg w-[50%]" id="main-pic">
//         <Image  src="/image/rab (4).jpg" className="rounded-full ml-[100px] mt-[100px] "alt="pic" 
//         width={500}
//         height={500}/>
//       </div>
//     </div>
//     </div>
//     </div>
  
 
//   );
// }
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Flex container for large screens and block for small screens */}
      <div className="flex flex-col lg:flex-row text-white w-[100%]">
        {/* Text Section */}
        <div className="w-[100%] flex flex-col items-center lg:w-[40%]">
          <div className="infodev text-center lg:text-left">
            <h1 className="text-[40px] hover:text-red-600 mt-[100px] lg:mt-[200px] lg:ml-[25%]">
              Hello I am
            </h1>
            <h1 className="text-[60px] hover:text-red-600 lg:ml-[24%]">
              Rabia Sohail
            </h1>
            <div className="items-center justify-center">
              <h1 className="text-[35px] hover:text-red-600 lg:ml-[25%]">
                Web Developer
              </h1>
              <h1 className="text-[35px] hover:text-red-600 lg:ml-[25%]">
                Youtuber
              </h1>
              <h1 className="text-[35px] hover:text-red-600 lg:ml-[25%]">
                Teacher
              </h1>
            </div>
            <div className="mt-[40px] flex justify-center lg:justify-start">
              <button className="w-[40%] lg:w-[40%] mx-2 hover:text-yellow-300 bg-green-700 font-semibold text-[24px] rounded-2xl">
                <a href="https://www.youtube.com/@Parniya098" target="_blank">
                  YouTube
                </a>
              </button>
              <button className="w-[40%] lg:w-[40%] mx-2 hover:text-yellow-300 bg-green-700 font-semibold text-[24px] rounded-2xl">
                <a href="https://github.com/rabiasohail098" target="_blank">
                  My Work
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="devimg w-full lg:w-[50%] flex justify-center lg:justify-start mt-[50px] lg:mt-[100px]">
          <Image
            src="/image/rab (4).jpg"
            className="rounded-full lg:ml-[100px]"
            alt="pic"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
=======
import Image from "next/image";


export default function Home() {
  return (
  <div>
    
    <div className="flex text-white w-[100%]">
      <div className="w-[100%] flex">
    <div className="infodev items-center w-[40%]">
      <h1 className="text-[40px] hover:text-red-600 mt-[200px] ml-[25%]" >Hello I am</h1>
      <h1 className="text-[70px] hover:text-red-600 ml-[24%]">Rabia Sohail</h1>
    <div className=" items-center justify-center">
        <h1 className="text-[35px] hover:text-red-600 ml-[25%]">Web Developer</h1>
        <h1 className="text-[35px] hover:text-red-600 ml-[25%]"> Youtuber </h1>
        <h1 className="text-[35px] hover:text-red-600 ml-[25%]">Teacher</h1>
        </div>
        <div>
          <button className="w-[20%] ml-[130px] hover:text-yellow-300 mt-[40px] border-separate bg-green-700 border font-semibold text-[24px] rounded-2xl">
            <a href="https://www.youtube.com/@Parniya098" target="_blank">YouTube</a>
          </button>
          <button className="w-[20%] ml-[40px] mt-[40px] hover:text-yellow-300 border-separate bg-green-700 border font-semibold text-[24px] rounded-2xl">
            <a href="https://github.com/rabiasohail098" target="_blank">My Work</a>
          </button>
        </div>
      
      </div>
      <div className="devimg w-[50%]" id="main-pic">
        <Image  src="/image/rab (4).jpg" className="rounded-full ml-[100px] mt-[100px] "alt="pic" 
        width={500}
        height={500}/>
      </div>
    </div>
    </div>
    </div>
  
 
  );
}
>>>>>>> e9178b64e5741184a71ba90e83382f29d03d248c
