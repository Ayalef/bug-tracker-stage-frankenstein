import axios from 'axios';
import Link from 'next/link';

import { useState, useEffect } from 'react';

 function  Allprojectnames() {
  const [project, setproject] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/Allprojectnames/');
      setproject(result.data);
    };
    fetchData();
  }, []);

  return (
    <div  >
      <ul className=" grid grid-cols-5 gap-10   ">
        {project.map((project) => ( 
        <div key={project.id_proyecto} className='bg-[#C2B0C9] ' >
           <div >
           <Link  href="/proyecto/[id]" as={`/proyecto/${project.id_proyecto}`}>
              <div  className=" w-32 h-44   font-sans text-xl text-white text-center bg-[#907FA4] hover:bg-[#BFA2DB] rounded px-3 py-2">
              <label>{project.nombre_proyecto}</label>
              </div>
              </Link>
            </div>
        </div>
              
        ))}
      </ul>
    </div>
  );
}

export default Allprojectnames;