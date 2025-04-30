export default function Weekly() {
    return(
        <div className="weekly-view-container w-full h-full ">
            <div className="grid grid-rows-25 grid-cols-1 ">
                <div className="row-span-1 w-full h-20 grid grid-rows-1 grid-cols-8 fixed">
                    <span className="col-span-1 row-span-1 text-center">DAYS</span>
                    <span className="col-span-1 row-span-1 text-center">MON</span>
                    <span className="col-span-1 row-span-1 text-center">TUE</span>
                    <span className="col-span-1 row-span-1 text-center">WED</span>
                    <span className="col-span-1 row-span-1 text-center">THU</span>
                    <span className="col-span-1 row-span-1 text-center">FRI</span>
                    <span className="col-span-1 row-span-1 text-center">SAT</span>
                    <span className="col-span-1 row-span-1 text-center">SUN</span>
                    <hr className="fixed w-full translate-y-10 left-0"/>
                </div>
                <div className="row-span-1 w-full h-20"></div>
                <div className="row-span-1 w-full h-20"></div>
                <div className="row-span-1 w-full h-20"></div>
                <div className="row-span-1 w-full h-20"></div>
                <div className="row-span-1 w-full h-20"></div>
                <div className="row-span-1 w-full h-20"></div>
                <div className="row-span-1 w-full h-20"></div>
                <div className="row-span-1 w-full h-20"></div>
                <div className="row-span-1 w-full h-20"></div>
                <div className="row-span-1 w-full h-20"></div>
                <div className="row-span-1 w-full h-20"></div>
                <div className="row-span-1 w-full h-20"></div>
                <div className="row-span-1 w-full h-20"></div>
                <div className="row-span-1 w-full h-20"></div>
                <div className="row-span-1 w-full h-20"></div>
                <div className="row-span-1 w-full h-20"></div>
                <div className="row-span-1 w-full h-20"></div>
                <div className="row-span-1 w-full h-20"></div>
                <div className="row-span-1 w-full h-20"></div>
                <div className="row-span-1 w-full h-20"></div>
                <div className="row-span-1 w-full h-20"></div>
                <div className="row-span-1 w-full h-20"></div>
                <div className="row-span-1 w-full h-20"></div>
                <div className="row-span-1 w-full h-20"></div>
            </div>
        </div>
    );;
}

/*
TODO:
    - Google calendar view
    - Be sure task rendered at right place
    - Scrollable 24 hours.
    - Adjust the current hour in the middle of the container by using useRef.
    - Highlight the current hour and day. make the intersection darker.
*/