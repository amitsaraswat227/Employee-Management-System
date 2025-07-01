import React, { useState } from 'react'

const Login = ({handlelogin}) => {
  const [email, setEmail] = useState('');
  const [password,setPassword]=useState('');

  const submithandler=(event)=>{
   event.preventDefault();
   handlelogin(email,password);
   setEmail("");
   setPassword("");
  }

  return (
    <div className=' h-screen w-screen flex items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form className='flex flex-col items-center justify-center' onSubmit={(event)=>{
              submithandler(event)
            }}>
                <input type="email" placeholder='Enter the email'
                required
                className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400' 
                value={email}
                 onChange={(event)=>{
                  setEmail(event.target.value)
                 }} />


                <input type="password" placeholder='Enter the password'
                required
                className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400'
                value={password}
                onChange={(event)=>{
                  setPassword(event.target.value);
                }} />

                <button className=' mt-8 border-none rounded-full  bg-emerald-600 outline-none py-2 px-8 w-full placeholder:text-white font-semibold hover:bg-emerald-700'>Login</button>

            </form>
        </div>
      
    </div>
  )
}

export default Login
