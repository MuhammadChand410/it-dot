import { useState } from "react";
import { TickIcon } from "../../assets/icon";
import { Automate } from "../../assets/images";
import Button from "../../commponent/common/header/button";

export default function ThatWorks() {

    const [activeTab, setActiveTab] = useState(1);

    const WORKS_BUTTON = [
        { id: 1, text: 'Automate Workflows' },
        { id: 2, text: 'Capture Data' },
        { id: 3, text: 'Surface Insights' },
    ];

    const CONTENT = {
        1: {
            title: "Automate your workflow, right inside your inbox",
            highlight: "Automate",
            desc: "Free your team from repetitive, manual tasks by letting dot.it’s AI handle the busywork so they can focus on closing deals.",
            points: [
                "Automatically log emails, meetings, and notes to your CRM",
                "Automatically log emails, meetings, and notes to your CRM",
                "Sync data across platforms without manual entry",
                "Reduce errors and save hours every week"
            ]
        },
        2: {
            title: "Capture sales data and make it work for you",
            highlight: "Capture",
            desc: "Make every client interaction count by automatically capturing, transcribing and summarizing key data points.",
            points: [
                "Allow dot.it to record conversations from all touchpoints",
                "Turn every discussion into usable data your team can act on",
                "Share key takeaways and complete context with minimal effort",
            ]
        },
        3: {
            title: "Turn your data into smarter revenue decisions",
            highlight: "Turn",
            desc: "Harness actionable insights to optimize your strategy, identify trends, address challenges, and drive results.",
            points: [
                "Understand email content and CRM data to reveal key opportunities",
                "dot.it recommends actions automatically, thinking like a top-performing rep",
                "Surface insights that drive decisions without manual analysis",
            ]
        }
    };

    return (
        <section className="py-8 md:py-20">
            <div className="container">

                <div className="grid justify-center pb-10 md:pb-15">
                    <h2 className="text-4xl font-semibold text-[#141219] text-center pb-10">
                        AI that works where you work
                    </h2>
                    <div className="bg-[#F9FAFB] overflow-auto shadow-xs px-2 py-2 rounded-4xl max-w-[616px] flex justify-between">
                        {WORKS_BUTTON.map((card) => (
                            <button
                                key={card.id}
                                onClick={() => setActiveTab(card.id)}
                                className={`whitespace-nowrap text-base cursor-pointer font-semibold px-6  py-2 rounded-4xl transition-all
                                    ${activeTab === card.id
                                        ? "text-[#012246] bg-white shadow-sm"
                                        : "text-[#667085]"
                                    }`}
                            >
                                {card.text}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 items-center 
                    md:grid-cols-[minmax(100px,550px)_minmax(100px,620px)]
                    gap-13">

                    <div>
                        <h3 className="text-4xl font-semibold text-[#141219] max-w-[438px] pb-6">
                            <span className="text-[#0160C9]">
                                {CONTENT[activeTab].highlight}
                            </span>{" "}
                            {CONTENT[activeTab].title.replace(CONTENT[activeTab].highlight, "")}
                        </h3>

                        <p className="text-lg font-normal text-[#141219] pb-6">
                            {CONTENT[activeTab].desc}
                        </p>

                        <div className="grid pb-6 gap-4">
                            {CONTENT[activeTab].points.map((text, index) => (
                                <div className="flex items-start gap-2" key={index}>
                                    <TickIcon />
                                    <p className="text-base font-normal text-[#141219]">{text}</p>
                                </div>
                            ))}
                        </div>
                        <Button text={`Get Started`}/>
                    </div>


                    <div>
                        <video
                            src={Automate}
                            width={620}
                            height={550}
                            className="rounded-xl"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
