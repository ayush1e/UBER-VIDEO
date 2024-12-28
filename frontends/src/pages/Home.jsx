import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
     <>
      <div className=' bg-cover bg-[url(https://images.unsplash.com/photo-1569542609987-2c0e108c8bc9?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]  h-screen pt-8 flex justify-between flex-col w-full  bg-red-400 ' >
        
        <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
         
         <div className='bg-white pb-7 py-4 px-4' >
          <h2 className='text-3xl font-bold' >Get Started with Uber</h2>
          <Link to='/login' className='flex items-center justify-center w-full bg-black py-3 text-white rounded-md mt-5' >Continue</Link>
         </div>

      </div>

     </>
  )
}

export default Home