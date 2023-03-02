import React, { useState } from 'react';
import Link from 'next/link';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  };

  return (
    <div className="bg-[#E3F6FF] min-h-screen h-full flex flex-col items-center justify-center">
        <div className="text-2xl font-bold p-6">Create an account here  </div>
     
      <div className="w-64 p-6 bg-[#7D6E83] text-white rounded-lg">
        <input 
          type="email"
          placeholder="Email"
          className=" text-black w-full h-12 p-3 m-3 border border-gray-300 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className=" text-black w-full h-12 p-3 m-3 border border-gray-300 rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full h-12 p-3 m-3 bg-[#C2B0C9] text-white hover:bg-[#BFA2DB] rounded-lg" onClick={handleSubmit}>
          Continue
        </button>
        <p className='ml-2'>Already got an account?</p>
        <Link href="/login" className='ml-2' >
             Log in 
          </Link>
      </div>
    </div>

  );
}

export default Register;