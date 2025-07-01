import React from 'react'
import Header from '../others/Headers'
import Createtask from '../others/Createtask'
import Alltask from '../others/Alltask'
import { useNavigate } from "react-router-dom";
import AddEmployee from '../../NewEmployee/AddEmployee'
import EmployeeManager from '../../NewEmployee/AddEmployee';

const AdminDashboard = (props) => {
  const navigate = useNavigate();
  return (
    <div className=' hide-scrollbar overflow-y-auto h-screen w-full p-7'>
         <Header changeUser={props.changeUser} data={props.data}/>
        <Createtask/>
        <Alltask/>
        
    </div>
  )
}

export default AdminDashboard
