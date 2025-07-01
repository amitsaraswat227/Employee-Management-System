import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { FaBackward } from "react-icons/fa";
import { Link } from 'react-router-dom';

const EmployeeList = () =>  {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(data);
  }, []);
  return (
    <div>

         <div >
       
        <div className='mt-4 border-gray-200 bg-slate-600 dark:border-gray-700 py-2 mb-4 px- flex justify-evenly rounded '>
         <h2 className=' w-1/5 ml-2'>Employee Name</h2>
        <h3 className='w-1/5 '>Employee Email</h3>
        <h5 className='  w-1/5'>Employee Role</h5>
       
      </div>
  <div className="mt-6">
        
         <ul>
          {employees.map((emp) => (
            <li key={emp.id} className="mb-1 ">
               <div  className='border-2 border-emerald-500 py-2 mb-4 px- flex justify-evenly  rounded '>
        <h2 className=' w-1/5 ml-2'>{emp.firstname}</h2>
        <h3 className='w-1/5 text-blue-600'>{emp.email}</h3>
        <h5 className='  w-1/5 text-yellow-400'>{emp.role}</h5>
        
      </div>
            </li>
          ))}
        </ul>
      </div>

      </div>
      
            <div className='flex  justify-end mr-2'>
                  <Link
                to={"/"}
                className="font-medium text-red-600 transition-all duration-200 mb-2  hover:text-red-700 hover:underline focus:text-red-700 flex items-center gap-3"
              >
                <FaBackward />
                Back to all Employee List
              </Link>
         
            </div>
    
    </div>
  )
}

export default EmployeeList
