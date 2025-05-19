import dayjs from "dayjs";

function Task() {};

Task.Weekly = ({task}) => {

    function calculateTaskPosition() {
        const startDate = dayjs(task.startDate);
        const finishDate = dayjs(task.finishDate);
        const startDateDay = startDate.date();
        const finishDateDay = finishDate.date();
        const minuteOfDay = 24 * 60;
        const rowCount = 24 * 60 / 12; 
        const theDuration = finishDate.diff(startDate, 'minute')

        const colStart = startDate.day();
        const rowStart = startDate.hour() * 12 + Math.ceil(startDate.minute() / 5);
        const colEnd = colStart + Math.floor(theDuration / minuteOfDay);
        const rowEnd = rowStart + Math.ceil(((theDuration - (minuteOfDay * (colEnd - colStart))) % rowCount) / 12);

        console.log(`
            rowStart --> ${rowStart}
            rowEnd ----> ${rowEnd}
            colStart --> ${colStart}
            colEnd ----> ${colEnd}
            `)

        console.log("startDate -->", startDateDay, "finshDate -->", finishDateDay);
        console.log("difference -->", theDuration);

        const style = {
            gridColumnStart: colStart,
            gridRowStart: rowStart,
            gridColumnEnd: colEnd,
            gridRowEnd: rowEnd,
        }

        return style;
    }

    const style = calculateTaskPosition();

    calculateTaskPosition();

    return(
        <div
        className="h-full w-full bg-day-accent z-50 dark:bg-night-accent"
        style={{
            gridColumnStart: style.gridColumnStart,
            gridRowStart: style.gridRowStart,
            gridColumnEnd: style.gridColumnEnd,
            gridRowEnd: style.gridRowEnd,
        }} >
            {task.taskName}
        </div>
    );
}

console.log('HELLO?')

Task.Daily = () => {
    return(
        <div>Demo Daily</div>
    );
}

export default Task;