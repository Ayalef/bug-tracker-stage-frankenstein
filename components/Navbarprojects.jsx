import React from 'react'
import Link from 'next/link'

function navbarprojects() {
  return (
    <div className="bg-[#F0D9FF] min-h-screen">
        <div>
          <div className="flex flex-col p-6 bg-[#7D6E83] text-white box-content h-screen w-48 border-4 border-solid rounded-lg space-y-4  ">
            <Link href="/">
              <div className="text-xl font-sans p-3 mt-10 rounded hover:bg-[#BFA2DB] ">⌂ Home</div>
            </Link>
           
            
            <div>
              <Link href="/login" >
            <div className="text-xl font-sans p-3 rounded hover:bg-[#BFA2DB] mt-96 border-solid border-2 border-[#F0D9FF] "> ← Log out  </div>
            </Link>
            </div>
            
          </div>
        </div>
      </div>
  )
}

export default navbarprojects