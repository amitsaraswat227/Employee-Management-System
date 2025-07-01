import React from 'react'

import TasklistNumber from '../others/TasklistNumber'
import Tasklist from '../Tasklist/Tasklist'
import Header from '../others/Headers'

const EmployeeDashboard = (props) => {
  console.log("Employee data object:", JSON.stringify(props.data, null, 2));

  return (
    <div className='p-10 h-screen bg-[#1c1c1c]'>
    
      <Header changeUser={props.changeUser} data={props.data} />
      <TasklistNumber data={props.data}/>
      <Tasklist data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard;
