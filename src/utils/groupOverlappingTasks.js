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
        if(!lastEnd || !firstEnd) return;

        if(dayjs(task.start).isBefore(dayjs(firstEnd))) {
            if(dayjs(task.start).isBefore(dayjs(lastEnd))) {
                currentGroup.push(task);
                lastEnd = task.end;
            } else if (dayjs(lastEnd).isBefore(dayjs(task.start)) || dayjs(lastEnd).isSame(dayjs(task.start))) {
                result.push([...currentGroup]);
                currentGroup.pop();
                currentGroup.push(task);
                lastEnd = task.end;
            }
        } else if(dayjs(firstEnd).isBefore(dayjs(task.start)) || dayjs(firstEnd).isSame(dayjs(task.start))) {
            if(dayjs(task.start).isBefore(dayjs(lastEnd))) {
                result.push([...currentGroup]);
                currentGroup.shift();
                currentGroup[0] ? firstEnd = currentGroup[0].end : null;
                currentGroup.push(task);
                lastEnd = task.end;
            } else if(dayjs(lastEnd).isBefore(dayjs(task.start)) || dayjs(lastEnd).isSame(dayjs(task.start))) {
                result.push([...currentGroup]);
                currentGroup.shift();
                currentGroup[0] ? firstEnd = currentGroup[0].end : null;
                currentGroup.pop();
                currentGroup.push(task);
                lastEnd = task.end;
            }
        }

        if(dayjs(task.start).isBefore(dayjs(lastEnd))) {
            if(dayjs(task.start).isBefore(dayjs(firstEnd))) {
                currentGroup.push(task);
                lastEnd = task.end;
            } else if(dayjs(firstEnd).isBefore(dayjs(task.start)) || dayjs(lastEnd).isSame(dayjs(task.start))) {
                result.push([...currentGroup]);
                currentGroup.shift();
                currentGroup[0] ? firstEnd = currentGroup[0].end : null;
                lastEnd = task.end;
            } 
        } else if(dayjs(lastEnd).isBefore(dayjs(task.start)) || dayjs(lastEnd).isSame(dayjs(task.start))) {
            if(dayjs(task.start).isBefore(dayjs(firstEnd))) {
                result.push([...currentGroup]);
                currentGroup.pop();
                currentGroup.push(task);
                lastEnd = task.end;
            } else if(dayjs(firstEnd).isBefore(dayjs(task.start)) || dayjs(lastEnd).isSame(dayjs(task.start))) {
                result.push([...currentGroup]);
                currentGroup.shift();
                currentGroup[0] ? firstEnd = currentGroup[0].end : null;
                currentGroup.pop();
                currentGroup.push(task);
                lastEnd = task.end;
            }
        }

        if(rest.length === 0) result.push([...currentGroup]);
    }

    console.log("result --->", result);
    console.log("---END OF groupOverlappingTasks---")

    return result;
}