import dayjs from 'dayjs';
import { useTask } from '../context/TaskContext.jsx';
import Task from './Task.jsx';

function TaskOverlay() {
};

TaskOverlay.Weekly = () => {
    const { overlaps } = useTask();
    const currentDate = dayjs(); 
    
    return(
        <div className="task-overlay-container absolute z-50 bg-amber-400/20 h-full w-[100%] grid grid-cols-7 grid-rows-288 left-0">
            {
                Object.entries(overlaps).forEach(([groupDate, group]) => {
                    console.log("groupDate --->", groupDate, "Group --->", group);
                    return;
                })
            }
        </div>
    );
};

TaskOverlay.Daily = () => {
    return null;
};

export default TaskOverlay;