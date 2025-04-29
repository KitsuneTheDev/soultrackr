import { createContext, useContext, useState, useEffect } from "react";

const ViewContext = createContext();

export function ViewProvider({ children }) {

    const [isDaily, setIsDaily] = useState(() => {
        const view = JSON.parse(localStorage.getItem('view'));
        console.log(view);

        if(view !== undefined) {
            return JSON.parse(view);
        }
        return true;
    });

    useEffect(() => {
        localStorage.setItem('view', JSON.stringify(isDaily));
    }, [isDaily]);

    const values = {
        isDaily: isDaily,
        setIsDaily: setIsDaily,
    }

    return(
        <ViewContext.Provider value={values} >
            { children }
        </ViewContext.Provider>
    );
}

export const useView = () => useContext(ViewContext);