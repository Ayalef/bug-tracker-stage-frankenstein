import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Bugpage() { 
  const router = useRouter();
  const { id } = router.query;
  const [dataResponse, setDataResponse] = useState([]);

  async function handleDeleteBug(id) {
    // Llamar al endpoint /api/Deletebug para eliminar el bug de la base de datos
    const apiUrlEndpoint = `http://localhost:3000/api/Deleteproject/`;
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
      const apiUrlEndpoint = `http://localhost:3000/api/Getbugs-lib/`;
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
    <div className='  flex bg-[#CCD1E4] full-screen' >
      <div className='' >
        <div className=" min-h-screen sticky  ">
          <div className="  flex flex-col p-6 bg-[#7D6E83] text-white box-content h-screen w-48 border-4 border-solid rounded-lg space-y-4  ">
            <Link href="/">
              <div className=" ml-7 text-xl font-sans p-3 rounded hover:bg-[#BFA2DB] ">⌂ Home</div>
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
                <div className="text-xl font-sans p-3 rounded hover:bg-[#BFA2DB] mt-64 border-solid border-2 border-[#F0D9FF] "> ← Log out  </div>
              </Link>
            </div>

          </div>

        </div>
      </div>

      <div className='flex flex-row' >
        {dataResponse.map((product) => {
          return (
            <div key={product.id_proyecto} >
              <h1 className="font-semibold text-4xl text-gray-700 ml-48 pl-60 mt-8 mb-3 ">  Current proyect </h1>
              <h2 className="text-gray-700 text-5xl  ml-56 mb-4  pl-80 " >⇩</h2>
              <div className='flex flex-row ml-96 ' >
                <p className=' text-center font-normal text-2xl text-[#4D455D]  pl-24  ' >{product.nombre_proyecto}</p>
                <button className='bg-[#4D455D] text-white font-bold  rounded w-12 ml-10 mt-2 ' onClick={() => handleDeleteBug(product.id_proyecto)}>✕</button>
              </div>
                <div>

                <div className='grid gap-0 grid-cols-4 ' >
                  {product["GROUP_CONCAT(todo.nombre_todo SEPARATOR ', ')"]
                    .split(", ")
                    .filter((todoName, index, self) => self.indexOf(todoName) === index)
                    .map((todoName, index) => (
                      <Link
                        href={`/todo/${product["GROUP_CONCAT(todo.todo_id SEPARATOR ', ')"].split(", ")[index]
                          }`}
                      >
                        <div
                          className=" ml-32 mt-20 w-32 h-44  font-sans text-xl text-white text-center bg-[#927FBF] hover:bg-[#C4BBF0] rounded"
                          key={todoName}
                        >
                          <div className=" mt-10 ">
                            <div className=" mt-10 "> {todoName}</div>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>

                </div>
              <div className='grid gap-0 grid-cols-4 '  >

                {product["GROUP_CONCAT(bugs.nombre_bug SEPARATOR ', ')"]
                  .split(", ")
                  .filter((bugName, index, self) => self.indexOf(bugName) === index)
                  .map((bugName, index) => (
                    <Link
                      href={`/bugs/${product["GROUP_CONCAT(bugs.id_bug SEPARATOR ', ')"].split(", ")[index]
                        }`}
                    >
                      <div
                        className=" ml-32 mt-20 w-32 h-44  font-sans text-xl text-white text-center bg-[#7D6E83] hover:bg-[#BFA2DB] rounded"
                        key={bugName}
                      >
                        <div className=" mt-10 ">
                          <div className=" mt-10 "> {bugName}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                  </div>
                  

            </div>
           
          );

        })}
      </div>


    </div>

  );
}