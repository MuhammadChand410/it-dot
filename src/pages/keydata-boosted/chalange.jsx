import { FacebookIcon, LinkdennIcon, TwiterIcon } from "../../assets/icon"
import { Link } from "react-router-dom"

export default function Challange() {

    const CHALLENGE_CARD = [
        {
            id: 1,
            title: '$500K',
            text: 'Investment'
        },
        {
            id: 2,
            title: '2.4x',
            text: 'Efficiency gains in 1 years'
        },
        {
            id: 3,
            title: '2.4x',
            text: 'Efficiency gains in 1 years'
        },
    ]

    const CASESTUDYDATA = [
        {
            id: 1,
            challenge: {
                title: "Challenge:",
                description:
                    "Before Dot.it, KeyData’s sales representatives were spending hours every week manually logging emails, meetings, and deal updates into their CRM. Important follow-ups were slipping through the cracks, and collaboration between sales and customer success teams often required endless email threads.",
            },
            problems: {
                title: "Key problems included:",
                list: [
                    "Time lost switching between inbox, CRM, and scheduling tools",
                    "Missed follow-ups due to manual task tracking",
                    "Inconsistent reporting and outdated CRM data",
                ],
            },
            solution: {
                title: "Solutions:",
                description:
                    "KeyData implemented Dot.it to unify its entire sales process directly within the inbox. The platform’s AI automatically synced communication data, summarized conversations, and created deal updates in real time.",
            },
            helped: {
                title: "How Dot.it Helped:",
                items: [
                    {
                        heading: "Inbox-as-a-CRM:",
                        text: "Reps could update deals, schedule meetings, and log activities without leaving their inbox.",
                    },
                    {
                        heading: "AI Workflow Automation:",
                        text: "Dot.it summarized client conversations and created next-step reminders automatically.",
                    },
                    {
                        heading: "Seamless CRM Sync:",
                        text: "Integrated directly with HubSpot to ensure all contact data stayed up to date.",
                    },
                ],
            },
        },
    ];

    return (
        <section className="bg-white md:pb-24 pb-8">
            <div className="container">

                <div className="grid justify-center">
                    {CASESTUDYDATA.map((card) => (
                        <div className="max-w-[720px]" key={card.id}>

                            <div className="pb-8">
                                <h2 className="text-3xl font-semibold text-[#181D27] pb-5">
                                    {card.challenge.title}
                                </h2>
                                <p className="text-lg text-[#535862]">
                                    {card.challenge.description}
                                </p>
                            </div>

                            <div className="pb-8">
                                <h2 className="text-2xl font-semibold text-[#181D27] pb-4">
                                    {card.problems.title}
                                </h2>

                                <ul className="list-disc pl-6 space-y-2">
                                    {card.problems.list.map((item, index) => (
                                        <li key={index} className="text-lg text-[#535862]">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pb-8">
                                <h2 className="text-3xl font-semibold text-[#181D27] pb-4">
                                    {card.solution.title}
                                </h2>
                                <p className="text-lg text-[#535862]">
                                    {card.solution.description}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold text-[#181D27] pb-4">
                                    {card.helped.title}
                                </h3>

                                {card.helped.items.map((item, index) => (
                                    <div key={index} className="pb-4">
                                        <h4 className="text-lg font-medium text-[#181D27] pb-2">
                                            {item.heading}
                                        </h4>
                                        <p className="text-lg text-[#535862]">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid justify-center">
                    <div className="grid md:grid-cols-3 grid-cols-1 max-w-[720px] py-6 gap-8">
                        {CHALLENGE_CARD.map((card =>
                            <div className="px-6 py-6 bg-[#F5F5F5] rounded-xl" key={card.id}>
                                <h2 className="text-2xl font-semibold text-[#014DA1] pb-4">{card.title}</h2>
                                <p className="text-base font-normal text-[#535862]">{card.text}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-[#181D27] pb-2">Value Added:</h3>
                        <p className="text-base font-normal text-[#181D27]">Increased financial transparency and measurable ROI of 2.4x</p>
                        <div className="py-6">
                            <h4 className="text-xl font-semibold txet-[#181D27] pb-6">Share Blog</h4>
                            <div className="flex items-center gap-3">
                                <Link
                                    to="https://www.linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <LinkdennIcon />
                                </Link>

                                <Link
                                    to="https://www.facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                >
                                    <FacebookIcon />
                                </Link>

                                <Link
                                    to="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Twitter"
                                >
                                    <TwiterIcon />
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}