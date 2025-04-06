import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";

const TaskList = ({data}) => {
    console.log(data)
    return (
        <div  id ='tasklist' className="overflow-x-auto flex items-center justify-start gap-5 h-[55%] flex-nowrap py-5 w-full  mt-10">
{/* //mt is margin top */}
{/* <AcceptTask />
<NewTask />
<CompleteTask />
<FailedTask /> */}
{data.tasks.map((elem, idx) => {
    
    if(elem.active){
        return <AcceptTask key = {idx} data = {elem} />
    }

if(elem.newTask){
    return <NewTask key = {idx} data = {elem} />
}

    if(elem.completed){
        return <CompleteTask key = {idx} data = {elem} />
    }

    if(elem.failed){
        return <FailedTask key = {idx} data = {elem} />
    }
})}


</div>
    )
}

export default TaskList;