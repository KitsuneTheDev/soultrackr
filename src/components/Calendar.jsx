import { useState } from 'react';
import dayjs from 'dayjs';
import { useCalendar } from '../context/CalendarContext.jsx';

export default function Calendar() {

    const { calendarDate, setCalendarDate, monthNames } = useCalendar();
    const [monthIndex, setMonthIndex] = useState(calendarDate.month());
    const [year, setYear] = useState(calendarDate.year());
    const [daysComplete, setDaysComplete] = useState(() => {
        return generateCalendatLayout(calendarDate);
    });

    function generateCalendatLayout(browseDate) {
        // array to contain days of the current month
        const days = [];
        console.log("browseDate -->", browseDate.daysInMonth());
        // variables for rendering the current month
        const startOfMonth = browseDate.startOf('month');
        const daysInMonth = browseDate.daysInMonth();
        const startDayIndex = startOfMonth.day();

        // variables for rendering previous month
        const prevMonth = browseDate.subtract(1, 'month');
        const daysInPrevMonth = prevMonth.daysInMonth();

        // variables for rendering the next month
        const nextMonth = browseDate.add(1, 'month');

        // pushing remaining days from the previous month into days
        for (let i = startDayIndex - 1; i >= 1; i--) {
            console.log("prev month for index -->", i);
            days.push({
                date: prevMonth.date(daysInPrevMonth - i),
                isCurrentMonth: false,
            });
        }
        console.log("previous month days are pushed --> days.length:", days.length);

        // pushing the days of the current month into days
        for (let i = 1; i <= daysInMonth; i++) {
            days.push({
                date: browseDate.date(i),
                isCurrentMonth: true,
            });
        }
        console.log("current month days are pushed --> days.length:", days.length);

        // pushing the start of the next month into days
        const remainings = 42 - days.length;
        for (let i = 1; i <= remainings; i++) {
            days.push({
                date: nextMonth.date(i),
                isCurrentMonth: false,
            });
        }

        return days;
    }
    
    function handleIncrementClick() {
        if(monthIndex === 11) {
            const newYear = year + 1;
            setMonthIndex(0);
            setYear(newYear);
            setDaysComplete(generateCalendatLayout(dayjs().year(newYear).month(0)));
            return;
        }
        const newMonth = monthIndex + 1;
        setMonthIndex(newMonth);
        setDaysComplete(generateCalendatLayout(dayjs().year(year).month(newMonth)));
    }

    function handleDecrementClick() {
        if(monthIndex === 0) {
            const newYear = year - 1;
            setMonthIndex(11);
            setYear(newYear);
            setDaysComplete(generateCalendatLayout(dayjs().year(newYear).month(11)));
            return;
        }
        const newMonth = monthIndex - 1;
        setMonthIndex(newMonth);
        setDaysComplete(generateCalendatLayout(dayjs().year(year).month(newMonth)));
    }

    return(
        <div className="calendar-container bg-day-bg dark:bg-night-bg w-[100%] aspect-square pl-1 hover:cursor-default">
            <div className="month-year-area dark:bg-night-bg bg-day-bg w-full h-1/10 flex justify-between items-center gap-0">
                <span className='month-year flex justify-center items-center font-bold gap-2'>
                    <span className="month">{monthNames[monthIndex]}</span>
                    <span className="year">{year}</span>
                </span>
                <span className='month-selection-buttons flex items-centerjustify-center gap-2'>
                    <span className='previous-month-arrow w-5 h-5 rounded-full flex items-center justify-center hover:bg-night-surface hover:cursor-pointer' onClick={handleDecrementClick}>&lt;</span>
                    <span className='next-month-arrow w-5 h-5 rounded-full flex items-center justify-center hover:bg-night-surface hover:cursor-pointer' onClick={handleIncrementClick}>&gt;</span>
                </span>
            </div>
            <div className="calendar-area-container bg-day-bg dark:bg-night-bg w-full h-9/10 font-light text-m">
                <div className='days-name-container grid grid-rows-1 grid-cols-7 gap-2'>
                    {[...Array("Mo", "Tu", "We", "Th", "Fr", "Sa", "Su")].map((day, index)=> {
                        return(
                            <div key={index} className='w-6 h-6 flex items-center justify-center'>{day}</div>
                        );
                    })}
                </div>
                <div className='days-container grid grid-rows-6 grid-cols-7 gap-2'>
                    {daysComplete.map(({date, isCurrentMonth}, index) => {
                        const isSelected = date.isSame(calendarDate, 'day');

                        return(
                            <div key={index}
                            className={`
                                w-6 h-6 flex items-center justify-center rounded-full
                                ${isSelected ? 'bg-day-accent dark:bg-night-accent' : ``}
                                ${isCurrentMonth ? `text-day-text dark:text-night-text font-medium` : `text-day-text/70 dark:text-night-text/70`}
                            `}>
                                {date.date()}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}