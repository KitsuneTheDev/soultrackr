import { useEffect, useState } from "react";
import siteLogo from '../assets/sitelogo.png';

export default function Navbar() {

    const [isDark, setIsDark] = useState(() => {
        console.log('current theme is ', localStorage.getItem('theme'));
        return localStorage.getItem('theme') === 'dark';
    });

    const [isDaily, setIsDaily] = useState(true);

    useEffect(() => {
        if(isDark){
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            console.log('theme saved as dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            console.log('theme saved as light');
        }
    }, [isDark])

    function handleThemeToggle(event) {
        event.preventDefault();
        console.log('changing the theme');
        setIsDark(!isDark);
        console.log('theme has changed');
    }

    function handleViewToggle(event) {
        event.preventDefault();
        console.log('changing the view');
        setIsDaily(!isDaily);
        console.log('view has changed');
    }

    return(
        <>
            <nav className="navbar-container h-1/16 pl-4 w-full md:px-16 max-sm:p-0 max-sm:pt-22 outline-2 transition-all duration-500 ease-out outline-day-border text-day-text dark:outline-night-border dark:text-night-text grid grid-cols-7 grid-rows-1">
                <div className="site-logo-container pt-4 col-span-1 flex items-start max-sm:absolute max-sm:top-[-8px] left-[-60px] justify-center mb-5 gap-2 mx-4 md:mx-8 max-sm:mx-16">
                    <img src={siteLogo} alt="site logo" width={32} className="rounded-2xl" />
                    <h1 className="text-2xl text-day-text dark:text-night-text font-bold">Soultrackr</h1>
                </div>
                <div className="navbar-elements-container col-span-5 py-8 max-sm:p-0 max-sm:absolute max-sm:right-[20%] max-sm:top-[8%] flex justify-center items-center">
                    <label htmlFor="toggleView" className="toggle-view-switch flex justify-center w-fit items-center hover:cursor-pointer" onClick={handleViewToggle}>
                        <input type="checkbox" id="toggleView" className="hidden" />
                        <div className="slider-container flex gap-[42px] w-[32.5px] pl-[16px] h-[16.5px] items-center justify-center relative z-0 dark:bg-day-text bg-day-accent rounded-2xl">
                            <span className="daily">Daily</span>
                            <span className={`slider absolute z-10 bg-day-text dark:bg-day-bg w-[16px] h-[16px] rounded-xl left-0 transition-transform duration-400 ${isDaily ? `translate-x-0` : `translate-x-full`}`}></span>
                            <span className="weekly">Weekly</span>
                        </div>
                    </label>
                </div>
                <div className="toggle-theme-container col-span-1 py-8 max-sm:p-2">
                    <label htmlFor="toggleTheme" className="toggle-theme-switch flex justify-center items-center hover:cursor-pointer max-sm:absolute max-sm:left-[20%] max-sm:top-[8%]" onClick={handleThemeToggle}>
                        <input type="checkbox" id="toggleTheme" className="hidden" />
                        <div className={`slider-container w-[32.5px] h-[16.5px] dark:bg-day-text bg-day-accent rounded-2xl relative z-0 flex gap-[42px] items-center justify-center`}>
                            <span className="light">Light</span>
                            <span className={`slider bg-day-text dark:bg-day-bg w-[16px] h-[16px] rounded-xl absolute z-10 left-0 transition-transform duration-400 ${isDark ? `translate-x-full` : `translate-x-0`}`}></span>
                            <span className="dark">Dark</span>
                        </div>
                    </label>
                </div>
            </nav>
        </>
    );
}

// IPad Air Site logo yukarıda
// Iphone 14 proMax için toggle view çok sağda