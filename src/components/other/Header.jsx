import React, { useState } from "react";
import { setLocalStorage } from "../../utils/localStorage";

const Header =(props)=>{

    // const[username , setUsername] = useState('') 
    // if(!data){
    //     setUsername('Admin')
    // }else{
    //     setUsername(data.firstName)
    // }

    const logoutUser = () => {
        localStorage.setItem('loggedInUser','')
        props.changeUser('')
        // window.location.reload()
    }

    return (
        <div className="flex items-end justify-between mb-10">
            <h1 className="text-2xl font-medium">Hello <br /> <span className="text-3xl font-semibold">username 👋</span></h1>
            <button onClick ={logoutUser} className="bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-small">Log Out</button>
        </div>
    )
}

export default Header;