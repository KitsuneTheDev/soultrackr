import AddTaskButton from './AddButton.jsx';
import Navbar from './Navbar.jsx';
import Modal from './Modal.jsx';
import Calendar from './Calendar.jsx';
export default function Layout({ children }) {

    return(
        <div className={`min-h-screen w-full bg-day-bg dark:bg-night-bg text-day-text dark:text-night-text transition-color duration-400 flex flex-col`}>
            <header className='header h-20'>
                <Navbar />
            </header>
            <aside className='sidebar absolute bg-day-bg dark:bg-night-bg w-[20%] h-[calc(100%-7.5rem)] top-20 border-r-1 border-t-2 border-day-border dark:border-night-border'>
                <Calendar />
            </aside>
            <main className={`fixed px-4 md:px-8 py-4 w-[80%] h-[calc(100%-7.5rem)] right-0 bottom-10`}>
                { children }
                <Modal></Modal>
                <AddTaskButton.Floating />
            </main>
            <footer className={`fixed bottom-0 w-full text-center text-xs p-2 max-h-10 h-10 opacity-60 border-t-2 border-day-border dark:border-night-border bg-day-bg dark:bg-night-bg `}>
                © 2025 Soultrackr
            </footer>
        </div>
    );
}