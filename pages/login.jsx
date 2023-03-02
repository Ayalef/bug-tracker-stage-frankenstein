import React, { useState } from 'react';
import Link from 'next/link';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  };

  return (
    <div className="bg-[#E3F6FF] min-h-screen h-full flex flex-col items-center justify-center">
        <div className="text-2xl font-bold p-6">Welcome to MVP tracker </div>
      <div className=" font-sans p-6">Login</div>
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
          className="w-full h-12 p-3 m-3 border border-gray-300 rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full h-12 p-3 m-3 bg-[#C2B0C9] text-white hover:bg-[#BFA2DB] rounded-lg" onClick={handleLogin}>
          Login
        </button>
        <a>Don't have an account?</a>
        <Link href="/register">
             Register
          </Link>
      </div>
    </div>

  );
}

export default LoginForm;