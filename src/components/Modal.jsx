import { useEffect, useRef, useState } from "react";
import { useModal } from '../context/ModalContext.jsx';
import { useTask } from '../context/TaskContext.jsx';

export default function Modal() {

    const { setTasks }  = useTask();
    const { isOpen, closeModal } = useModal();
    const modalRef = useRef(null);
    const [userInputs, setUserInputs] = useState({focusLevel: "1"});

    useEffect(() => {
        console.log("user inputs --> ", userInputs);
    }, [userInputs]);

    function handleTaskChange(event) {
        setUserInputs((prevInputs) => {
            return {...prevInputs, taskname:event.target.value}
        });
    }

    function handleDescriptionChange(event) {
        setUserInputs((prevInputs) => {
            return {...prevInputs, description:event.target.value}
        });
    }

    function handleFocusChange(event) {
        setUserInputs((prevInputs) => {
            return {...prevInputs, focusLevel:event.target.value}
        });
    }

    function handleDateChange(event) {
        setUserInputs((prevInputs) => {
            return {...prevInputs, dueDate:event.target.value}
        });
    }

    function handleMailChange(event) {
        setUserInputs((prevInputs) => {
            return {...prevInputs, mail:event.target.value}
        });
    }

    function handlePhoneChange(event) {
        setUserInputs((prevInputs) => {
            return {...prevInputs, phone:event.target.value}
        });
    }

    function handleMiscChange(event) {
        setUserInputs((prevInputs) => {
            return {...prevInputs, misc:event.target.value}
        });
    }

    function handleTaskSubmit(event) {
        event.preventDefault();

        setTasks(prevTasks => {
            return [...prevTasks, {...userInputs, id:Math.floor(Date.now()/1_000)}]
        });
        setUserInputs[{focusLevel: "1"}];
        closeModal();
    }


    useEffect(() => {
        const handleClickOutside = (event) => {
            console.log(modalRef);
            if(modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [closeModal])

    if(!isOpen) return null;

    if(isOpen) {
        return(
            <div className='fixed z-50 rounded-2xl lg:mt-6 xl:mt-5.5 lg:w-[98%] xl:w-[55%] lg:h-[90%] xl:h-[85%] mt-0 w-[98%] h-[98%] bg-day-surface dark:bg-night-surface top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ' ref={modalRef}>
                <div className='close-button-container w-fit h-fit fixed right-[1%] top-[1%] z-60'>
                    <button className='font-bold w-[32px] h-[32px] rounded-full hover:cursor-pointer bg-day-bg dark:bg-night-bg ' onClick={closeModal} >X</button>
                </div>
                <div className='modal-main-container fixed w-full h-full z-0 text-day-text dark:text-night-text'>
                    <div className='modal-main-content-container w-full h-full flex items-center justify-center'>
                        <form action="#" onSubmit={handleTaskSubmit}
                        className={`w-full h-full fixed p-[3%]`}>
                            <div className='user-input-area w-full '>
                                <div className='user-input-task w-full'>
                                    <label 
                                    htmlFor="taskName"
                                    className='text-center flex justify-center items-center mb-4'>Task Name *</label>
                                    <input
                                    required
                                    type='text'
                                    name="taskName"
                                    id="taskName"
                                    placeholder='Task Name Here...'
                                    className={`text-center w-full flex justify-center items-center border-1 border-day-border dark:border-night-border rounded-2xl h-10`}
                                    onChange={handleTaskChange} />
                                </div>
                                <div className='user-input-description w-full'>
                                    <label htmlFor="description"
                                    className='text-center flex justify-center items-center mb-4 mt-2'>Description *</label>
                                    <input
                                    required
                                    type="text"
                                    name='description'
                                    id='description'
                                    placeholder='Description'
                                    className={`text-center w-full h-10 rounded-2xl flex justify-center items-center border-1 border-day-border dark:border-night-border`}
                                    onChange={handleDescriptionChange} />
                                </div>
                                <div className='user-input-focus w-full'>
                                    <label htmlFor="focusLevel"
                                    className='text-center flex justify-center items-center mb-4 mt-2'>Focus Level</label>
                                    <input
                                    type='range'
                                    name='focusLevel'
                                    id='focusLevel'
                                    min={"1"}
                                    max={"5"}
                                    step={"1"}
                                    defaultValue={"1"}
                                    className='w-[50%] fixed left-1/2 -translate-x-1/2 '
                                    onChange={handleFocusChange} />
                                </div>
                                <div className='user-input-due w-full'>
                                    <label htmlFor="dueDate"
                                    className='text-center fixed left-1/2 -translate-x-1/2 translate-y-6'>Due Date</label>
                                    <label htmlFor="isDate"
                                    className='text-center fixed left-1/2 -translate-x-45 translate-y-17'>Activate</label>
                                    <input
                                    type="checkbox"
                                    id='isDate'                                
                                    className='fixed left-1/2 -translate-x-30 h-5 aspect-square translate-y-17.5 ' />
                                    <input 
                                    type="date"
                                    name="dueDate"
                                    id='dueDate'
                                    min={"01.01.2025"}
                                    max={'01.01.2030'}
                                    className='fixed left-1/2 -translate-x-1/2 translate-y-15 border-1 border-day-border dark:border-night-border w-40 h-10 rounded-2xl flex justify-center items-center'
                                    onChange={handleDateChange} />
                                </div>
                                <div className='user-input-mail w-full'>
                                    <label htmlFor="mail"
                                    className='fixed left-1/2 -translate-x-1/2 translate-y-29'>E-Mail</label>
                                    <input
                                    type="email"
                                    name="mail"
                                    id="mail"
                                    placeholder='example@email.com'
                                    className='flex items-center justify-center translate-y-38 w-full h-10 rounded-2xl border-1 border-day-border dark:border-night-border text-center'
                                    onChange={handleMailChange} />
                                </div>
                                <div className='user-input-phone w-full'>
                                    <label htmlFor="phone"
                                    className='flex justify-center items-center text-center translate-y-42'>Phone Number</label>
                                    <input
                                    type="tel"
                                    name='phone'
                                    id='phone'
                                    placeholder='Phone Number'
                                    className='fixed left-1/2 -translate-x-1/2 w-[94%] h-10 text-center translate-y-47 border-1 border-day-border dark:border-night-border rounded-2xl'
                                    onChange={handlePhoneChange} />
                                </div>
                                <div className='user-input-misc'>
                                    <label htmlFor="misc"
                                    className='flex items-center justify-center translate-y-61'>Additional Info</label>
                                    <textarea
                                    type="text"
                                    name='misc'
                                    id='misc'
                                    placeholder='Additional info'
                                    className='fixed text-center left-1/2 -translate-x-1/2 translate-y-65 h-15 w-[94%] border-1 border-day-border dark:border-night-border rounded-2xl resize-y max-h-25 min-h-15'
                                    onChange={handleMiscChange} ></textarea>
                                </div>
                            </div>
                            <div className='form-submit-area'>
                                <label htmlFor="taskSubmit"
                                className='fixed left-1/2 md:left-1/2 lg:left-[3%] bottom-[0.5%] md:bottom-[0.5%] lg:bottom-[3%] lg:translate-x-0 md:-translate-x-1/2 -translate-x-1/2 text-center bg-day-bg dark:bg-night-bg border-1 border-day-border dark:border-night-border w-30 lg:w-50 h-8 lg:h-10 rounded-2xl flex items-center justify-center'>Save</label>
                                <input
                                type="submit"
                                id='taskSubmit'
                                className='hidden'
                                 />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}