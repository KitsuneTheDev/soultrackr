import { useModal } from '../context/ModalContext.jsx';

export default function Modal() {

    const { isOpen, closeModal } = useModal();

    if(!isOpen) return null;

    if(isOpen) {
        return(
            <div className='fixed z-50 rounded-2xl w-[60%] h-[70%] bg-day-surface dark:bg-night-surface top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ' ref={modalRef}>
                <div className='close-button-container w-fit h-fit fixed right-[1%] top-[1%] '>
                    <button className='font-bold w-[32px] h-[32px] rounded-full hover:cursor-pointer bg-day-bg dark:bg-night-bg ' onClick={closeModal} >X</button>
                </div>
                <div className='modal-main-container fixed top-[32px] w-full h-full'>
                    <div className='modal-main-content-container w-full h-full flex items-center justify-center'>
                        <h2>DEMO</h2>
                    </div>
                </div>
            </div>
        );
    }
}