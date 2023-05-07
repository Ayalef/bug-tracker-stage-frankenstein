import Allprojectnames from '../components/Allprojectnames';
import Navbarprojects from '../components/Navbarprojects';
import React, { useState } from 'react';
import axios from 'axios';

function project() {
  const [nombre_proyecto, setnombre_proyecto] = useState('');
  const [savedData, setSavedData] = useState(null);
  

  const handleSave = async () => {
    try {
      // Save the data using the values stored in state
      const response = await axios.post('/api/Projectname/', { nombre_proyecto});
      console.log(response.data);
      setSavedData(response.data); // save the response data to state
      
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div className='flex h-full w-full bg-[#CCD1E4]' >
      <div className=''  >
        <Navbarprojects />
      </div>
     
     <div className='flex flex-col' >

     <div className="flex   bg-[#CCD1E4]  text-white 
        box-content h-24 w-50 border-4 border-solid  rounded-lg 
         space-y-4 ml-40 mr-10 ml- mt-10  " > 
         <div className=' ml-8 mb-3 mt-3 w-50' >
         <label className='text-gray-600 ml-2  ' >Create New Project</label>
        <input type="text" placeholder='Enter Project Name' className="block w-50 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
         value={nombre_proyecto} onChange={(e) => setnombre_proyecto(e.target.value)} ></input>
         
         </div >
         <div>
         <button className='  bg-[#7D6E83] px-5 py-1 mt-3 mb-2 ml-40 rounded text-white hover:bg-[#BFA2DB] ' onClick={handleSave} >Add</button>
         </div>
        
         </div >

       <div className='mt-36 ml-48'  >
       <Allprojectnames/>
       </div>
     </div>
      
      
         

    </div>
    
  )
}

export default project;