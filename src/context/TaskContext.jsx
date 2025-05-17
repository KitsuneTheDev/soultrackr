import { createContext, useContext, useState, useEffect } from "react";
import dayjs from "dayjs";

const TaskContext = createContext();

export function TaskProvider({ children }) {
    
    const [tasks, setTasks] = useState(() => {
        const savedTask = JSON.parse(localStorage.getItem('tasks'));
        if(savedTask) return savedTask;
        return [{
            taskName: "demo1",
            finishDate: dayjs("2025-05-17 23:49"),
            startDate: dayjs("2025-05-17 16:50"),
        },
        {
            taskName: "demo2",
            finishDate: dayjs("2025-05-18 17:50"),
            startDate: dayjs("2025-05-18 23:50"),
        },
        {
            taskName: "demo3",
            finishDate: dayjs("2025-06-17 18:00"),
            startDate: dayjs("2025-05-20 18:00"),
        }];
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