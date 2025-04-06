import React from "react";
import Header from "../other/header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard =(props)=>{
    console.log(props.data);
    return (
        <div className="p-10 bg-[#1c1c1c] h-screen">
            <Header changeUser ={props.changeUser} data = {props.data}/>
            <TaskListNumbers data = {props.data} />
            <TaskList data = {props.data} />
        </div>
    )
}

export default EmployeeDashboard;