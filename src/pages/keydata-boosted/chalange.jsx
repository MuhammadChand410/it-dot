import { title } from "framer-motion/client"

export default function Challange() {
    const CHALLENGE = [
        {
            id: 1,
            title: 'Challenge',
            titleClass: "text-3xl font-semibold pb-4",
            desc: 'Before Dot.it, KeyData’s sales representatives were spending hours every week manually logging emails, meetings, and deal updates into their CRM. Important follow-ups were slipping through the cracks, and collaboration between sales and customer success teams often required endless email threads.',
        },
        {
            id: 2,
            title: "Key problems included:",
            titleClass: "text-xl font-semibold pb-4",
            desc: [
                "Time lost switching between inbox, CRM, and scheduling tools Key problems gghllk",
                "Missed follow-ups due to manual task tracking",
                "Inconsistent reporting and outdated CRM data",
            ],
        },
        {
            id: 3,
            title: 'Solutions',
            titleClass: "text-2xl font-semibold pb-4",
            desc: 'KeyData implemented Dot.it to unify its entire sales process directly within the inbox. The platform’s AI automatically synced communication data, summarized conversations, and created deal updates in real time.',
        },
        {
            id: 4,
            title: 'Inbox-as-a-CRM:',
            titleClass: "text-lg font-medium pb-2",
             desc: ' Reps could update deals, schedule meetings, and log activities without leaving their inbox.',
        },
        {
            id: 5,
            title: 'AI Workflow Automation:',
            titleClass: "text-lg font-medium pb-2",
             desc: 'AI Workflow Automation: Dot.it summarized client conversations and created next-step reminders automatically.',
        },
        {
            id: 6,
            title: 'Seamless CRM Sync:',
            titleClass: "text-lg font-medium pb-2",
             desc: 'Integrated directly with HubSpot to ensure all contact data stayed up to date.',
        },
    ]
    return (
        <section className="bg-white">
            <div className="container">
                <div>
                    {CHALLENGE.map((card =>
                        <div className="flex justify-center pb-8" key={card.id}>
                            <div className="max-w-[660px]">
                                <h2 className={`text-[#181D27] ${card.titleClass}`}>{card.title}</h2>
                
                                {Array.isArray(card.desc) ? (
                                    card.desc.map((text, index) => (
                                        <p
                                            key={index}
                                            className="text-lg font-normal text-[#535862]"
                                        >
                                            {text}
                                        </p>
                                    ))
                                ) : (
                                    <p className="text-lg font-normal text-[#535862]">
                                        {card.desc}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}