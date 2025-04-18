import { useState } from "react";

export default function Daily() {

    const [tasks, setTasks] = useState([{demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"},
        {demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"},
        {demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"},{demo: "demo"}]);

    return(
        <div className={`w-full h-full grid gap-2 grid-cols-6 md:grid-cols-4 max-sm:grid-cols-2`}>
            {tasks.map(task => {
                return(
                    <div className={`col-span-1 row-span-1 h-70 text-center flex justify-center bg-day-surface dark:bg-night-surface gap-5 rounded-2xl items-center`}><h2>{task.demo}</h2></div>
                ); 
            })}
        </div>
    );
}