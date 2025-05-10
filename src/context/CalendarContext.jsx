import { createContext, useContext, useState, useEffect } from "react";
import dayjs from "dayjs";


const CalendarContext = createContext();

function CalendarProvider({ children }) {

    const [calendarDate, setCalendarDate] = useState(() => {
        return dayjs();
    })

    const values ={
        calendarDate: calendarDate,
        setCalendarDate: setCalendarDate,
    }

    return(
        <CalendarContext.Provider value={values}>
            { children }
        </CalendarContext.Provider>
    );
}

const useCalendar = () => useContext(CalendarContext);

export { useCalendar, CalendarProvider };