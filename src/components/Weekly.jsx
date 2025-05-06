import { useEffect } from "react";
import { useDate } from '../context/DateContext.jsx';
import { useTask } from '../context/TaskContext.jsx';
import Task from './Task.jsx';

export default function Weekly() {

    const { tasks } = useTask();
    const { dateCodes, dateToday } = useDate();
    const dayNames = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const adjustIndex = (dateToday.getDay() + 6) % 7;
    console.log('date today is -->', dateCodes[dateToday.getDay()]);


    useEffect(() => {
        const left = document.querySelector('#left-container-scroll');
        const right = document.querySelector('#right-container-scroll');

        const syncScroll= (event) => {
            const target = event.target;
            if(target === right) left.scrollTop = target.scrollTop;
            if(target === left) right.scrollTop = target.scrollTop;
        }

        left.addEventListener('scroll', syncScroll);
        right.addEventListener('scroll', syncScroll);

        return () => {
            left.removeEventListener('scroll', syncScroll);
            right.removeEventListener('scroll', syncScroll);
        }
    })

    return(
        <div className="weekly-container w-[98%] h-[calc(100%-9rem)] absolute left-1/2 -translate-x-1/2">
            <div className="days-hours-container fixed h-19 w-19 bg-day-bg dark:bg-night-bg overflow-hidden border-1 rounded-xl border-day-border dark:border-night-border">
                <span className="fixed top-3 left-9 text-sm text-day-text dark:text-night-text">Days</span>
                <hr className="relative top-1/2 left-1/2 -translate-x-1/2 rotate-45 border-day-border dark:border-night-border w-30 border-1" />
                <span className="fixed top-11 left-2 text-sm text-day-text dark:text-night-text">Hours</span>
            </div>
            <div className="days-name-container bg-day-bg dark:bg-night-bg right-[1.15rem] fixed w-[calc(100%-6.2rem)] h-20 grid grid-rows-1 [grid-template-columns:repeat(7,_calc(100%/7))]">
                {dayNames.map((day, index) => {
                    if(day === dateCodes[dateToday.getDay()]) {
                        return(
                        <div key={index} className="row-span-1 col-span-1 border-r-2 rounded-xl border-day-border dark:border-night-border flex justify-center items-center bg-day-accent/20 dark:bg-night-surface/70">
                            {day}
                        </div>
                        );
                    }
                    return(
                    <div key={index} className="row-span-1 col-span-1 border-r-2 rounded-xl border-day-border dark:border-night-border flex justify-center items-center">
                        {day}
                    </div>)
                    ;
                })}
            </div>
            <div className="hours-name-container bg-day-bg dark:bg-night-bg overflow-y-auto absolute top-20 h-[calc(100%-5rem)] w-20 grid grid-cols-1 [grid-template-rows:repeat(24,_8rem)]" id="left-container-scroll">
                    {[...Array(24 * 1)].map((_, i) => {
                        return(
                            <div key={i} className="row-span-1 col-span-1 border-b-1 border-day-border dark:border-night-border flex justify-start items-center pl-2">
                                {i<10 ? `0${i}:00` : `${i}:00` }
                            </div>
                        );
                    })}
            </div>
            <div className="task-display-container absolute h-[calc(100%-5rem)] w-[calc(100%-5rem)] left-20 top-20 overflow-hidden">
                    <div className="task-display relative z-20 bg-transparent dark:bg-transparent grid grid-cols-7 [grid-template-rows:repeat(24,_8rem)] gap-0 h-full w-[100%]  overflow-y-auto" id="right-container-scroll">
                        {[...Array(168)].map((_, i) => {
                            const columnIndex = i % 7;
                            return(
                                <div key={i} className={`day-container col-span-1 row-span-1 border-1 border-day-border dark:border-night-border rounded-xl
                                    ${adjustIndex === columnIndex ? `bg-day-accent/20 dark:bg-night-surface/70` : ``}`}></div>
                            );
                        })}
                    </div>
                    <div className='z-0 fixed top-20 left-20 w-[calc(100%-6.2rem)] h-[calc(100%-6.2rem)]'>
                        {tasks.map((task, index) => {
                            return(
                                <Task.Line key={index}  task = {task}></Task.Line>
                            );
                        })}
                    </div>
            </div>
            </div>

    );;
}