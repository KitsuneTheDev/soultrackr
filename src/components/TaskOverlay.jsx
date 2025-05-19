import { useTask } from '../context/TaskContext.jsx';
import Task from './Task.jsx';

function TaskOverlay() {
};

TaskOverlay.Weekly = () => {
    const { tasks } = useTask();
    console.log("tasks -->", tasks);
    return(
        <div className="task-overlay-container absolute z-50 bg-amber-400/20 h-full w-[100%] grid grid-cols-7 grid-rows-288 left-0">
            {tasks.map((task, index) => {
                return <Task.Weekly key={index} task={task} />
            })}
        </div>
    );
};

TaskOverlay.Daily = () => {
    return null;
};

export default TaskOverlay;