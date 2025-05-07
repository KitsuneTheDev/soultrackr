import { useTask } from '../context/TaskContext.jsx';

function Task() {};

Task.Card = (props) => {

    const { setTasks, setDones } = useTask();
    const task = props.task;

    function handleDeleteClick() {
        setTasks(prevTasks => {
            return prevTasks.filter(prev => {
                return prev.id !== task.id;
            });
        });
    };

    function handleDoneClick() {
        setDones(prevDones => {
            return [...prevDones,
                {
                    id: task.id,
                    taskname: task.taskname,
                    focusLevel: task.focusLevel, }]
        });
        handleDeleteClick();
    };

    return(
        <div className={`task-card col-span-1 row-span-1 aspect-square text-center 
        flex flex-col justify-center items-center gap-4 bg-day-surface
        dark:bg-night-surface rounded-2xl overflow-hidden
        text-l font-bold text-day-text dark:text-night-text
        hover:cursor-pointer hover:scale-[103%] dark:hover:bg-white/20 relative `}
        taskId={task.id}>
            <button className={`button-delete absolute right-[8px] top-[8px] lg:w-[16px]
            lg:h-[16px] h-[24px] w-[24px] rounded-full bg-day-caution hover:bg-day-caution-hover
            dark:bg-night-caution dark:hover:bg-night-caution-hover
            hover:cursor-pointer text-[2xl]
            flex justify-center items-center `}
            onClick={handleDeleteClick}>
                <span className="bg-white lg:w-[4px] lg:h-[4px] w-[8px] h-[8px] rounded-full "></span>
            </button>
            <button className={`button-done absolute right-[8px] bottom-[8px] lg:w-[16px]
            lg:h-[16px] h-[24px] w-[24px] rounded-full bg-day-safe hover:bg-day-safe-hover
            dark:bg-night-safe dark:hover:bg-night-safe-hover
            hover:cursor-pointer text-[2xl]
            flex justify-center items-center `}
            onClick={handleDoneClick}>
                <span className="bg-white lg:w-[4px] lg:h-[4px] w-[8px] h-[8px] rounded-full "></span>
            </button>
            <h2 className="">{task.taskname.toUpperCase()}</h2>
            <p className="">{task.focusLevel}</p>
            {/* FOCUS LEVELE GORE IMAJ DOSYASI GELECEK */}
            <p className="">{task.dueDate}</p>
            {/* DUE DATE GOSTERIM DAHA SIK OLMALI */}
        </div>
    );
}

Task.Line = (props) => {

    const task = props.task;
    const dateDiff = Math.ceil((new Date(task.dueDate) - new Date()) / (1_000 * 60 * 60 * 24));
    console.log("DateDiff -->", dateDiff);

    if(dateDiff <= 7) {

        const perWidth = (14.14 * dateDiff).toFixed(2);

        return(
            <div className='w-full h-3 flex mt-[0.1rem] gap-0 hover:cursor-pointer'>
                <span className='relative z-0 left-2 w-[3rem] h-3 bg-day-caution rounded-l-xl border-[1px] border-r-0 border-night-border'>
                    <p className='relative top-0 left-0 -translate-y-1/4 translate-x-1/16 text-xs text-day-text font-medium'>{task.taskname.slice(0,6)}</p>
                </span>
                <span className={`h-1 bg-day-caution rounded-xl border-[1px] border-l-0 border-night-border`} style={{width: `calc(${perWidth}% - 3rem)`}}></span>
            </div>    
        );
    }

    return(
        <div className='w-full h-3 flex mt-[0.1rem] gap-0 hover:cursor-pointer'>
            <span className='relative z-0 left-2 w-[3rem] h-3 bg-day-caution rounded-l-xl border-[1px] border-r-0 border-night-border'>
                <p className='relative top-0 left-0 -translate-y-1/4 translate-x-1/16 text-xs text-day-text font-medium'>{task.taskname.slice(0,6)}</p>
            </span>
            <span className={`w-[calc(99%-3rem)] h-1 bg-day-caution rounded-xl border-[1px] border-l-0 border-night-border`}></span>
            <span className='h-1 w-1 bg-day-caution rounded-full border-[1px] border-night-border'></span>
            <span className='h-1 w-1 bg-day-caution rounded-full border-[1px] border-night-border'></span>
        </div>
    );
}

export default Task;