import React from 'react'
import { useState } from 'react';

const Header = (props) => {
 

  const loguser=JSON.parse(localStorage.getItem('loggedinUser'));
  
  

  const logout=()=>{
    localStorage.setItem('loggedinUser','');
   
    console.log(props.changeUser);
    props.changeUser();
  }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello 
        <br />
        <span className='text-5xl font-semibold'> {loguser?.data?.firstname || "Admin"}👌 </span></h1>
      <button  onClick={logout} className='font-semibold text-2xl bg-red-500 rounded-sm px-5 py-2'>Logout</button>
    </div>
  )
}

export default Header;
