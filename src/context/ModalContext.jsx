import { createContext, useState, useContext, Children } from "react";

const ModalContext = createContext();

export function ModalProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState(() => {
        const vpWidth = window.innerWidth;
        const vpHeight = window.innerHeight;
        const left = vpWidth * 0.5;
        const top = vpHeight * 0.5;

        return {top: top, left: left}
    });

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const values = {
        isOpen: isOpen,
        openModal: openModal,
        closeModal: closeModal,
        position: position,
        setPosition: setPosition,
    }

    return(
        <ModalContext.Provider value={values} >
            { children }
        </ModalContext.Provider>
    );
}

export const useModal = () => useContext(ModalContext);