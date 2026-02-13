 import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBackward } from "react-icons/fa";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(data);
  }, []);

  return (
    <div className="p-4 bg-[#f4f4f5] min-h-screen">
    
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
      
        <div className="min-w-[600px] flex bg-slate-800 text-white font-semibold text-sm sm:text-base px-4 py-3">
          <div className="w-1/3">Employee Name</div>
          <div className="w-1/3">Employee Email</div>
          <div className="w-1/3">Employee Role</div>
        </div>

        <ul className="divide-y divide-gray-200">
          {employees.map((emp) => (
            <li key={emp.id}>
              <div className="min-w-[600px] flex items-center text-sm sm:text-base px-4 py-3 hover:bg-gray-100 transition-all">
                <div className="w-1/3 font-medium text-gray-800">{emp.firstname}</div>
                <div className="w-1/3 text-blue-600">{emp.email}</div>
                <div className="w-1/3 text-yellow-600">{emp.role}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>

     
      <div className="flex justify-end mt-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-red-600 hover:text-red-800 transition-all font-semibold"
        >
          <FaBackward />
          Back to all Employee List
        </Link>
      </div>
    </div>
  );
};

export default EmployeeList;

