import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const Tasklist = ({ data }) => {
  console.log("Received data in Tasklist:", data);
  console.log("Tasks array:", data?.tasks);

  return (
    <div className="w-full mt-10 overflow-x-auto hide-scrollbar">
      <div className="flex flex-nowrap sm:flex-wrap gap-4 sm:gap-6 py-4 px-2 sm:px-4">
        {data?.tasks?.map((elem, id) => {
          if (elem.active) {
            return <AcceptTask key={id} data={elem} />;
          }
          if (elem.completed) {
            return <CompleteTask key={id} data={elem} />;
          }
          if (elem.newtask) {
            return <NewTask key={id} data={elem} />;
          }
          if (elem.failed) {
            return <FailedTask key={id} data={elem} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Tasklist;
