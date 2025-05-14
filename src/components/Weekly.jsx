import { useCalendar } from '../context/CalendarContext.jsx';
import dayjs from 'dayjs';


export default function Weekly() {

    const { calendarDate } = useCalendar();
    const todayDateIndex = dayjs().date();
    console.log("today date index is -->", todayDateIndex);
    console.log("calendar day is -->", calendarDate.startOf('week').date());

    return(
        <div
        className={`main-calendar-layout w-[100%] h-[100%] rounded-xl
        bg-day-surface dark:bg-night-surface`}>
            <div
            className={`relative main-calendar-top
            h-fit w-full`}>
                <div
                className='days-container hover:cursor-default ml-[9%]
                h-[77%] w-[91%]
                grid grid-rows-1 grid-cols-7'>
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
                        const dayIndex = calendarDate.startOf('week').date() + index;
                        return(
                            <div
                            key={index}
                            className='col-span-1 row-span-1 flex flex-col justify-center items-center border-l-1 border-day-border dark:border-night-border'>
                                <div className='day-name-container w-full h-[20%] text-sm text-center pt-2'>{day}</div>
                                <div className='day-index-container w-full h-[80%] pt-7 flex items-center justify-center'>
                                    <span 
                                    className={`w-7 h-7 rounded-full flex items-center justify-center
                                    ${dayIndex === todayDateIndex ? `bg-day-accent dark:bg-night-accent` : ``}`}>
                                        {dayIndex}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div
                className={`event-container grid grid-cols-7 grid-rows-1 h-[33%] min-h-10 ml-[9%] border-b-1 border-day-border dark:border-night-border`}>
                    {[...Array(7)].map((_, index) => {
                        return(
                            <div key={index} className='col-span-1 row-span-1 border-l-1 border-day-border dark:border-night-border'></div>
                        );
                    })}
                </div>
                <div className='absolute top-0 date-type-container w-[9%] h-full grid grid-cols-1 grid-rows-10'>
                    <span className='col-span-1 row-span-8'></span>
                    <span className='col-span-1 row-span-2 grid grid-cols-10 grid-rows-1 relative'>
                        <span className='col-span-10 row-span-1 flex justify-end items-end pr-2 text-sm'>UTC +3</span>
                        <span className='col-span-2 row-span-1 col-start-9 border-b-1 border-day-border dark:border-night-border'></span>
                    </span>
                </div>
            </div>
            <div
            className={`main-calendar-bottom`}>

            </div>
        </div>
    );
}