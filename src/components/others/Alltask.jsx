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
