import { useState } from "react";

function TaskForm() {};

TaskForm.Event = () => {
    return(
        <form action="#"
        className="add-event-form flex flex-col justify-center items-center gap-10 mt-10">
            <input type="text"
            placeholder="Title"
            className="user-event-title-input border-1 border-dayborder dark:border-night-border" />
            <input type="date"
            className="user-event-date-input border-1 border-dayborder dark:border-night-border" />
            <input type="range"
            className="user-event-focus-input border-1 border-dayborder dark:border-night-border"
            min={1}
            max={5}
            step={1}
            defaultValue={1} />
        </form>
    );
}

TaskForm.Task = () => {
    return (
        <form action="#"
        className="add-task-form flex flex-col justify-center items-center gap-10 mt-10">
            <input type="text"
            placeholder="Title"
            className="user-task-title-input w-[80%] border-1 border-day-border dark:border-night-border rounded-xl h-10 text-center" />
            <input type="date"
            className="user-task-start-date w-[80%] border-1 border-day-border dark:border-night-border rounded-xl h-10 text-center" />
            <input type="date"
            className="user-task-end-date w-[80%] border-1 border-day-border dark:border-night-border rounded-xl h-10 text-center" />
            <input type="range"
            className="user-task-focus-input w-[80%] border-1 border-day-border dark:border-night-border rounded-xl h-10 text-center"
            min={1}
            max={5}
            step={1}
            defaultValue={1} />
        </form>
    );
}

export default TaskForm;