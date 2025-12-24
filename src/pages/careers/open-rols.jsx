import Button from "../../commponent/common/header/button";

export default function OpenRols() {
    const OPEN_ROLES = [
        {
            id: 1,
            heading: 'Account Manager',
            desc: "Own and grow customer relationships by driving adoption, uncovering expansion opportunities, and ensuring long-term account success.",
        },
         {
            id: 2,
            heading: 'Client Development Director',
            desc: "Lead strategic outreach to high-value prospects, build enterprise-level partnerships, and accelerate revenue growth through consultative selling.",
        },
         {
            id: 3,
            heading: 'Business Development Manager',
            desc: "Identify new markets, generate pipeline, and convert qualified opportunities through proactive prospecting and solution-focused engagement.",
        },
         {
            id: 4,
            heading: 'Lead Developer',
            desc: "Architect and guide the technical roadmap while overseeing development execution, ensuring scalable, high-performance product delivery.",
        },
         {
            id: 5,
            heading: 'AI Developer',
            desc: "Design, train, and optimize AI models that power intelligent workflows, predictive insights, and frictionless user experiences across the platform.",
        },
    ]
    return (
        <section className="md:py-20 py-8 bg-white">
            <div className="container">
                <h2 className="text-3xl font-semibold text-[#141219] md:pb-10 pb-5">Open Roles</h2>
                <div className="grid gap-6">
                    {OPEN_ROLES.map((card =>
                        <div className="flex flex-col pb-8 md:flex-row justify-between gap-3 md:gap-8 items-start md:items-center border-b border-[#E6E9ED]" key={card.id}>
                            <div className="">
                                <h3 className="text-2xl font-medium text-[#141219] pb-2">{card.heading}</h3>
                                <p className="text-base font-medium text-[#777B8B] max-w-[675px]">{card.desc}</p>
                            </div>
                            <Button text={`Apply`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}