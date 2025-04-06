import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {

    const [userData,setUserData] = useContext(AuthContext)
    // console.log(authData.employees)
    return (


        <div id="AllTask" className="bg-[#1c1c1c] p-5 rounded mt-5">{/*  if the contents go beyond the size of 40 then that is converted into a scrollable format. */}
            <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
                <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
                <h3 className="text-lg font-medium w-1/5">New Task</h3>
                <h5 className="text-lg font-medium w-1/5">Active Task</h5>
                <h5 className="text-lg font-medium w-1/5">Completed</h5>
                <h5 className="text-lg font-medium w-1/5">Failed</h5>
            </div>
            <div className="">
            {userData.map(function (elem , idx) {
                return (
            <div  key = {idx} className="border-2 border-gray-50 mb-2 py-2 px-4 flex justify-between rounded">
                <h2 className="w-1/5">{elem.firstName}</h2>
                <h3 className="w-1/5 text-blue-600">{elem.taskNumbers.newTask}</h3>
                <h5 className="w-1/5 text-lg font-medium text-yellow-600">{elem.taskNumbers.active}</h5>
                <h5 className="w-1/5 text-lg font-medium text-green-600">{elem.taskNumbers.completed}</h5>
                <h5 className="w-1/5 text-lg font-medium text-red-600">{elem.taskNumbers.failed}</h5>
            </div>
            )
            })}
            </div>
            
        </div>
    )
}

export default AllTask;