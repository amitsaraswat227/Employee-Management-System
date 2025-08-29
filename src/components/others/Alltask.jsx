// import React, { useContext } from 'react'
// import { AuthContext } from '../../context/AuthProvider'
// import { Link, NavLink } from 'react-router-dom'
// import { FaForward } from "react-icons/fa";

// const Alltask = () => {
//   const [userdata,setUserdata]=useContext(AuthContext)
  
  
  
//   return (
//     <div className=' bg-[#1c1c1c] p-5 mt-5 rounded'>
//       <div className='flex items-end justify-between'>
//          <Link to={"/add-employee"}>
//             <div className=''>
//               <button className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-sm font-semibold leading-7 mb-5 text-white hover:bg-indigo-500 ">
//                <span className='text-xl'>+</span>  Add Employee
//               </button>
//             </div>
//      </Link>

   
//                   <Link
//                     to={"/employee-list"}
//                     className="font-medium text-indigo-600 transition-all duration-200 mb-6  hover:text-indigo-700 hover:underline focus:text-indigo-700 flex items-center gap-3"
//                   >
//                     <FaForward />
//                     View to all Employee List
//                   </Link>
                
//       </div>
//       <div>
       
//         <div className='bg-red-400 py-2 mb-4 px- flex justify-between  rounded '>
//          <h2 className=' w-1/5 ml-2'>Employee</h2>
//         <h3 className='w-1/5 '>New Task</h3>
//         <h5 className='  w-1/5'>Active Task</h5>
//          <h5 className=' w-1/5 '>Completed</h5>
//           <h5 className=' w-1/5 '>failed</h5>
//       </div>
//       </div>

//     <div>
//         {
//            userdata.map(function(elem,id){
//     return     <div key={id} className='border-2 border-emerald-500 py-2 mb-4 px- flex justify-between  rounded '>
//         <h2 className=' w-1/5 ml-2'>{elem.firstname}</h2>
//         <h3 className='w-1/5 text-blue-600'>{elem.taskCount.newtask}</h3>
//         <h5 className='  w-1/5 text-yellow-400'>{elem.taskCount.active}</h5>
//          <h5 className=' w-1/5 text-white '>{elem.taskCount.completed}</h5>
//           <h5 className=' w-1/5 text-red-600 '>{elem.taskCount.failed}</h5>
//       </div>
//            })
//       }
//     </div>
     
      
//       </div>
//   )
// }

// export default Alltask
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Link } from 'react-router-dom';
import { FaForward } from "react-icons/fa";

const Alltask = () => {
  const [userdata] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded text-white">
    
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <Link to="/add-employee">
          <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500">
            <span className="text-xl">+</span> Add Employee
          </button>
        </Link>

        <Link
          to="/employee-list"
          className="font-medium text-indigo-400 hover:text-indigo-600 hover:underline flex items-center gap-2"
        >
          <FaForward />
          View to all Employee List
        </Link>
      </div>

    
      <div className="mt-6 overflow-x-auto">
      
        <div className="flex min-w-[600px] justify-between bg-red-400 text-black font-semibold py-2 px-4 rounded text-sm sm:text-base">
          <div className="w-1/5">Employee Name</div>
          <div className="w-1/5">New Task</div>
          <div className="w-1/5">Active Task</div>
          <div className="w-1/5">Completed</div>
          <div className="w-1/5">Failed</div>
        </div>

      
        <div className="mt-3 space-y-3 min-w-[600px]">
          {userdata.map((elem, id) => (
            <div
              key={id}
              className="flex justify-between border border-emerald-500 py-2 px-4 rounded text-sm sm:text-base"
            >
              <div className="w-1/5">{elem.firstname}</div>
              <div className="w-1/5 text-blue-400">{elem.taskCount.newtask}</div>
              <div className="w-1/5 text-yellow-400">{elem.taskCount.active}</div>
              <div className="w-1/5 text-green-300">{elem.taskCount.completed}</div>
              <div className="w-1/5 text-red-500">{elem.taskCount.failed}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alltask;
