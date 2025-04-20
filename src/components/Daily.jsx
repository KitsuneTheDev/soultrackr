import { useState } from "react";
import Task from './Task.jsx';
import AddTaskButton from './AddButton.jsx';

export default function Daily() {

    const [tasks, setTasks] = useState();

    if(tasks) {
        return(
            <div className={`w-full h-full grid gap-2 lg:grid-cols-6 md:grid-cols-4 max-sm:grid-cols-2`}>
                {tasks?.map(task => {
                    return(
                        <Task task={task} />
                    ); 
                })}
            </div>
        );
    } 
    return (
        <AddTaskButton.Default />
    );
}