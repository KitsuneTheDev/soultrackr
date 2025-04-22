import { useModal } from '../context/ModalContext.jsx';

export default function Modal() {

    const { isOpen, closeModal } = useModal();

    function handleTaskSubmit() {
        return null;
    }

    if(!isOpen) return null;

    if(isOpen) {
        return(
            <div className='fixed z-50 rounded-2xl w-[50%] h-[70%] bg-day-surface dark:bg-night-surface top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 '>
                <div className='close-button-container w-fit h-fit fixed right-[1%] top-[1%] z-60'>
                    <button className='font-bold w-[32px] h-[32px] rounded-full hover:cursor-pointer bg-day-bg dark:bg-night-bg ' onClick={closeModal} >X</button>
                </div>
                <div className='modal-main-container fixed w-full h-full z-0'>
                    <div className='modal-main-content-container w-full h-full flex items-center justify-center'>
                        <form action="#" onSubmit={handleTaskSubmit}
                        className={`w-full h-full fixed p-[3%]`}>
                            <div className='user-input-area w-full'>
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
                                    className={`text-center w-full flex justify-center items-center border-1 border-day-border dark:border-dark-border rounded-2xl h-10`} />
                                </div>
                                <div className='user-input-description'>
                                    <label htmlFor="description">Description</label>
                                    <input
                                    required
                                    type="text"
                                    name='description'
                                    id='description'
                                    placeholder='Description'
                                    className={`text-center`} />
                                </div>
                                <div className='user-input-focus'>
                                    <label htmlFor="focusLevel">Focus Level</label>
                                    <input
                                    type='range'
                                    name='focusLevel'
                                    id='focusLevel'
                                    min={"1"}
                                    max={"5"}
                                    step={"1"}
                                    defaultValue={"1"} />
                                </div>
                                <div className='user-input-due'>
                                    <label htmlFor="dueDate">Due Date</label>
                                    <label htmlFor="isDate"></label>
                                    <input
                                    type="checkbox"
                                    id='isDate'
                                    checked />
                                    <input 
                                    type="date"
                                    name="dueDate"
                                    id='dueDate'
                                    min={"01.01.2025"}
                                    max={'01.01.2030'}
                                    /*add Default value*/ />
                                </div>
                                <div className='user-input-mail'>
                                    <label htmlFor="mail">E-Mail</label>
                                    <input
                                    type="email"
                                    name="mail"
                                    id="mail"
                                    placeholder='example@email.com' />
                                </div>
                                <div className='user-input-phone'>
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                    type="tel"
                                    name='phone'
                                    id='phone'
                                    placeholder='Phone Number' />
                                </div>
                                <div className='user-input-misc'>
                                    <label htmlFor="misc">Additional Info</label>
                                    <textarea
                                    type="text"
                                    name='misc'
                                    id='misc'
                                    placeholder='Additional info' ></textarea>
                                </div>
                            </div>
                            <div className='form-submit-area'>
                                <label htmlFor="taskSubmit">Save</label>
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