import { useState, useEffect, createContext, useContext } from "react";

const DateContext = createContext();

export function DateProvider({ children }) {

    const [dateToday, setDateToday] = useState(() => {
        return new Date();
    });

    useEffect(() => {
        const updateDateToday = () => {
            setDateToday(new Date());
        }

        const interval = setInterval(updateDateToday, 15 * 60 * 1_000);
        return () => clearInterval(interval);
    }, [])

    const dateCodes = {
        1: "MON",
        2: "TUE",
        3: "WED",
        4: "THU",
        5: "FRI",
        6: "SAT",
        7: "SUN",
    }

    const values = {
        dateToday,
        dateCodes,
    }

    return(
        <DateContext.Provider value = { values} >
            { children }
        </DateContext.Provider>
    );
}

export const useDate = () => useContext(DateContext);