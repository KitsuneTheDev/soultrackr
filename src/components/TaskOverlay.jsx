import { useTask } from '../context/TaskContext.jsx';

function TaskOverlay() {
};

TaskOverlay.Weekly = () => {
    const { tasks } = useTask();
    console.log("tasks -->", tasks);
    return(
        <div className="task-overlay-container absolute z-50 bg-amber-400/20 h-full w-[100%] grid grid-cols-7 grid-rows-288 left-0">
            {[...Array(2016)].map((_, index) => {
                return(
                    <div
                    key={index}
                    className="col-span-1 row-span-1 w-full"></div>
                );
            })}
        </div>
    );
};

TaskOverlay.Daily = () => {
    return null;
};

export default TaskOverlay;