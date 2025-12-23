import { Link } from "react-router-dom";
import { BlogBillImage, CaseStudiesImage } from "../../../assets/images";
import HeroTitle from "../single-blog/hero-title";
import { ArrowwIcon, FacebookIcon, HomeIcon, LinkdennIcon, TwiterIcon } from "../../../assets/icon";

export default function CaseStudiesCommon({ tittle, herotitle }) {
    const HERO_HEADINGBTN = (herotitle) => [
        { id: 1, text: "/" },
        { id: 2, text: "Case Studies", path: "/case/studies" },
        { id: 3, text: "/" },
        {
            id: 4,
            component: <HeroTitle herotitle={herotitle} />,
        },
    ];

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
    ];

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

    const READMORE_IMAGEE = [
        {
            id: 1,
            thumbnaill: BlogBillImage,
            textt: 'dot.it • 15 October 2025',
            titlee: 'Enhancing Customer Experience with OmniChannel CRM for Retailify',
            descc: 'JavaScript frameworks make development easy with extensive features and functionalities.',
            spann: '#technology',
            path: '/enhancing'
        },
        {
            id: 2,
            thumbnaill: BlogBillImage,
            textt: 'dot.it • 12 October 2025',
            titlee: 'Boosting Cybersecurity with SecureGuard for FinServe Enterprises',
            descc: 'JavaScript frameworks make development easy with extensive features and functionalities.',
            spann: '#Design',
            path: '/boosting'
        },
        {
            id: 3,
            thumbnaill: BlogBillImage,
            textt: 'dot.it • 10 October 2025',
            titlee: 'Automating HR Tasks with PeopleSuite for NextGen Corp',
            descc: 'JavaScript frameworks make development easy with extensive features and functionalities.',
            spann: '#Design',
            path: '/automating'
        },
        {
            id: 4,
            thumbnaill: BlogBillImage,
            textt: 'dot.it • 10 October 2025',
            titlee: 'Reducing Processing Time with FinTech Custom Solution for GreenBank',
            descc: 'JavaScript frameworks make development easy with extensive features and functionalities.',
            spann: '#Design',
            path: '/reducing'
        },
    ];
    return (
        <>
            <section className="relative md:pb-20 pb-8">
                <div className="w-full">
                    <img
                        src={CaseStudiesImage}
                        alt="case-studies-image"
                        loading="lazy"
                        className="w-full object-cover h-[220px] sm:h-[300px] md:h-[400px]"
                    />
                </div>
                <div className="absolute top-0 left-0 flex items-center h-full">
                    <div className="container pb-8 md:pb-16">
                        <div className="flex items-center gap-2 pb-3">
                            <Link to="/">
                                <HomeIcon />
                            </Link>

                            {HERO_HEADINGBTN(herotitle).map((card) =>
                                card.path ? (
                                    <Link to={card.path} key={card.id}>
                                        <p className="text-sm font-medium text-[#A4A7AE] hover:text-[#0160C9]">
                                            {card.text}
                                        </p>
                                    </Link>
                                ) : (
                                    <div key={card.id}>
                                        {card.component || (
                                            <p className="text-sm font-medium text-[#A4A7AE] max-w-[152px] overflow-hidden text-ellipsis whitespace-nowrap">
                                                {card.text}
                                            </p>
                                        )}
                                    </div>
                                )
                            )}
                        </div>

                        <h2 className="text-3xl md:text-5xl md:leading-15 leading-8 font-semibold text-white max-w-[808px] mx-auto">
                            {tittle}
                        </h2>
                    </div>
                </div>
            </section>

            <section className="bg-white md:pb-24 pb-8">
                <div className="container">
                    <div className="">
                        {CASESTUDYDATA.map((card) => (
                            <div className="max-w-[870px]" key={card.id}>

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

                    <div className="">
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

            <section className="bg-white md:py-20 py-8">
                <div className="container">
                    <div>
                        <h2 className="text-4xl font-semibold text-[#141219] pb-8 md:pb-16 text-center">Read More Case Studies</h2>
                    </div>
                    <div className="grid md:grid-cols-4 grid-cols-1 gap-6 pb-6">
                        {READMORE_IMAGEE.map((card) => (
                            <Link to={card.path}
                                className="px-3 py-3 w-fit h-fit border border-gray-200 rounded-xl"
                                key={card.id}
                            >
                                <div className="w-full h-60 md:h-50 lg:h-60 overflow-hidden rounded-xl">
                                    <img
                                        src={card.thumbnaill}
                                        alt="blog-bill-image"
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="mt-4">
                                    <span className="text-sm font-semibold text-[#0160C9]">
                                        {card.textt}
                                    </span>
                                    <div className="flex items-start gap-4 pb-2 mt-4">
                                        <h3 className="text-lg texxt-[#101828] font-medium grow line-clamp-2">{card.titlee}</h3>
                                        <div className="flex shrink-0">
                                            <ArrowwIcon />
                                        </div>
                                    </div>
                                    <p className="text-sm font-normal text-[#475467] pb-4.5">{card.descc}</p>
                                    <span className="text-sm font-medium text-[#535862] py-0.5 px-1.5 rounded-md border border-gray-200 bg-white">
                                        {card.spann}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}