import dayjs from "dayjs";

export function groupTasksByDay(tasks) {
    return tasks.reduce((acc, task) => {
        const dataKey = dayjs(task.start).format("YYYY-MM-DD HH:mm");
        if(!acc[dataKey]) {
            acc[dataKey] = [];
        }

        return acc[dataKey].push(task);
    }, {});
}