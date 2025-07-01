import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import {AuthContext} from './context/AuthProvider'
import { data } from 'framer-motion/client'
import { Route, Routes } from 'react-router-dom'
import EmployeeManager from './NewEmployee/AddEmployee'
import { Navigate } from 'react-router-dom'
import EmployeeList from './NewEmployee/EmployeeList'


// import { getLocalstorage, setLocalstorage } from './utils/LocalStorage'


const App = () => {
 
const [user,setUser]=useState(null);
const [loggedInUserData, setloggedInUserData] = useState(null)
console.log(loggedInUserData)
const [userdata,setUserdata]=useContext(AuthContext);
useEffect(()=>{


  const loggedinUser=localStorage.getItem('loggedinUser')
  if(loggedinUser){
    const userData=JSON.parse(loggedinUser)
    setUser(userData.role)
    setloggedInUserData(userData.data);

  }
 

 },[])

const handlelogin=(email,password)=>{
const adminUser=email == 'admin@example.com' && password == '12345'
if(adminUser){
  setUser('admin')
  // localStorage.setItem('loggedinUser',JSON.stringify({firstname:'admin',role:'admin'}))
   localStorage.setItem("loggedinUser", JSON.stringify({  role: "admin" }));
}
else if(userdata){
const employee=userdata.find((e)=>email==e.email && password==e.password)
  if(employee){
setUser('employee')
setloggedInUserData(employee);
// localStorage.setItem('loggedinUser',JSON.stringify({role:'employee',data:employee}))
 localStorage.setItem("loggedinUser", JSON.stringify({ role: "employee" , data:employee}));
  }

}
else{
alert('Invalid Credentials');
}
}



  return (
  <>
  <div>
     {!user?<Login handlelogin={handlelogin}/>:''}
    {/* {user=='admin'?<AdminDashboard  changeUser={setUser}/>:(user=='employee'?<EmployeeDashboard  changeUser={setUser} data={loggedInUserData}/>:null)} */}
    {/* <Login/> */}
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
   

{/*    
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/add-employee" element={<AddEmployee />} />
      </Routes> */}

    
     {/* <Routes>
  
  <Route path="/add-employee" element={<EmployeeManager />} />
</Routes> */}
     
      <Routes>
      {/* Admin Routes */}
      {user === 'admin' && (
        <>
          <Route path="/" element={<AdminDashboard changeUser={setUser} />} />
          <Route path="/add-employee" element={<EmployeeManager />} />
          <Route path="/employee-list" element={<EmployeeList/>} />

          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}

      {/* Employee Routes */}
      {user === 'employee' && (
        <>
          <Route path="/" element={<EmployeeDashboard changeUser={setUser} data={loggedInUserData} />} />
        <Route path="*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>

  </div>
  </>
      )
    }

export default App

