import { useState } from "react";
import { IndustryImage } from "../../assets/images";

export default function FaqsSection() {
    const [openId, setOpenId] = useState(null);

    const toggleFaq = (id) => {
        setOpenId(openId === id ? null : id);
    };

    const faqs = [
        {
            id: 1,
            question: "Finance",
            answer:
                "dot.it supports telecom providers selling enterprise packages by tracking every stakeholder conversation across IT, procurement, and operations to predict which accounts are ready to upgrade bandwidth or switch plans.",
        },
        {
            id: 2,
            question: "Telecommunication",
            answer:
                "dot.it supports telecom providers selling enterprise packages by tracking every stakeholder conversation across IT, procurement, and operations to predict which accounts are ready to upgrade bandwidth or switch plans.",
        },
        {
            id: 3,
            question: "Automotive",
            answer:
                "dot.it supports telecom providers selling enterprise packages by tracking every stakeholder conversation across IT, procurement, and operations to predict which accounts are ready to upgrade bandwidth or switch plans.",
        },
        {
            id: 4,
            question: "Market Research",
            answer:
                "dot.it supports telecom providers selling enterprise packages by tracking every stakeholder conversation across IT, procurement, and operations to predict which accounts are ready to upgrade bandwidth or switch plans.",
        },
        {
            id: 5,
            question: "Manufacturing & Construction",
            answer:
                "dot.it supports telecom providers selling enterprise packages by tracking every stakeholder conversation across IT, procurement, and operations to predict which accounts are ready to upgrade bandwidth or switch plans.",
        },
        {
            id: 6,
            question: "Legal",
            answer:
                "dot.it supports telecom providers selling enterprise packages by tracking every stakeholder conversation across IT, procurement, and operations to predict which accounts are ready to upgrade bandwidth or switch plans.",
        },
        {
            id: 7,
            question: "Aviation",
            answer:
                "dot.it supports telecom providers selling enterprise packages by tracking every stakeholder conversation across IT, procurement, and operations to predict which accounts are ready to upgrade bandwidth or switch plans.",
        },
        {
            id: 8,
            question: "Consulting",
            answer:
                "dot.it supports telecom providers selling enterprise packages by tracking every stakeholder conversation across IT, procurement, and operations to predict which accounts are ready to upgrade bandwidth or switch plans.",
        },
        {
            id: 9,
            question: "Anyone using CRM + Email",
            answer:
                "dot.it supports telecom providers selling enterprise packages by tracking every stakeholder conversation across IT, procurement, and operations to predict which accounts are ready to upgrade bandwidth or switch plans.",
        },
    ];

    return (
        <section className="md:py-20 py-10 bg-white">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-[minmax(100px,610px)_minmax(100px,610px)] gap-15">
                    <div className="">
                        <img
                            src={IndustryImage}
                            alt="industry-image"
                            width={610}
                            height={629}
                            loading="lazy"
                            className="rounded-xl"
                        />
                    </div>

                    <div>
                        <div className="">
                            {faqs.map((faq) => (
                                <div
                                    key={faq.id}
                                    className="border-b border-gray-200 p-4  transition-all cursor-pointer"
                                >
                                    <div
                                        className="flex items-center justify-between"
                                        onClick={() => toggleFaq(faq.id)}
                                    >
                                        <h2 className="text-lg font-medium text-[#141219]">{faq.question}</h2>

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
            </div>
        </section>
    );
}
