import { useState } from "react";
import {
    ActionableImage,
    AlwaysImage,
    SmarterImage,
    WorkEmailImage
} from "../../assets/images";
import { ActionableIcon, AlwaysIcon, SmarterIcon, WorkIcon } from "../../assets/icon";

export default function RightInbox() {

    const [activeId, setActiveId] = useState(1);

    const CRM_IMAGES = {
        1: WorkEmailImage,
        2: AlwaysImage,
        3: SmarterImage,
        4: ActionableImage,
    };
    const VALUE_CRM = [
        {
            id: 1,
            head: "Work Inside Email",
            icon: WorkIcon,
            desc: "dot.it embeds CRM details directly in your email sidebar, allowing you to log activities, update records and respond from a single platform.",
        },
        {
            id: 2,
            head: "Always Synced",
            icon: AlwaysIcon,
            desc: "With seamless, two-way synchronization between email and CRM, every email, note and update is automatically logged, eliminating the back-and-forth.",
        },
        {
            id: 3,
            head: "Smarter Interactions",
            icon: SmarterIcon,
            desc: "Schedule, track, and log without the hassle. dot.it syncs every touchpoint so you can focus on the conversation, with smooth automation.",
        },
        {
            id: 4,
            head: "Actionable Insights",
            icon: ActionableIcon,
            desc: "See deal context, reminders, and pipeline intelligence where you actually work in email, so you never have to leave the conversation.",
        },
    ];
    const toggleAccordion = (id) => {
        setActiveId(activeId === id ? null : id);
    };
    return (
        <section className="my-8 md:my-20">
            <div className="container">
                <div className="bg-[rgba(230,233,237,0.14)] shadow-sm rounded-xl pl-8 grid grid-cols-1 items-center justify-center md:grid-cols-[minmax(100px,592px)_minmax(100px,628px)] gap-7">
                    <div className="grid gap-6 py-8">
                        <h2 className="text-4xl font-semibold text-[#141219]">
                            Everything you need <br /> right inside your inbox
                        </h2>
                        {VALUE_CRM.map((card) => (
                            <div
                                key={card.id}
                                onClick={() => toggleAccordion(card.id)}
                                className={`py-5 grid gap-2 shadow-sm cursor-pointer px-6 rounded-2xl text-left transition 
                                    ${activeId === card.id
                                        ? "bg-[#D9E7F7]"
                                        : "bg-[#FFF]"
                                    }
                                `}
                            >
                                <div className="flex items-center gap-3">
                                    <card.icon />
                                    <h2 className="text-[#141219] text-xl font-medium">
                                        {card.head}
                                    </h2>
                                </div>
                                {activeId === card.id && (
                                    <p className="text-[#414651] text-lg font-normal">
                                        {card.desc}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="h-full">
                        <img
                            src={CRM_IMAGES[activeId] || CRM_IMAGES[1]}
                            alt="crm-image"
                            width={570}
                            height={582}
                            className="rounded-xl w-full h-full transition-all duration-300"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
