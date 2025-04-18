import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import authServices from '../services/authServices';

const Signin = () => {
  
  const navigate = useNavigate();
  const [user, setUser] = useState({
    password: '',
    username: '',
    id:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevPassword) => ({
      ...prevPassword,
      [name]: value, 
    }));
  };

  const handleNavigate = (path)=>{
    navigate(path);
  }
  


  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
        const response = await authServices.login({ user });

        if (response.status === 200) {
            alert(response.data.message);

        }
    } catch (error) {
        alert(error.response.data.message);
    }
     
  }
  return (
    <div className="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4">
      <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
        <div className="text-center mb-12">
        <h1 className='text-3xl font-bold'>Sign in</h1>
        </div>

        <form>
          <div className="space-y-6">
           
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Username</label>
              <input name="username" type="text" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter user email" autoComplete="off"  value={user.username} onChange={handleChange}/>
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Password</label>
              <input name="password" type="password" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter password" autoComplete="off"  value={user.password} onChange={handleChange} />
            </div>

            
          </div>

          <div className="!mt-12">
            <button type="button" className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none" onClick={handleSubmit}>
              Sign in
            </button>
            <div className='flex justify-between items-center mt-5 text-blue-300 underline'>
              <div className='cursor-pointer'  onClick={()=>handleNavigate('/signup')}>Sign up</div>
            <div className='cursor-pointer' onClick={()=>handleNavigate('/forgotpassword')}>Forgot password...?</div>
            </div>
            
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default Signin
