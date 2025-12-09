import { useState } from "react";
import { CrmTeam, LeadershipImage, OperationImage, RevanueTeam } from "../../assets/images";

export default function RevenueTeams() {

    const [activeTab, setActiveTab] = useState(1);

    const WORKS_BUTTON = [
        {
            id: 1,
            text: 'Revenue Teams'
        },
        {
            id: 2,
            text: 'Customer Success'
        },
        {
            id: 3,
            text: 'Operations'
        },
        {
            id: 4,
            text: 'Leadership'
        },
    ];

    const CONTENT = {
        1: {
            title: "Revenue Teams",
            desc: "Automate data capture, email follow ups and CRM updates so reps can focus more on selling, all in one place.",
            image: RevanueTeam,
        },
        2: {
            title: "Customer Success",
            desc: "Keep every client interaction logged and insights actionable., so you can easily anticipate, track touchpoints, and deliver seamless service.",
            image: CrmTeam,
        },
        3: {
            title: "Operations",
            desc: "Optimize your operations with clean, connected data. dot.it cuts the manual steps and gives you dependable reporting and planning at your fingertips.",
            image: OperationImage,
        },
        4: {
            title: "Leadership",
            desc: "Have complete visibility into your team’s pipeline, performance, and forecasting with data you can use to drive decisions that sharpen your strategy for sustained growth.",
            image: LeadershipImage,
        }
    };

    return (
        <section className="py-8 md:py-20 bg-[#E6EFFA]">
            <div className="container">
                <div className="grid justify-center pb-10 md:pb-15">
                    <div className="bg-[#F9FAFB] overflow-auto shadow-xs px-2 py-2 rounded-4xl max-w-[500px] md:max-w-[716px] flex justify-between">
                        {WORKS_BUTTON.map((card) => (
                            <button
                                key={card.id}
                                onClick={() => setActiveTab(card.id)}
                                className={`whitespace-nowrap text-base cursor-pointer font-semibold px-6 py-2 rounded-4xl transition-all
                                    ${activeTab === card.id
                                        ? "text-[#012246] bg-white shadow-sm"
                                        : "text-[#667085]"
                                    }`} >
                                {card.text}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 items-center justify-center 
                    md:grid-cols-[minmax(100px,469px)_minmax(100px,450px)]
                    gap-8">
                    <div className="max-w-[496px]">
                        <h3 className="text-4xl font-semibold text-[#141219] pb-4">
                            {CONTENT[activeTab].title}
                        </h3>
                        <p className="text-2xl leading-8 font-normal text-[#535862] pb-6">
                            {CONTENT[activeTab].desc}
                        </p>
                    </div>
                    <div>
                        <img
                            src={CONTENT[activeTab].image}
                            alt="tab-image"
                            width={457}
                            height={476}
                            className="rounded-xl transition-all duration-300"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
