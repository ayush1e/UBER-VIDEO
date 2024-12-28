import React from 'react'

function login() {
  return (
          <>
           <div className='p-7' >

           <img className='w-20 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
             
             <form className=' px-1 py-2' >
              <h3 className='text-xl mb-2'> what is your email</h3>
              <input
               className='bg-[#eeeeee] mb-7  rounded px-4 py-2 border w-full text-lg placeholder:text-base  mb-2 '
               required 
               type="email" placeholder='email12@gmail.com'/>

              <h3  className='text-xl mb-2' >Enter Password</h3>

              <input
              
               className='bg-[#eeeeee] mb-7  rounded px-4 py-2 border w-full text-lg placeholder:text-base  mb-2 '

              required 
              type="password" placeholder='password'/>

              <button
                className='bg-[#111] text-white font-semibold  mb-7  rounded px-4 py-2   w-full text-lg placeholder:text-base  mb-2 ' 
              >
                Login
                </button>
             </form>

           </div>
          </>
  )
}

export default login