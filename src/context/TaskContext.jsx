import { createContext, useContext, useState, useEffect } from "react";

const TaskContext = createContext();

export function TaskProvider({ children }) {
    
    const [tasks, setTasks] = useState(() => {
        const savedTask = JSON.parse(localStorage.getItem('tasks'));
        if(savedTask) return savedTask;
        return [];
    });

    const [dones, setDones] = useState(() => {
        const savedDones = JSON.parse(localStorage.getItem('dones'));
        if(savedDones) return savedDones;
        return [];
    })

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        localStorage.setItem('dones', JSON.stringify(dones));
    }, [dones]);

    const values = {
        tasks: tasks,
        setTasks: setTasks,
        dones: dones,
        setDones: setDones,
    };
    
    return(
        <TaskContext.Provider value={values}>
            { children }
        </TaskContext.Provider>
    );
}

export const useTask = () => useContext(TaskContext);