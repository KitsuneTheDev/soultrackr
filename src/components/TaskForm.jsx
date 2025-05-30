import { useState } from "react";

function TaskForm() {};

TaskForm.Event = () => {
    return(
        <form action="#"
        className="add-event-form flex">
            <input type="text"
            placeholder="Title"
            className="user-event-title-input" />
            <input type="date"
            className="user-event-date-input" />
            <input type="range"
            className="user-event-focus-input"
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
            className="user-task-title-input w-[80%]" />
            <input type="date"
            className="user-task-start-input w-[80%]" />
            <input type="date"
            className="user-task-end-date w-[80%]" />
            <input type="range"
            className="user-task-focus-input w-[80%]"
            min={1}
            max={5}
            step={1}
            defaultValue={1} />
        </form>
    );
}

export default TaskForm;