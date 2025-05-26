import dayjs from "dayjs";

export function groupOverlappingTasks(tasks) {

    console.log("---START OF groupOverlappingTasks---");

    const sorted = tasks.sort((a, b) => {
        return dayjs(a.start) - dayjs(b.start);
    });
    console.log("sorted --->", sorted);

    if(sorted.length === 0) return;

    const [firstTask, ...rest] = sorted;
    let currentGroup = [firstTask];
    let firstEnd = currentGroup[0].end;
    let lastEnd = currentGroup[0].end;
    let result = [];
    sorted.shift();

    for(const task of rest) {
        if(dayjs(task.start).isBefore(lastEnd)) {
            currentGroup.push(task);
            lastEnd = task.end;
        } else {
            result.push([...currentGroup]);
            console.log("Overlapping group created. Group -->", currentGroup);
            currentGroup = [task];
            lastEnd = task.end;
        }
    }
    
    if(rest.length === 0 || currentGroup.length !== 0) result.push([...currentGroup]); 

    console.log("result --->", result);
    console.log("---END OF groupOverlappingTasks---")

    return result;
}