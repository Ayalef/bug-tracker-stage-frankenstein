import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Bugspage() {
  const router = useRouter();
  const { id } = router.query;
  const [dataResponse, setDataResponse] = useState([]);
   
  async function handleDeleteBug(id) {
    // Llamar al endpoint /api/Deletebug para eliminar el bug de la base de datos
    const apiUrlEndpoint = `http://localhost:3000/api/Deleteto-do/`;
    const postData = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    };
    await fetch(apiUrlEndpoint, postData);
  
    // Actualizar la UI para reflejar los cambios
  }

  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = `http://localhost:3000/api/Getto-do/`;
      const postData = {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: id,
        }),
      };

      const response = await fetch(apiUrlEndpoint, postData);
      const res = await response.json();
      console.log(res.products);
      setDataResponse(res.products);

      
    }
    getPageData();
  }, [router.query.id, router.isReady]);

  return (
    <div className='flex bg-[#CCD1E4] h-full w-full ' >
      <div>
        <div className=" min-h-screen">
          <div className="flex flex-col p-6 bg-[#7D6E83] text-white box-content h-screen w-48 border-4 border-solid rounded-lg space-y-4  ">
            <Link href="/">
              <div className="text-xl font-sans p-3 rounded hover:bg-[#BFA2DB] ">⌂ Home</div>
            </Link>

            <Link href="/projects">
              <div className="text-xl font-sans  p-3 rounded hover:bg-[#BFA2DB]   "> ☰ My Projects</div>
            </Link>
            <Link href="/Newto-do">
              <div className="text-xl font-sans  p-3 rounded hover:bg-[#BFA2DB] border-solid border-2 border-[#F0D9FF] "> +  Add new To-Do</div>
            </Link>
            <Link href="/newissue">
              <div className="text-xl font-sans  p-3 rounded hover:bg-[#BFA2DB] border-solid border-2 border-[#F0D9FF] "> +  Add new bug</div>
            </Link>
            <div>
              <Link href="/login" >
                <div className="text-xl font-sans p-3 rounded hover:bg-[#BFA2DB] mt-80 border-solid border-2 border-[#F0D9FF] "> ← Log out  </div>
              </Link>
            </div>

          </div>

        </div>
      </div>

      <div className='flex flex-row h-full w-full' >
        {dataResponse.map((products) => {
          return (
            <div key={products.todo_id} >



               
              <div className="flex flex-row bg-[#927FBF]   text-white box-content h-3/4 w-96 border-4 border-solid  rounded-lg space-y-4  mr-10 ml-72 mt-20 " >
                <label className='flex flex-col ml-6 font-mono text-black ' >
                <button  className='bg-[#442a81] text-white font-bold  rounded w-12 ml-72 mt-2 ' onClick={() => router.push("/todo/edit/" + products.todo_id )}>Edit</button>
                <button  className='bg-[#442a81] text-white font-bold  rounded w-12 ml-72 mt-2 ' onClick={() => handleDeleteBug(products.todo_id)}>✕</button>
                 
                  <h1 className='text-white mt-1 text-lg  ' >To-do name:</h1>
                  <label className='bg-white rounded text-lg  text-gray-700 text-center w-64' >{products.nombre_todo}</label>
                  <h2 className='text-white mt-7 text-lg ' >Creation date:</h2>
                  <label className='bg-white rounded text-lg  text-gray-700 text-center w-64 ' >{products.fecha}</label>
                  <h3 className='text-white mt-7 text-lg  ' >Description:</h3>
                  <label className='bg-white rounded text-lg  text-gray-700 text-center mb-10 h-40 mr-6' >{products.descripcion}</label>
                 
                  

                </label>
              </div>
            </div>
          );

        })}
      </div>


    </div>

  );
}