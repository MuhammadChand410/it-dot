import { TickCircalIcon } from "../../assets/icon";

export default function PrincingCard() {
    const TICKDESC = [
        {
            id: 1,
            text: 'Monthly Billing Cycle'
        },
        {
            id: 2,
            text: 'Flexible'
        },
        {
            id: 3,
            text: 'No Long-Term Commitment'
        },
    ]
    const PRINCING_CARDS = [
        {
            id: 1,
            title: "Monthly Subscription",
            text: "#80",
            desc: "Per user/month, billed monthly",
            heading: "For individuals and small teams:",
            button: "Get Started",
            ticks: [
                { id: 1, text: "Monthly Billing Cycle" },
                { id: 2, text: "Flexible" },
                { id: 3, text: "No Long-Term Commitment" }
            ]
        },
        {
            id: 2,
            title: "Annual Subscription",
            text: "#70",
            desc: "Per user/month, billed monthly",
            heading: "For growing teams:",
            button: "Get Started",
            ticks: [
                { id: 1, text: "Annual Billing Cycle" },
                { id: 2, text: "Cost-Effective for Sustainable use" },
                { id: 3, text: "Priority Customer Support" }
            ]
        },
        {
            id: 3,
            title: "Enterprise Plan",
            text: "Custom",
            desc: "Custom Pricing",
            heading: "For scaling and larger teams:",
            button: "Contact Sales",
            ticks: [
                { id: 1, text: "Negotiable Billing Cycle" },
                { id: 2, text: "Scalable Custom Solutions" },
                { id: 3, text: "Priority Customer Support" }
            ]
        }
    ];

    return (
        <section className="md:py-20 py-8 bg-white">
            <div className="container">
                <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                    {PRINCING_CARDS.map((card =>
                        <div className="group flex flex-col justify-between border border-[#E6E6E6] rounded-2xl px-7 py-7 bg-white transition-all duration-300
                                  hover:border-[#0160C9] hover:shadow-[0_10px_30px_rgba(1,96,201,0.25)]" key={card.id}>
                            <div>
                                <h2 className="text-2xl font-medium text-black pb-8">{card.title}</h2>
                                <h3 className="text-4xl font-semibold text-[#181D27] pb-1">{card.text}</h3>
                                <p className="text-base font-normal text-[#575757] pb-8">{card.desc}</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-medium text-[#100F11] pb-4">{card.heading}</h4>
                                <div className="pb-8">
                                    {card.ticks.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex gap-2 items-center pb-2.5"
                                        >
                                            <TickCircalIcon />
                                            <p className="text-lg font-normal text-[#575757]">
                                                {item.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    className="px-5 w-full py-2.5 border border-[#0160C9] rounded-full text-base font-medium text-[#0160C9] transition-all duration-300 group-hover:bg-[#0160C9] group-hover:text-white">
                                    {card.button}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}