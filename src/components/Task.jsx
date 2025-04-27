import { useRef } from "react";

export default function Task(props) {

    console.log("props -->", props)
    const task = props.task;
    return(
        <div className={`col-span-1 row-span-1 aspect-square text-center 
        flex flex-col justify-center items-center gap-4 bg-day-surface
        dark:bg-night-surface rounded-2xl overflow-hidden
        text-l font-bold text-day-text dark:text-night-text
        hover:cursor-pointer hover:scale-[103%] relative `}>
            <button className={`absolute right-[8px] top-[8px] lg:w-[16px]
            lg:h-[16px] h-[24px] w-[24px] rounded-full bg-day-caution hover:bg-day-caution-hover
            dark:bg-night-caution dark:hover:bg-night-caution-hover
            hover:cursor-pointer text-[2xl]
            flex justify-center items-center `}>
                <span className="bg-white lg:w-[4px] lg:h-[4px] w-[8px] h-[8px] rounded-full "></span>
            </button>
            <button className={`absolute right-[8px] bottom-[8px] lg:w-[16px]
            lg:h-[16px] h-[24px] w-[24px] rounded-full bg-day-safe hover:bg-day-safe-hover
            dark:bg-night-safe dark:hover:bg-night-safe-hover
            hover:cursor-pointer text-[2xl]
            flex justify-center items-center `}>
                <span className="bg-white lg:w-[4px] lg:h-[4px] w-[8px] h-[8px] rounded-full "></span>
            </button>
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