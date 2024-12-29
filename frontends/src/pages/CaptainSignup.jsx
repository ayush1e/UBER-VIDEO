import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function CaptainSignup() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userData, setUserData] = useState({});
  
    
    const submitHandler = (e) => {
      e.preventDefault();
  
      setUserData({
        username:{
          firstName: firstName,
          lastName: lastName
        },
        email: email,
        password: password
      })
       
  
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      
       
  
    }

  return (
     <>
       <div className='p-7 flex flex-col justify-between h-screen' >
      
              <div>
                <img className='w-20 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      
                <form onSubmit={(e) => {
                  submitHandler(e);
                }} className=' px-1 py-2' >
      
                  <h3 className='text-xl font-medium mb-2'> Enter Your Name</h3>
                  <div className='flex justify-center gap-2 ' >
                    <input
                      className='bg-[#eeeeee] mb-7 w-1/2 rounded px-4 py-2 border   text-medium placeholder:text-base  mb-2 '
                      required
                      type="text" placeholder= 'First Name'
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                      
                      />
      
                    <input
                      className='bg-[#eeeeee] mb-7 w-1/2 rounded px-4 py-2 border  text-medium placeholder:text-base  mb-2 '
                      required
                      type="text" placeholder='Last Name'
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                      />
      
                  </div>
      
                  <h3 className='text-xl font-medium mb-2'> what is your email</h3>
                  <input
                    className='bg-[#eeeeee] mb-7  rounded px-4 py-2 border w-full text-medium placeholder:text-base  mb-2 '
                    required
                    type="email" placeholder='email12@gmail.com'
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
      
                    />
      
                  <h3 className='text-xl  font-medium  mb-2' >Enter Password</h3>
      
                  <input
      
                    className='bg-[#eeeeee] mb-7  rounded px-4 py-2 border w-full text-medium placeholder:text-base  mb-2 '
      
                    required
                    type="password" placeholder='password'
                    
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                     
                    />
      
                  <button
                    className='bg-[#111] text-white font-medium  mb-7  rounded px-4 py-2   w-full text-medium placeholder:text-base  mb-2 '
                  >
                   Captain Signup
                  </button>
                </form>
      
                <p className='text-center' >Already hava a account <Link to="/captain-login" className='text-blue-800' > Login here</Link> </p>
      
              </div>
      
              <div>
                <p className='text-sm items-center p-7' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, perspiciatis nemo? Delectus magni non illum, </p>
              </div>
      
      
            </div>
     </>
  )
}

export default CaptainSignup