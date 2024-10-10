import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

import logo from "../assets/icon-logo.png"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Usuario logueado:", userCredential.user);
        navigate('/3GzUx6zy'); 
      })
      .catch((error) => {
        setError("Error al iniciar sesión: " + error.message);
      });
  };

  return (
    <div className='flex justify-center items-center h-screen bg-[#ededed]'>
    <form 
        onSubmit={handleLogin}
        className='flex flex-col justify-between bg-white p-20 rounded-xl h-[80vh] shadow-md'
    >
        <img src={logo} alt="Chocolattear Logo" className='w-12 self-center'/>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className='border border-solid border-x-0 border-t-0 font-montserrat'
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className='border border-solid border-x-0 border-t-0 font-montserrat'
      />
      <button 
        type="submit"
        className='text-white font-montserrat bg-[#252525] rounded-md py-1 font-bold'>Log In</button>
      {error && <p>{error}</p>}
    </form>
    </div>
  );
};

export default Login;
