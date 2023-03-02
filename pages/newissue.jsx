import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import BugsList from '../components/BugsList';

function NewIssue() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [savedData, setSavedData] = useState(null);

  const handleSave = async () => {
    try {
      // Save the data using the values stored in state
      const response = await axios.post('/api/issue', { name, type, description });
      console.log(response.data);
      setSavedData(response.data); // save the response data to state
      resetInputs(); // reset the input fields
    } catch (error) {
      console.log(error);
    }
  };

  const resetInputs = () => {
    setName('');
    setType('');
    setDescription('');
  };

  return (
    <div className="bg-[#C2B0C9] min-h-screen h-full">
      <div className="flex">
        <div className="flex flex-col p-6 bg-[#7D6E83] text-white box-content h-screen max-h-96 w-48 border-4 border-solid rounded-lg space-y-4 mr-36 ">
          <Link href="/">
            <div className="text-xl font-sans p-3 rounded hover:bg-[#BFA2DB] ">⌂ Home</div>
          </Link>
          <div>
            <Link href="/login" >
              <div className="text-xl font-sans p-3 rounded hover:bg-[#BFA2DB] mt-60 border-solid border-2 border-[#F0D9FF] "> ← Log out  </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-row bg-[#E3F6FF]  text-white box-content h-1/2 w-2/5 border-4 border-solid  rounded-lg space-y-4  mr-10 ml-14 mt-6 " >
          <div className='flex flex-col ml-6 font-mono text-black ' > 
            <input type="text" placeholder="Enter Name of the project" className="  w-64 h-12  p-3 m-3" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Enter Type of bug" className="p-3 m-3" value={type} onChange={(e) => setType(e.target.value)} />
            <input type="text" placeholder="Enter description" className=" w-96 h-72 p-3 m-3" value={description} onChange={(e) => setDescription(e.target.value)} />
            <button className='bg-[#7D6E83]  mb-2 text-white hover:bg-[#BFA2DB] ' onClick={handleSave}>Save</button>
          </div>
        </div>

        <div className="flex flex-row bg-[#E3F6FF] text-black box-content h-screen w-48 border-4 border-solid rounded-lg space-y-4 ml-20 " >
          <BugsList />
        </div>
      </div>
    </div>
  );
}

export default NewIssue;

