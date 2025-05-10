export default function Calendar() {



    return(
        <div className="calendar-container bg-white w-[100%] aspect-square ">
            <div className="input-area-container bg-amber-400 w-full h-1/10 flex justify-center items-center">
                <label htmlFor="yearSelect"></label>
                <select name="year-select" id="yearSelect" defaultValue="2025">
                    {[...Array.from({length: 2051- 1900}, (_, i) => 1900 + i)].map(year => {
                        return <option className={`${year}`}>{year}</option>
                    })}
                </select>
            </div>
            <div className="calendar-area-container bg-amber-900 w-full h-9/10"></div>
        </div>
    );
}