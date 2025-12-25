
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Faqs() {

    const { hash } = useLocation();
    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [hash]);

   
   
    const [openId, setOpenId] = useState(null);
    const toggleFaq = (id) => {
        setOpenId(openId === id ? null : id);
    };

    const faqs = [
        {
            id: 1,
            question: "What is dot.it?",
            answer:
                "dot.it is an AI engagement platform specially designed to automate your workflows so your team can sell smarter. The result: every interaction is informed, faster, and more personalized.",
        },
        {
            id: 2,
            question: "How does dot.it integrate with my current CRM tools?",
            answer:
                "dot.it seamlessly integrates with popular CRM platforms through APIs and native connectors, ensuring smooth data flow and workflow automation.",
        },
        {
            id: 3,
            question: "Who is dot.it designed for?",
            answer:
                "dot.it is designed for sales teams, customer success managers, and revenue operations professionals who want to automate repetitive tasks and focus on high-value activities.",
        },
        {
            id: 4,
            question: "What tasks can dot.it automate?",
            answer:
                "dot.it can automate email sequences, data entry, lead scoring, follow-up reminders, CRM updates, and personalized outreach campaigns.",
        },
        {
            id: 5,
            question: "What makes dot.it different from other CRM tools?",
            answer:
                "dot.it focuses specifically on AI-powered automation and personalization, making it more intelligent and adaptive than traditional CRM tools.",
        },

    ];
    return (
        <section className="bg-gray-50 md:py-20 py-8" id="faqs">
            <div className="container">
                <div className="grid place-items-center w-full">
                    <div className="max-w-[692px] w-full grid gap-4">
                        <div>
                            <h2 className="text-4xl text-center font-semibold text-[#141219] pb-4">Frequently Asked Questions</h2>
                            <p className="text-lg text-center max-w-[590px] mx-auto font-normal text-[#141219] md:pb-6 pb-0">Start with dot.it and watch every email become an opportunity and every lead a seamless sale.  Embrace the future of sales management.</p>
                        </div>
                        {faqs.map((faq) => (
                            <div
                                key={faq.id}
                                className="border rounded-xl shadow-sm border-gray-200 bg-white p-4 transition-all cursor-pointer"
                            >

                                <div
                                    className="flex items-center justify-between"
                                    onClick={() => toggleFaq(faq.id)}
                                >
                                    <h2 className="text-lg font-medium text-[#141219] w-full">{faq.question}</h2>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className={`w-5 h-5 transition-transform ${openId === faq.id ? "rotate-180" : ""
                                            }`}
                                    >
                                        {openId === faq.id ? (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M5 12h14"
                                            />
                                        ) : (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 5v14m-7-7h14"
                                            />
                                        )}
                                    </svg>
                                </div>

                                {openId === faq.id && (
                                    <p className="text-base text-[#414651] mt-2">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}