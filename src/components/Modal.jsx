import { useEffect, useRef, useState } from "react";
import { useModal } from '../context/ModalContext.jsx';
import { useTask } from '../context/TaskContext.jsx';
import TaskForm from "./TaskForm.jsx";

export default function Modal() {
    
    const { saveTask }  = useTask();
    const { isOpen, closeModal, position } = useModal();
    const [activeTab, setActiveTab] = useState(() => {
        return 'task';
    });

    console.log("activeTab --->", activeTab);

    /*
        TASK:
        {
            id: Integer
            type: "event" || "task"
            start: Date
            end: Date
            title: String
            focusLevel: Integer ([0-5])
            exp: Integer (1/focusLevel * dayjs(end).subtract(dayjs(start, 'hour')) * profileLevelCoefficient)
        }
    */

    if(!isOpen) return null;

    else return(
        <div
            className={`w-100 h-100 bg-amber-400 fixed z-100 rounded-2xl bg-day-surface dark:bg-night-surface border-1 border-day-border dark:border-night-border`}
            style={{top: `${position.top}px`, left: `${position.left}px`}}>
                <div className="modal_-header h-[10%]">
                    <div className="modal-header-elements h-[50%] relative">
                        <button 
                            className="absolute right-2 top-2 close-modal-button bg-day-caution dark:bg-night-caution w-4 h-4 flex justify-center items-center rounded-full hover:cursor-pointer"
                            onClick={closeModal}>
                            <svg className="w-2 h-2 bg-white rounded-full"></svg>
                        </button>
                    </div>
                    <div className="modal-tab-elements grid grid-cols-5 grid-rows-1">
                        <div
                            className={`row-span-1 col-span-1 flex items-center justify-center border-1 border-day-border dark:border-night-border rounded-t-2xl hover:cursor-pointer
                                        ${activeTab === "event" ? "border-b-0" : ""}`}
                            onClick={() => setActiveTab("event")}>Event</div>
                        <div
                            className={`row-span-1 col-span-1 flex items-center justify-center border-1 border-day-border dark:border-night-border rounded-t-2xl hover:cursor-pointer
                                        ${activeTab === "task" ? "border-b-0" : ""}`}
                            onClick={() => setActiveTab("task")}>Task</div>
                        <div className="row-span-1 col-span-3 flex items-center justify-center border-b-1 border-day-border dark:border-night-border rounded-t-2xl"></div>
                    </div>
                </div>
                <div className="modal-form-container h-[90%] mt-[10%]">
                    {  activeTab === "task" ? <TaskForm.Task /> : <TaskForm.Event /> }
                </div>
            </div>
    );
}