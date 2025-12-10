import { CancelIcon } from "../../assets/icon"
import HeadingWithText from "../../commponent/common/header/component-heading";
export default function StopWasting() {
    const CANCEL_ICON = [
        {
            id: 1,
            title: 'Manual email sorting and prioritization'
        },
        {
            id: 2,
            title: 'Repetitive CRM data entry and updates'
        },
        {
            id: 3,
            title: 'Time-consuming digging and researching'
        },
        {
            id: 4,
            title: 'Manual lead qualification and scoring'
        },
    ]

    const BOX_WASTED = [
        {
            id: 1,
            title: 'Productivity',
            text: '30%',
            desc: 'Less than 30% of sales reps time is spent actually selling, with the remainder consumed by administrative tasks and tool management. (Salesforce)',
            width: "w-[195px]",
            height: "h-[80px] md:h-[140px]",
        },
        {
            id: 2,
            title: 'Wasting time',
            text: '59 min',
            desc: 'Employees are wasting 59 minutes every day trying to find information hidden within different apps. (Qatalog)',
            width: "w-[195px]",
            height: "h-[80px] md:h-[124px]",
        },
        {
            id: 3,
            title: 'Project Delays',
            text: '61%',
            desc: '61% of organizations experience project delays due to slow data integration, impacting sales timelines. (Snaplogic)',
            width: "w-[195px]",
            height: "h-[80px] md:h-[74px]",
        },
    ]

    const heights = ["h-[230px] md:h-[376px]", "h-[210px] md:h-[312px]", "h-[210px] md:h-[261px]"];
    const backgrounds = [
        "bg-[#0160C9]",
        "bg-[#E6EFFA] mt-0 md:mt-16",
        "bg-[#E6EFFA] mt-0 md:mt-28.5"
    ];
    const desc = [
        "text-[#E6E9ED]",
        "text-[#141219]",
        "text-[#141219]",
    ];
    const title = [
        "text-[#E6E9ED]",
        "text-[#141219]",
        "text-[#141219]",
    ];
    const text = [
        "text-[#E6E9ED]",
        "text-[#0160C9]",
        "text-[#0160C9]",
    ];
    return (
        <section className="md:py-20 py-8">
            <div className="container">
                <div className="grid grid-cols-1 items-start md:grid-cols-[minmax(100px,407px)_minmax(100px,753px)] gap-5">
                    <div className="grid gap-6">
                        <HeadingWithText before={`Stop`} highlight={` wasting`} after={`time on tedious tasks`} description={`Teams spend hours every week digging through and updating the CRM along with other tools, and chasing tasks that AI could handle.`} />
                        <div className="grid gap-4">
                            {CANCEL_ICON.map((card =>
                                <div className="flex items-center gap-2" key={card.id}>
                                    <div className="flex shrink-0">
                                        <CancelIcon />
                                    </div>
                                    <p className="text-base md:text-lg font-normal text-[#141219]">{card.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {BOX_WASTED.map((card, index) => (
                            <div
                                key={card.id}
                                className={`w-full px-5 py-5 rounded-xl text-white md:max-w-[235px] transition-all duration-700 ${backgrounds[index]} ${heights[index]}`}
                            >
                                <div className={`${card.width} ${card.height}`}>
                                    <h3 className={`text-lg font-medium pb-1 ${title[index]}`}>{card.title}</h3>
                                    <span className={`text-3xl font-bold ${text[index]}`}>{card.text}</span>
                                </div>
                                <p className={`text-base font-normal mt-2 ${desc[index]}`}>{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}