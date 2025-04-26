import { createContext, useContext, useState, useEffect } from "react";

const TaskContext = createContext();

export function TaskProvider({ children }) {
    
    const [tasks, setTasks] = useState(() => {
        const savedTask = [...JSON.parse(localStorage.getItem('tasks'))];
        if(savedTask) return savedTask;
        return [];
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const values = {
        tasks: tasks,
        setTasks: setTasks,
    };
    
    return(
        <TaskContext.Provider value={values}>
            { children }
        </TaskContext.Provider>
    );
}

export const useTask = () => useContext(TaskContext);