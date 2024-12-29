import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function login() {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [userData, setUserData] = useState({});

  const submitHandler = (e)=> {
    e.preventDefault();

    setUserData({
      email: email,
      password: password
    })
    
    
    setEmail('');
    setPassword('');

  }

  return (
          <>
           <div className='p-7 flex flex-col justify-between h-screen' >
              
              <div>
              <img className='w-20 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
             
             <form onSubmit={ (e)=> {
              submitHandler(e);
             } }  className=' px-1 py-2' >
              <h3 className='text-xl font-bold mb-2'> what is your email</h3>
              <input
               className='bg-[#eeeeee] mb-7  rounded px-4 py-2 border w-full text-lg placeholder:text-base  mb-2 '
               required 
                
               value={email}
               onChange={ (e) => {  
                  setEmail(e.target.value);
                }
                }

               type="email" placeholder='email12@gmail.com'/>

              <h3  className='text-xl  font-bold  mb-2' >Enter Password</h3>

              <input
              
               className='bg-[#eeeeee] mb-7  rounded px-4 py-2 border w-full text-lg placeholder:text-base  mb-2 '

              required 
              value={password}
               onChange={ (e) => {  
                  setPassword(e.target.value);
                }
                }
              type="password" placeholder='password'/>

              <button
                className='bg-[#111] text-white font-semibold  mb-7  rounded px-4 py-2   w-full text-lg placeholder:text-base  mb-2 ' 
              >
               User Login
                </button>
             </form>
             
             <p className='text-center' >New here <Link to="/signup" className='text-blue-800' >Create new Account</Link> </p>

              </div>

              <div>
                <Link to='/captain-login' className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-7 rounded px-7 py-2 w-full text-lg placeholder:text-base  '  >Sign in as Captain</Link>
              </div>
           

           </div>
          </>
  )
}

export default login