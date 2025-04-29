import { useModal } from '../context/ModalContext.jsx';

function AddTaskButton() {};

AddTaskButton.Default = () => {

    const { openModal } = useModal();

    return(
        <div className="add-button-default h-fit w-fit absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <button className="w-[320px] h-[64px] rounded-4xl border-1 border-day-border dark:border-night-border bg-day-accent dark:bg-night-surface text-day-text dark:text-night-text hover:cursor-pointer" onClick={openModal}>Add Task</button>
        </div>
    );
}

AddTaskButton.Floating = () => {

    const { openModal } = useModal();

    return(
        <div className="add-button-floating w-[64px] h-[64px] fixed bottom-[5%] right-[2%] m-0 p-0">
            <button className="text-3xl rounded-full border-1 border-day-border dark:border-night-border flex justify-center items-center align-middle leading-none h-full w-full bg-day-accent dark:bg-night-surface hover:cursor-pointer " onClick={openModal}>&#x271A;</button>
        </div>
    );
}

export default AddTaskButton;