import { createContext, useContext, useState, useEffect } from "react";

const TaskContext = createContext();

export function TaskProvider({ children }) {
    
    const [tasks, setTasks] = useState(() => localStorage.getItem('tasks') ?? null);

    const values = {
        tasks: tasks,
        setTasks: setTasks,
    }

    useEffect(() => {
        localStorage.setItem('tasks', tasks);
    }, [tasks])
    
    return(
        <TaskContext.Provider value={values}>
            { children }
        </TaskContext.Provider>
    );
}

const useTask = () => useContext(TaskContext);