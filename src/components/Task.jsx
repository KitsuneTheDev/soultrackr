import dayjs from "dayjs";

function Task() {};

Task.Weekly = () => {

    const style = calculateTaskPosition();

    calculateTaskPosition();

    return(
        <div
        className="h-full w-full bg-day-accent z-50 dark:bg-night-accent"
        style={{
            gridColumnStart: style.gridColumnStart,
            gridRowStart: style.gridRowStart,
            gridColumnEnd: style.gridColumnEnd,
            gridRowEnd: style.gridRowEnd,
        }} >
            {task.taskName}
        </div>
    );
}

Task.Daily = () => {
    return(
        <div>Demo Daily</div>
    );
}

export default Task;