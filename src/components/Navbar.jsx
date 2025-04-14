export default function Navbar() {
    return(
        <>
            <nav className="navbar-container pt-[1%] h-1/16 w-full outline-2 outline-night-border text-night-text grid grid-cols-7 grid-rows-1">
                <div className="site-logo-container col-span-1">
                    <img src="../assets/sitelogo.png" alt="site logo" />
                </div>
                <div className="navbar-elements-container col-span-5">
                    <label htmlFor="toggleView" className="toggle-view-switch flex justify-center items-center">
                        <input type="checkbox" id="toggleView" className="hidden" />
                        <div className="sileder-container flex gap-[3.2px] items-center justify-center">
                            <span className="daily">Daily</span>
                            <span className="slider "></span>
                            <span className="weekly">Weekly</span>
                        </div>
                    </label>
                </div>
                <div className="toggle-theme-container col-span-1">
                    <label htmlFor="toggleTheme" className="toggle-teme-switch flex justify-center items-center">
                        <input type="checkbox" id="toggleTheme" className="hidden" />
                        <div className="slider-container flex gap-[3.2px] items-center justify-center">
                            <span className="light">Light</span>
                            <span className="slider bg-amber-50 w-[32px] h-[16px] rounded-xl"></span>
                            <span className="dark">Dark</span>
                        </div>
                    </label>
                </div>
            </nav>
        </>
    );
}