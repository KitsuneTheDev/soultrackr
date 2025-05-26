import dayjs from "dayjs";

function Task() {};

Task.Weekly = ({ offsetIndex ,task }) => {

    const taskColumnStart = dayjs(task.start).day();
    const taskRowStart = (dayjs(task.start).hour() * 12 + 1) + Math.floor(dayjs(task.start).minute() / 5);
    console.log("ofset index ------------>", offsetIndex);
    const style = {
        gridColumnStart: taskColumnStart,
        gridRowStart: taskRowStart,
        left: `${offsetIndex*5}%`
        }

    console.log("task in task component ----------->", task);

    return(
        <div
        className="h-20 w-40 absolute bg-day-accent z-50 dark:bg-night-accent rounded-xl border-[1px] border-day-border dark:border-dark-border text-sm text-center hover:cursor-default" style={style}
         >
            { task.title }
        </div>
    );
}

Task.Daily = () => {
    return(
        <div>Demo Daily</div>
    );
}

export default Task;