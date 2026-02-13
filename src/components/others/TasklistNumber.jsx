import React from 'react';

const TasklistNumber = ({ data }) => {
  return (
    <div className="flex overflow-x-auto gap-5 mt-10 px-2 hide-scrollbar">
    
      <div className="min-w-[250px] rounded-xl py-6 px-6 bg-red-400 text-white shadow-md">
        <h2 className="text-3xl font-semibold">{data.taskCount.active}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>

     
      <div className="min-w-[250px] rounded-xl py-6 px-6 bg-blue-400 text-white shadow-md">
        <h2 className="text-3xl font-semibold">{data.taskCount.newtask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>

    
      <div className="min-w-[250px] rounded-xl py-6 px-6 bg-green-400 text-white shadow-md">
        <h2 className="text-3xl font-semibold">{data.taskCount.completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>

      
      <div className="min-w-[250px] rounded-xl py-6 px-6 bg-yellow-400 text-white shadow-md">
        <h2 className="text-3xl font-semibold">{data.taskCount.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TasklistNumber;
