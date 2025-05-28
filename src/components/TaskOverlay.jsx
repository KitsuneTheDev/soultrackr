import dayjs from 'dayjs';
import { useTask } from '../context/TaskContext.jsx';
import Task from './Task.jsx';
import { useCalendar } from '../context/CalendarContext.jsx';

function TaskOverlay() {
};

TaskOverlay.Weekly = () => {
    const { overlaps } = useTask();
    const { calendarDate } = useCalendar(); 
    
    const todayIndex = dayjs(calendarDate).day();
    const startOfWeek = dayjs(calendarDate).subtract((todayIndex - 1), 'day');
    const finishOfWeek = dayjs(calendarDate).add((7 - todayIndex), 'day');

    console.log(`
        today index --------> ${todayIndex}
        start of the week --> ${startOfWeek}
        finis of the week --> ${finishOfWeek}
        `)

    return(
        <div className="task-overlay-container absolute pointer-events-none z-50 h-full w-[100%] grid grid-cols-7 grid-rows-288 left-0">
            {
                Object.entries(overlaps).map(([groupDate, group]) => {
                    if(dayjs(groupDate).isBefore(dayjs(startOfWeek)) || dayjs(groupDate).isAfter(dayjs(finishOfWeek))) return;

                    console.log("groupDate -->", groupDate);
                    console.log("group ------>", group);
                    return group.map((overlapping, index) => {
                        return overlapping.map((task, offsetIndex) => {
                            return <Task.Weekly key={`${task.id}-${groupDate}-${index}`} offsetIndex={offsetIndex} task={task} />
                        })
                    })
                })
            }
        </div>
    );
};

TaskOverlay.Daily = () => {
    return null;
};

export default TaskOverlay;