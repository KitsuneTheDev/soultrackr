import dayjs from "dayjs";

export function groupTasksByDay(tasks) {
    console.log("---START OF groupTasksByDay---");
    return tasks.reduce((acc, task) => {
        const dataKey = dayjs(task.start).format("YYYY-MM-DD");
        console.log("dataKey -->", dataKey);
        if(!acc[dataKey]) {
            console.log("acc[dataKey] is undefined. Creating an empty array...", acc[dataKey]);
            acc[dataKey] = [];
            console.log("task[dateKey] -->", acc[dataKey]);
        }

        console.log("---END OF groupTasksByDay---")
        acc[dataKey].push(task);
        return acc;
    }, {});
}