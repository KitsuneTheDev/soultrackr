import { createContext, useContext, useState, useEffect } from "react";
import dayjs from "dayjs";

const TaskContext = createContext();

export function TaskProvider({ children }) {
    
    const [tasks, setTasks] = useState(() => {
        const theDate = dayjs();
        const savedTask = JSON.parse(localStorage.getItem('tasks'));
        if(savedTask) return savedTask;
        return [{
            taskName: "demo1",
            finishDate: theDate.add(1, 'hour'),
            startDate: theDate.format('YYYY-MM-DD HH:mm'),
        },
        {
            taskName: "demo2",
            finishDate: theDate.add(47, 'minute'),
            startDate: theDate.format('YYYY-MM-DD HH:mm'),
        },
        {
            taskName: "demo3",
            finishDate: theDate.add(2, 'day'),
            startDate: theDate.format('YYYY-MM-DD HH:mm'),
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