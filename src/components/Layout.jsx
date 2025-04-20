import AddTaskButton from './AddButton.jsx';
import Navbar from './Navbar.jsx';

export default function Layout({ children }) {
    return(
        <div className={`min-h-screen w-full bg-day-bg dark:bg-night-bg text-day-text dark:text-night-text transition-color duration-400 flex flex-col`}>
            <header>
                <Navbar />
            </header>
            <main className={`flex-1 px-4 md:px-8 py-4 w-[100%] h-[100%]`}>
                { children }
                <AddTaskButton.Floating />
            </main>
            <footer className={`text-center text-xs p-2 opacity-60`}>
                © 2025 Soultrackr
            </footer>
        </div>
    );
}