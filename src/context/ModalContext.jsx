import { createContext, useState, useContext, Children } from "react";

const ModalContext = createContext();

export function ModalProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);

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
    }

    return(
        <ModalContext.Provider value={values} >
            { children }
        </ModalContext.Provider>
    );
}

export const useModal = () => useContext(ModalContext);