import { createContext, useContext, useState, useEffect } from "react";
import dayjs from "dayjs";


const CalendarContext = createContext();

function CalendarProvider({ children }) {

    const [calendarDate, setCalendarDate] = useState(() => {
        return dayjs();
    });
    const monthNames = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December",
    }

    const values ={
        calendarDate: calendarDate,
        setCalendarDate: setCalendarDate,
        monthNames: monthNames,
    }

    return(
        <CalendarContext.Provider value={values}>
            { children }
        </CalendarContext.Provider>
    );
}

const useCalendar = () => useContext(CalendarContext);

export { useCalendar, CalendarProvider };