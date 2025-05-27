import dayjs from "dayjs";

function Task() {};

Task.Weekly = ({ offsetIndex ,task }) => {

    const taskColumnStart = dayjs(task.start).day() + 1;
    const taskRowStart = (dayjs(task.start).hour() * 12 + 1) + Math.floor(dayjs(task.start).minute() / 5);
    console.log("offset index ------------->", offsetIndex);
    console.log("timediff ----------------->", dayjs(task.end).diff(dayjs(task.start), 'minute'))
    const taskRowSpan = Math.ceil((dayjs(task.end).diff(dayjs(task.start), 'minute')) / 5);
    console.log("task row start ----------->", taskRowStart);
    console.log("task row span ------------>", taskRowSpan);
    const taskWidth = 14.33 - (offsetIndex*2);
    const style = {
        width: `${taskWidth}%`,
        gridRowStart: `${taskRowStart}`,
        height: `${(5 / 12 * taskRowSpan).toFixed(2)}rem`,
        left: `${offsetIndex*2 + 100/7*taskColumnStart}%`
        }

    console.log("task in task component ----------->", task);

    return(
        <div
        className="absolute bg-day-accent h-20 z-70 dark:bg-night-accent pointer-events-auto rounded-xl border-[1px] border-day-border dark:border-dark-border text-sm text-center hover:cursor-default" style={style}
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