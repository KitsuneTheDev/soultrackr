

function Task() {};

Task.Weekly = (props) => {
    return(
        <div className="fixed h-10 w-10 bg-white">{props.taskName}</div>
    );
}

Task.Daily = () => {
    return(
        <div>Demo Daily</div>
    );
}

export default Task;