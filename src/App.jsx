import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import TaskListNumbers from "./components/other/TaskListNumbers";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";
import AuthProvider from "./context/AuthProvider";
const App = () =>{

    // useEffect(() => {   //this helps to run a function other than the main stack.

    //     // setLocalStorage()
    //     getLocalStorage();
    // },) 

    const[user,setUser] = useState('');
    const[loggedInUserData, setLoggedInUserData] = useState(null);
    const [userData , setUserData] = useContext(AuthContext)  //we can use the data from the AuthContext at any place using this way.
    // console.log(authData.employees)

    // useEffect(()=>{
    //     if(authData){
    //         const loggedInUser = localStorage.getItem("loggedInUser")
    //         if(loggedInUser){
    //             setUser(loggedInUser.role)
    //         }
    //     }
    
    // },[authData])

    useEffect(() => {
        const loggedInUser = localStorage.getItem('loggedInUser')

        if(loggedInUser){
            
            const userData = JSON.parse(loggedInUser)
            setUser(userData.role)
            setLoggedInUserData(userData.data)

            // console.log(userData)
            // setUser(userData.role)
            // setLoggedInUserData
        }
    },[])


    const handleLogin = (email , password) => {
        if(email == 'admin@me.com' && password == '123'){
            // console.log("This is Admin"); 
            setUser('admin')
            localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
        }else if(userData){

            const employee = userData.find((e) =>email == e.email && password == e.password)
        if(employee){
            
            setUser('employee')
            setLoggedInUserData(employee)
            localStorage.setItem('loggedInUser',JSON.stringify({role: 'employee' , data : employee}))
        }
            // console.log("This is User")
        }else{
            alert("Invalid Credentials")
        }
    }

    

    
    return (
        <>
        {!user ? <Login handleLogin = {handleLogin} /> : ''}
        {user == 'admin' ? <AdminDashboard  changeUser = {setUser} /> : user == 'employee' ?<EmployeeDashboard data ={loggedInUserData} changeUser = {setUser} /> : null}
        {/* <EmployeeDashboard /> */}
        {/* <AdminDashboard /> */}
        
        
        </>   //these are called fragments.
    )
}

export default App;