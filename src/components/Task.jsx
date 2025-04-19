export default function Task(props) {
    return(
        <div className={`col-span-1 row-span-1 aspect-square text-center flex justify-center bg-day-surface dark:bg-night-surface rounded-2xl items-center`}>
            <h2>{props.task.demo}</h2>
        </div>
    );
}