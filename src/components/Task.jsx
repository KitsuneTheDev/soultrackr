import dayjs from "dayjs";

function Task() {};

Task.Weekly = () => {

    return(
        <div
        className="h-20 w-20 bg-day-accent z-50 dark:bg-night-accent"
         >
            
        </div>
    );
}

Task.Daily = () => {
    return(
        <div>Demo Daily</div>
    );
}

export default Task;