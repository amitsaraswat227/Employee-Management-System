import React, { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaBackward } from "react-icons/fa";

const EmployeeManager = () => {
  const navigate=useNavigate();
  const [employees, setEmployees] = useState(() => {
    return JSON.parse(localStorage.getItem("employees")) || [];
  });

  const [form, setForm] = useState({ firstname: "", email: "", password: "" ,department:"",role:""});

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!form.firstname || !form.email || !form.password || !form.department || !form.role) {
      alert("All fields required");
      return;
    }

    const newEmployee = {
      id: Date.now(),
      ...form,
      taskCount: { active: 0, newtask: 0, completed: 0, failed: 0 },
      tasks: [],
    };

    setEmployees((prev) => [...prev, newEmployee]);

    setForm({ firstname: "", email: "", password: "" ,department:"",role:""});


    
    
  };

  return (

     <section>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
              <div className="absolute inset-0">
                <img
                  className="w-full h-full object-cover object-top"
                  src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
    
              <div className="relative">
                <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
                  <h3 className="text-4xl font-bold text-white">
                  Empower your business with our employee creation!
                  </h3>
                </div>
              </div>
            </div>
    
            <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
              <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                <h2 className="text-3xl font-bold mb-2.5  dark:text-white sm:text-4xl">
                  Create a Employee
                </h2>

                 <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
              <Link
                to={"/"}
                className="font-medium text-indigo-600 transition-all duration-200 mb-2 hover:text-indigo-700 hover:underline focus:text-indigo-700 flex items-center gap-3"
              >
                <FaBackward />
                Back to Admin Dashboard
              </Link>
            </p>
               
    
                 <div className="space-y-5">
     




  <div >


     <label
              htmlFor="name"
              className="text-base font-medium text-gray-900 dark:text-gray-200"
            >
              
              Employee Name
            </label>
      <input
        type="text"
        name="firstname"
        placeholder="Name"
        value={form.firstname}
        onChange={handleChange}
        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 mt-2.5 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
      />
</div>

 <div>


  <label
              htmlFor="email"
              className="text-base font-medium text-gray-900 dark:text-gray-200"
            >
              
              Employee Email
            </label>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent mt-2.5  py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
      />
 </div>


<div>
   <label
              htmlFor="password"
              className="text-base font-medium text-gray-900 dark:text-gray-200"
            >
              
              Employee Password
            </label>

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent mt-2.5 py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
      />
</div>








<div>
   <label
              htmlFor="department"
              className="text-base font-medium text-gray-900 dark:text-gray-200"
            >
              
              Employee department
            </label>

      <input
        type="text"
        name="department"
        placeholder="Employee Department"
        value={form.department}
        onChange={handleChange}
        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent mt-2.5 py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
      />
</div>


<div>
   <label
              htmlFor="role"
              className="text-base font-medium text-gray-900 dark:text-gray-200"
            >
              
              Employee Role
            </label>

      <input
        type="text"
        name="role"
        placeholder="Employee Role"
        value={form.role}
        onChange={handleChange}
        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent mt-2.5 py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
      />
</div>




      <button onClick={handleAdd}   className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500">
        Create Employee
      </button>

    
    </div>


              </div>
            </div>
          </div>
        </section>
   
  );
};

export default EmployeeManager;

