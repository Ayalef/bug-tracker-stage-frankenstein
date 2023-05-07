import React from 'react'
import Link from 'next/link'

function Index() {
  return (
    
      <div className="bg-[#C2B0C9] min-h-screen h-full">
        <div className="flex">
          <div className="flex flex-col p-6 bg-[#7D6E83] text-white box-content h-screen  w-48 border-4 border-solid rounded-lg space-y-4 mr-36 ">
            <Link href="/">
              <div className="text-xl font-sans p-3 rounded hover:bg-[#BFA2DB] ">⌂ Home</div>
            </Link>
            <Link href="/projects">
            <div className="text-xl font-sans  p-3 rounded hover:bg-[#BFA2DB] border-solid border-2 border-[#F0D9FF] "> ☰ My Projects</div>
          </Link>
         
            <div>
              <Link href="/login" >
                <div className="text-xl font-sans p-3 rounded hover:bg-[#BFA2DB] mt-96 border-solid border-2 border-[#F0D9FF] "> ← Log out  </div>
              </Link>
            </div>
          </div>
  
          <div className="flex flex-row    " >
            <div>
               <h1> 
              <p className='font-semibold text-4xl text-white ml-5 pl-60 mt-8' > Alexandria Tracker </p>
              </h1>
              <h2 className='text-white pl-96 pt-9 text-3xl ml-2 mt-2' >
                <p>⭍</p>
              </h2>
               <h3 className='font-normal text-2xl pl-80 ml-6 mt-2 text-white' >
                 <p>Capabilities</p>
               </h3>
               <div className='' >
               <ul className= 'bg-[#9A86A4] text-center  text-white mt-12 ml-72 mr-7 border-[#9A86A4] border-solid border-2 pt-2 pb-3 rounded ' >
                <li >keep track of issues or bugs </li>
                <li> on multiple projects</li>
                
               </ul>
               <ul className= 'bg-[#9A86A4] text-center  text-white mt-6 ml-72 mr-7 border-[#9A86A4] border-solid border-2 pt-2 pb-3 rounded ' >
                <li >Manage tasks   </li>
                <li>and stay organized</li>
                
               </ul>
               <ul className= 'bg-[#9A86A4] text-center  text-white mt-6 ml-72 mr-7 border-[#9A86A4] border-solid border-2 pt-2 pb-3 rounded ' >
                <li >Stay updated on </li>
                <li>the latest tech news</li>
                
               </ul>
               </div>
               
            </div>
          </div>
  
          
        </div>
      </div>
    );
  }
  

export default Index