import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

const cache = [];
function replacer(key, value) {
  if (typeof value === "object" && value !== null) {
    if (cache.includes(value)) {
      // Referencia cíclica encontrada
      try {
        // Si es un objeto o una matriz, devolver una cadena vacía
        return JSON.parse(JSON.stringify(value));
      } catch (error) {
        // Si no se puede convertir en una cadena JSON, devolver undefined
        return;
      }
    }
    // Almacenar el valor en el caché
    cache.push(value);
  }
  return value;
}

export default function Bugpage() {
  const router = useRouter();
  const { id } = router.query;
  const [dataResponse, setDataResponse] = useState([]);
  const [name, updateName] = useState("");
  const [fecha, updatefecha] = useState("");
  const [descripcion, updateDescripcion] = useState("");

  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = `http://localhost:3000/api/Getbugs/`;
      const postData = {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          {
            id: id,
          },
          replacer
        ),
      };

      const response = await fetch(apiUrlEndpoint, postData);
      const res = await response.json();
      console.log(res.products);
      setDataResponse(res.products);
    }
    getPageData();
  }, [router.query.id, router.isReady]);

  async function handleUpdate(id) {
    // Llamar al endpoint /api/Edit para editar el bug de la base de datos
    const apiUrlEndpoint = `http://localhost:3000/api/Editbugs/`;
    const postData = {
      id,
      name,
      fecha,
      descripcion,
    };
    await axios.post(apiUrlEndpoint, postData);
  }


    return (
        <div className='  flex bg-[#CCD1E4] h-full w-full full-screen' >
            <div className='' >

            </div>

            <div className='flex flex-row h-full w-full' >
                {dataResponse.map((products) => {
                    return (
                        <div key={products.id_bug} >

                            <div className="flex flex-row bg-[#7D6E83]  text-white box-content h-96 w-96 border-4 border-solid  rounded-lg space-y-4  mr-10 ml-72 mt-6 " >
                                <div className='flex flex-col ml-6 font-mono text-black ' >
                                    <input
                                        type="text"
                                        className="w-30 h-12 mt-6 p-3 m-3"
                                        value={name || products.nombre_bug}
                                        onChange={(e) => updateName(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        className="p-3 m-3"
                                        value={fecha || products.fecha}
                                        onChange={(e) => updatefecha(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        className="w-72 h-72 p-3 m-3"
                                        value={descripcion || products.descripcion}
                                        onChange={(e) => updateDescripcion(e.target.value)}
                                    />

                                    <button className='bg-gray-400 mt-4 mb-6 text-white hover:bg-[#BFA2DB] ' onClick={handleUpdate}>Update</button>
                                </div>
                            </div>
                        </div>

                    );

                })}
            </div>


        </div>

    );
}