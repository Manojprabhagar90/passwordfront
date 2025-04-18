import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import authServices from '../services/authServices';

const Signup = () => {
  const navigate = useNavigate();
  const [userpassword, setUserPassword] = useState({
    username : '',
    password: '',
    confirmpassword: '',
    id:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
console.log('hello',name);

    
    setUserPassword((prevPassword) => ({
      ...prevPassword,
      [name]: value, 
    }));
  };
  

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
        const response = await authServices.register_submit({ userpassword });

        if (response.status === 201) {
            alert(response.data.message);
          setTimeout(() => {
                          navigate('/');
                      }, 500);
        }
    } catch (error) {
        alert(error.response.data.message);
    }
     
  }
  return (
    <div className="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4">
      <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
        <div className="text-center mb-12">
        <h1 className='text-3xl font-bold'>Register</h1>
        </div>

        <form>
          <div className="space-y-6">
          <div>
              <label className="text-gray-800 text-sm mb-2 block">Username</label>
              <input name="username" type="text" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter user email" autoComplete="off"  value={userpassword.username} onChange={handleChange}/>
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Password</label>
              <input name="password" type="password" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter password" autoComplete="off"  value={userpassword.password} onChange={handleChange}/>
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
              <input name="confirmpassword" type="password" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter confirm password" autoComplete="off"  value={userpassword.confirmpassword} onChange={handleChange} />
            </div>

            
          </div>

          <div className="!mt-12">
            <button type="button" className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none" onClick={handleSubmit}>
              Register
            </button>
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default Signup
