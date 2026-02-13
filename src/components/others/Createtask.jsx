import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Createtask = () => {

   const [userdata,setUserdata]=useContext(AuthContext)
    

  const [tasktitle, setTasktitle] = useState('')
  const [date, setDate] = useState('')
  const [assignto, setAssignto] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')


const submitHandler = (e) => {
  e.preventDefault();

  const task = {
    tasktitle,
    date,
    assignto,
    category,
    description,
    active: false,
    newtask: true,
    failed: false,
    completed: false,
  };

  
  const allEmployees = JSON.parse(localStorage.getItem("employees")) || [];

 
  const updatedEmployees = allEmployees.map((emp) => {
    if (emp.firstname === assignto) { 
      const updatedTasks = [...emp.tasks, task];
      const updatedCount = {
        ...emp.taskCount,
        newtask: (emp.taskCount.newtask || 0) + 1,
      };
      return { ...emp, tasks: updatedTasks, taskCount: updatedCount };
    }
    return emp;
  });

  localStorage.setItem("employees", JSON.stringify(updatedEmployees));


  setUserdata(updatedEmployees);


  setTasktitle("");
  setDate("");
  setAssignto("");
  setCategory("");
  setDescription("");

  alert("Task created successfully");
};

  

  
  return (
    <div>
       <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form  onSubmit={(e)=>{
              submitHandler(e)
            }} className='flex w-full flex-wrap items-start justify-between '>
                <div className='w-1/2'>
              <div>
                 <h3 className='text-sm text-gray-300 mb-0.5'>Task title</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design'
                    value={tasktitle}
                    onChange={(e)=>{
                      setTasktitle(e.target.value)
                    }}
                    
                    /></div>


                   <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                    <input type="date"
                    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' 
                    value={date}
                    onChange={(e)=>{
                      setDate(e.target.value)
                    }}/>
                    </div>
                   <div>
                     <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                    <input type="text" placeholder='Employee Name'
                    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                    value={assignto}
                    onChange={(e)=>{
                      setAssignto(e.target.value)
                    }} />
                   </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                    <input type="text" placeholder='design,dev,etc'
                    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' 
                    value={category}
                    onChange={(e)=>{
                      setCategory(e.target.value)
                    }}/>
                    </div>

                    
                  </div>
               
                    <div className='w-2/5 flex flex-col items-start'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" cols="30" rows="10"
                    value={description}
                    onChange={(e)=>{
                      setDescription(e.target.value)
                    }}
                    
                    ></textarea>
                     <button className='bg-emerald-500 hover:bg-emerald-700 px-5 rounded text-md mt-6 w-full' >create task</button>
                    </div>
                   
                       
                   
                    
                
            </form>
         </div>
      
    </div>
  )
}

export default Createtask
