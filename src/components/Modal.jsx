import { useModal } from '../context/ModalContext.jsx';

export default function Modal() {

    const { isOpen, closeModal } = useModal();

    function handleTaskSubmit() {
        return null;
    }

    if(!isOpen) return null;

    if(isOpen) {
        return(
            <div className='fixed z-50 rounded-2xl w-[50%] h-[80%] bg-day-surface dark:bg-night-surface top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 '>
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
                                    className='text-center flex justify-center items-center mb-4'>Task Name</label>
                                    <input
                                    required
                                    type='text'
                                    name="taskName"
                                    id="taskName"
                                    placeholder='Task Name Here...'
                                    className={`text-center w-full flex justify-center items-center border-1 border-day-border dark:border-night-border rounded-2xl h-10`} />
                                </div>
                                <div className='user-input-description w-full'>
                                    <label htmlFor="description"
                                    className='text-center flex justify-center items-center mb-4 mt-2'>Description</label>
                                    <input
                                    required
                                    type="text"
                                    name='description'
                                    id='description'
                                    placeholder='Description'
                                    className={`text-center w-full h-10 rounded-2xl flex justify-center items-center border-1 border-day-border dark:border-night-border`} />
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
                                    className='w-[50%] fixed left-1/2 -translate-x-1/2 ' />
                                </div>
                                <div className='user-input-due w-full'>
                                    <label htmlFor="dueDate"
                                    className='text-center fixed left-1/2 -translate-x-1/2 translate-y-6'>Due Date</label>
                                    <label htmlFor="isDate"
                                    className='text-center fixed left-1/2 -translate-x-45 translate-y-17'>Activate</label>
                                    <input
                                    type="checkbox"
                                    id='isDate'
                                    checked
                                    className='fixed left-1/2 -translate-x-30 h-5 aspect-square translate-y-17.5 rounded-full ' />
                                    <input 
                                    type="date"
                                    name="dueDate"
                                    id='dueDate'
                                    min={"01.01.2025"}
                                    max={'01.01.2030'}
                                    className='fixed left-1/2 -translate-x-1/2 translate-y-15 border-1 border-day-border dark:border-night-border w-40 h-10 rounded-2xl flex justify-center items-center'
                                    /*add Default value*/ />
                                </div>
                                <div className='user-input-mail w-full'>
                                    <label htmlFor="mail"
                                    className='fixed left-1/2 -translate-x-1/2 translate-y-29'>E-Mail</label>
                                    <input
                                    type="email"
                                    name="mail"
                                    id="mail"
                                    placeholder='example@email.com'
                                    className='flex items-center justify-center translate-y-38 w-full h-10 rounded-2xl border-1 border-day-border dark:border-night-border text-center' />
                                </div>
                                <div className='user-input-phone w-full'>
                                    <label htmlFor="phone"
                                    className='flex justify-center items-center text-center translate-y-42'>Phone Number</label>
                                    <input
                                    type="tel"
                                    name='phone'
                                    id='phone'
                                    placeholder='Phone Number'
                                    className='fixed left-1/2 -translate-x-1/2 w-[94%] h-10 text-center translate-y-47 border-1 border-day-border dark:border-night-border rounded-2xl' />
                                </div>
                                <div className='user-input-misc'>
                                    <label htmlFor="misc"
                                    className='flex items-center justify-center translate-y-61'>Additional Info</label>
                                    <textarea
                                    type="text"
                                    name='misc'
                                    id='misc'
                                    placeholder='Additional info'
                                    className='fixed text-center left-1/2 -translate-x-1/2 translate-y-65 w-[94%] border-1 border-day-border dark:border-night-border rounded-2xl' ></textarea>
                                </div>
                            </div>
                            <div className='form-submit-area'>
                                <label htmlFor="taskSubmit"
                                className='fixed left-[3%] bottom-[3%] text-center bg-day-bg dark:bg-night-bg border-1 border-day-border dark:border-night-border w-50 h-10 rounded-2xl flex items-center justify-center'>Save</label>
                                <input
                                type="submit"
                                id='taskSubmit'
                                className='hidden' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}