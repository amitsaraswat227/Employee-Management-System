import React, { useEffect } from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import { getLocalstorage} from '../utils/LocalStorage';
import { setLocalstorage } from '../utils/LocalStorage';

export const AuthContext=createContext();



const AuthProvider = ({children}) => {
    const [userdata,setUserdata]=useState(null);
    
    // localStorage.clear();

    useEffect(()=>{
        setLocalstorage();
       const {employees} =getLocalstorage();
       setUserdata(employees)
    },[]) 
  return (
    <div>
      <AuthContext.Provider value={[userdata,setUserdata]}>
        {children}
      </AuthContext.Provider>
     </div>
  )
}

export default AuthProvider
