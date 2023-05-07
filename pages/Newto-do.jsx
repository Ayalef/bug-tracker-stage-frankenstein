import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';

function NewIssue() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [fecha, setfecha] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [idproyecto, setIdProyecto] = useState('');
  const [savedData, setSavedData] = useState(null);
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    axios.get('/api/Allprojectnames/')
      .then((response) => {
        setProyectos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSave = async () => {
    try {
      // Save the data using the values stored in state
      const response = await axios.post('/api/Saveto-do/', { name, fecha, descripcion, idproyecto });
      console.log(response.data);
      setSavedData(response.data); // save the response data to state
      resetInputs(); // reset the input fields
    } catch (error) {
      console.log(error);
    }
  };

  const resetInputs = () => {
    setName('');
    setfecha('');
    setDescripcion('');
  };

  useEffect(() => {
    const getTodo = async () =>{
      const res = axios.get('/api/??' + router.query.id )
    }


    if (router.query.id) {
      console.log(router.query.id);
    }
  }, [])

  return (
    <div className="bg-[#CCD1E4] min-h-screen h-full">
      <div className="flex">
        <div className="flex flex-col p-6 bg-[#7D6E83] text-white box-content h-screen w-48 border-4 border-solid rounded-lg space-y-4  ">
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

        <div className="flex flex-row bg-[#927FBF]  text-white box-content h-1/2 w-2/5 border-4 border-solid  rounded-lg space-y-4  mr-10 ml-72 mt-6 " >
          <div className='flex flex-col ml-6 font-mono text-black ' >
            <input type="text" placeholder="Enter Name of the to-do" className="  w-64 h-12 mt-6 p-3 m-3" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Enter Date " className="p-3 m-3" value={fecha} onChange={(e) => setfecha(e.target.value)} />
            <input type="text" placeholder="Enter Description" className=" w-96 h-72 p-3 m-3" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />

            <label className='mt-2 ' htmlFor="proyectos"></label>
            <select
              id="idproyecto"
              value={idproyecto}
              onChange={(event) => setIdProyecto(event.target.value)}>
              <option value="">Selecciona un proyecto</option>
              {proyectos.map((proyecto) => (
                <option key={proyecto.id_proyecto} value={proyecto.id_proyecto}>
                  {proyecto.nombre_proyecto}
                </option>
              ))}
            </select>
            <button className='bg-gray-400 mt-4 mb-6 text-white hover:bg-[#BFA2DB] ' onClick={handleSave}>Save</button>
          </div>
        </div>


      </div>
    </div>
  );
}

export default NewIssue;

