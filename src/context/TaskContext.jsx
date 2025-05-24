import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { demoTask } from '../constants/demoTask.jsx';
import dayjs from "dayjs";
import { groupTasksByDay } from "../utils/GroupTasksByDay.jsx";
import { groupOverlappingTasks } from "../utils/groupOverlappingTasks.jsx";

const TaskContext = createContext();

export function TaskProvider({ children }) {
    
    const [tasks, setTasks] = useState(() => {
        const savedTask = JSON.parse(localStorage.getItem('tasks'));
        if(savedTask) return savedTask;
        return demoTask;
    });

    const [dones, setDones] = useState(() => {
        const savedDones = JSON.parse(localStorage.getItem('dones'));
        if(savedDones) return savedDones;
        return [];
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        localStorage.setItem('dones', JSON.stringify(dones));
    }, [dones]);

    function saveTask(newTask) {
        setTasks(prev => {
            const updated = [...prev.filter(task => task.id !== newTask.id), newTask];
            return updated;
        });
    }

    const grouped = useMemo(() => {
        console.log("grouped tasks by day -->", groupTasksByDay(tasks));
        return groupTasksByDay(tasks); // [{"YYYY-MM-DD":{TASK}}]
    }, [tasks]);

    const overlaps = useMemo(() => {
        const results = {};
        for (const [day, list] of Object.entries(grouped)) {
            results[day] = groupOverlappingTasks(list);
        }
    }, [grouped]);

    const values = {
        tasks: tasks,
        setTasks: setTasks,
        dones: dones,
        setDones: setDones,
        grouped: grouped,
        overlaps: overlaps,
        saveTask: saveTask,
    };
    
    return(
        <TaskContext.Provider value={values}>
            { children }
        </TaskContext.Provider>
    );
}

export const useTask = () => useContext(TaskContext);