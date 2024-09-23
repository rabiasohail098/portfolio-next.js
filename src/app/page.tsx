import Image from "next/image";


export default function Home() {
  return (
  <div>
    
    <div className="flex text-white w-[100%]">
    <div className="infodev items-center w-[40%]">
      <h1 className="text-[40px] hover:text-red-600 mt-[200px] ml-[30%]" >Hello I am</h1>
      <h1 className="text-[70px] hover:text-red-600 ml-[29%]">Rabia Sohail</h1>
    <div className=" items-center justify-center">
        <h1 className="text-[35px] hover:text-red-600 ml-[28%]">Web Developer</h1>
        <h1 className="text-[35px] hover:text-red-600 ml-[28%]"> Youtuber </h1>
        <h1 className="text-[35px] hover:text-red-600 ml-[28%]">Teacher</h1>
        </div>
        <div>
          <button className="w-[20%] ml-[200px] hover:text-yellow-300 mt-[40px] border-separate bg-green-700 border font-semibold text-[24px] rounded-2xl">
            <a href="https://www.youtube.com/@Parniya098" target="_blank">YouTube</a>
          </button>
          <button className="w-[20%] ml-[40px] mt-[40px] hover:text-yellow-300 border-separate bg-green-700 border font-semibold text-[24px] rounded-2xl">
            <a href="https://github.com/rabiasohail098" target="_blank">My Work</a>
          </button>
        </div>
      
      </div>
      <div className="devimg w-[45%]" id="main-pic">
        <Image  src="/image/rab (4).jpg" className="rounded-full ml-[300px] mt-[100px] "alt="pic" 
        width={500}
        height={500}/>
      </div>
    </div>
    </div>
  
 
  );
}
