export default function Task(props) {
    console.log("props -->", props)
    const task = props.task;
    return(
        <div className={`col-span-1 row-span-1 aspect-square text-center 
        flex flex-col justify-center items-center gap-4 bg-day-surface
        dark:bg-night-surface rounded-2xl overflow-hidden
        text-l font-bold text-day-text dark:text-night-text `}>
            <h2 className="">{task.taskname.toUpperCase()}</h2>
            <p className="">{task.focusLevel}</p>
            {/* FOCUS LEVELE GORE IMAJ DOSYASI GELECEK */}
            <p className="">{task.dueDate}</p>
            {/* DUE DATE GOSTERIM DAHA SIK OLMALI */}
        </div>
    );

    /*
    ----TODO:
        1-HOVER AKSIYONDA EK BILGILER GELECEK
        2-TIKLAMA AKSIYONUNDA TUM DETAYLAR GORULECEK
        3-SILME BUTONU EKLENECEK
        4-FOCUS CONTEXTE GORE CLASS DEGISIMLERI VE GORUNURLUKLER AYARLANACAK
    */
}