import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Captainlogin() {
   const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
   
     const [captainData, setCaptainData] = useState({});
   
     const submitHandler = (e)=> {
       e.preventDefault();
   
       setCaptainData({
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
              <img className='w-20 mb-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmoJcsV2aZSkAm3nmwtyjuiekrT3H5U7pvjQ&s" alt="" />
             
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
               Captain Login
                </button>
             </form>
             
             <p className='text-center' >Join a fleet? <Link to="/captain-signup" className='text-blue-800' >Register as a Captain </Link> </p>

              </div>

              <div>
                <Link to='/login' className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-7 rounded px-7 py-2 w-full text-lg placeholder:text-base  '>Sign as a User</Link>
              </div>
           

           </div>


     </>
  )
}

export default Captainlogin