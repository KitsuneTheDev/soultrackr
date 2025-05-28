import { useState, useEffect, useRef } from "react"; 
import { useCalendar } from '../context/CalendarContext.jsx';
import { useModal } from '../context/ModalContext.jsx';
import TaskOverlay from "./TaskOverlay.jsx";
import { demoTask } from '../constants/demoTask.js';
import { centerMarker } from "../utils/centerMarker.js";
import dayjs from 'dayjs';


export default function Weekly() {

    console.log("demo tasks --->", demoTask);

    const { calendarDate } = useCalendar();
    const { openModal, closeModal, isOpen, setPosition } = useModal();

    const todayDateIndex = dayjs().date();
    console.log("today date index is -->", todayDateIndex);
    console.log("calendar day is -->", calendarDate.startOf('week').date());
    console.log("today weekly index is -->", dayjs().date() - calendarDate.startOf('week').date());

    const [markerPosition, setMarkerPosition] = useState(() => {
        const todayWeeklyIndex = dayjs().date() - calendarDate.startOf('week').date();
        const hourIndex = dayjs().hour() * 12 + Math.floor(dayjs().minute() / 5);
        
        const gridWidthPercent = 91 / 7;
        const gridHeightPx = 5 * 16; 

        const position = {
            left: `calc(9% + ${gridWidthPercent * todayWeeklyIndex}%)`,
            top: `${(hourIndex * (gridHeightPx / 12 )).toFixed(0)}px`,
        }

        console.log("marker position is -->", position);

        return position;
    });

    const markerRef = useRef();
    const scrollContainerRef = useRef();

    useEffect(() =>{
        const fiveMinInterval = setInterval(() => {
            setMarkerPosition(() => {
                const todayWeeklyIndex = (dayjs().day() + 6) % 7;;
                const hourIndex = dayjs().hour() * 12 + Math.floor(dayjs().minute() / 5);
                const gridWidthPercent = 91 / 7;
                const gridHeightPx = 5 * 16; 
                const position = {
                    left: `calc(9% + ${gridWidthPercent * todayWeeklyIndex}%)`,
                    top: `${(hourIndex * (gridHeightPx / 12 )).toFixed(0)}px`,
                }

                console.log("position ------------>", position);
            
                console.log("marker position is -->", position);
            
                return position;
            })
        }, 1 * 60 * 1_000);

        return () => clearInterval(fiveMinInterval);
    }, []);

    useEffect(() => {
        centerMarker(markerRef.current, scrollContainerRef.current);
    }, [])

    function handleGridClick(event) {
        console.log(event.target);
        const vpWidth = window.innerWidth;
        const vpHeight = window.innerHeight;
        const x = event.clientX + 400 >= innerWidth ? event.clientX - 400 : event.clientX;
        const y = event.clientY + 400 >= innerHeight ? event.clientY - 400 : event.clientY;

        console.log("x -->", x, "y -->", y);
        setPosition(prev => {
            return {...prev, top: y, left: x}
        })
        isOpen ? closeModal() : openModal();
    }

    return(
        <div
        className={`main-calendar-layout w-[100%] h-[100%] rounded-xl
        bg-day-surface dark:bg-night-surface overflow-hidden`}>
            <div
            className={`relative main-calendar-top
            h-30 w-full`}>
                <div
                className='days-container hover:cursor-default ml-[9%]
                h-20 w-[91%]
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
                className={`event-container grid grid-cols-7 grid-rows-1 h-10 min-h-10 ml-[9%] border-b-1 border-day-border dark:border-night-border`}>
                    {[...Array(7)].map((_, index) => {
                        return(
                            <div key={index} className='col-span-1 row-span-1 border-l-1 border-day-border dark:border-night-border'></div>
                        );
                    })}
                </div>
                <div className='absolute top-0 date-type-container w-[9%] h-30 grid grid-cols-1 grid-rows-10'>
                    <span className='col-span-1 row-span-8'></span>
                    <span className='col-span-1 row-span-2 grid grid-cols-10 grid-rows-1 relative'>
                        <span className='col-span-10 row-span-1 flex justify-end items-end pr-2 text-sm'>UTC +3</span>
                        <span className='col-span-2 row-span-1 col-start-9 border-b-1 border-day-border dark:border-night-border'></span>
                    </span>
                </div>
            </div>
            <div
            className={`main-calendar-bottom relative w-full h-[calc(100%-7.5rem)] overflow-y-scroll overflow-x-clip`} ref={scrollContainerRef}>
                <div className='hours-layout-container absolute bg-day-surface dark:bg-night-surface w-[9%] h-fit grid grid-cols-1 grid-rows:repeat(_5rem, 24) border-r-1 border-day-border dark:border-night-border ml-[2px]'>
                    {[...Array(24)].map((_, index) => {
                        return(
                            <div key={index}
                            className={`col-span-1 row-span-1 w-full h-20 grid grid-rows-1 grid-cols-5 relative`}>
                                <div className='absolute right-0 top-0 pr-2'>{index < 10 ? `0${index}:00` : `${index}:00`}</div>
                                <div className='row-span-1 col-span-1 col-start-5 border-b-1 border-day-border dark:border-night-border'></div>
                            </div>
                        );
                    })}
                </div>
                <div className='task-grid-container h-fit w-[92%] relative z-50 bg-day-surface dark:bg-night-surface grid grid-cols-7 grid-template-rows:repeat(_5rem, 24) left-[9%]'>
                    {[...Array(168)].map((_, index) => {
                        return(
                            <div key={index}
                            className={`h-20 w-[calc(91% / 6)] col-span-1 row-span-1 border-[1px] border-day-border dark:border-night-border grid grid-rows-2 grid-cols-1`}>
                                <div className='half-area-1 w-full h-10 col-span-1 row-span-1' onClick={handleGridClick}></div>
                                <div className='half-area-2 w-full h-10 col-span-1 row-span-1' onClick={handleGridClick}></div>
                            </div>
                        );
                    })}
                    <TaskOverlay.Weekly />
                </div>
                <div className={`marker absolute h-fit w-[96%] z-60`} style={markerPosition} ref={markerRef}>
                    <span className='absolute w-2 h-2 rounded-full bg-night-caution -translate-y-1/2'></span>
                    <hr className={`absolute bg-night-caution top-0 w-[calc(97%/7)] h-[2px] border-none top-0`} />
                </div>
            </div>
        </div>
    );
}