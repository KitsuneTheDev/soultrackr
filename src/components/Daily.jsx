import { useState } from "react";
import Task from './Task.jsx';

export default function Daily() {

    const [tasks, setTasks] = useState([{demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"},
        {demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"},
        {demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"}]);

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