import { useState } from "react";
import Task from './Task.jsx';
import AddTaskButton from './AddButton.jsx';
import { useTask } from '../context/TaskContext.jsx';

export default function Daily() {

    const { tasks } = useTask();
    console.log("tasks -->", tasks)

    if(tasks.length !== 0) {
        return(
            <div className={`w-full h-full min-h-full grid gap-2 lg:grid-cols-6 md:grid-cols-4 max-sm:grid-cols-2`}>
                {tasks?.map((task, index) => {
                    return(
                        <Task.Daily key={index} task={task} />
                    ); 
                })}
            </div>
        );
    } 
    return (
        <AddTaskButton.Default />
    );
}