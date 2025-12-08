import { useState, useEffect, useRef } from "react";
import { LeftIcon, RightIcon, SliderIcon } from "../../assets/icon";
import { GabrialImage, JordanImage, SamanthaImage } from "../../assets/images";
import HeadDesc from "../../commponent/common/header/heading-para";

export default function SliderTeams() {
    const SLIDER_TEAMS = [
        { id: 1, desc: "Our reps used to dread CRM updates — now dot.it does it for them. The AI catches details from every email thread and keeps deals moving without anyone lifting a finger. Productivity is up and our pipeline visibility has never been clearer.", thumbnail: SamanthaImage, title: "Samantha R.", text: "Head of Sales, Banking" },
        { id: 2, desc: "dot.it is like having a personal assistant inside my inbox. It updates our CRM automatically and surfaces insights I didn’t even know I needed. My follow-ups are faster, my notes are accurate, and I’ve saved hours every week.", thumbnail: JordanImage, title: "Jordan M", text: "Account Executive, Automotive" },
        { id: 3, desc: "I love that dot.it lives inside my email. I don’t have to switch tabs or dig through our CRM to find context. It just appears — client history, deal notes, next steps — all in one view. It’s like my inbox finally became intelligent.", thumbnail: GabrialImage, title: "Gabriel W.", text: "Project Manager, Market Research" },
        { id: 4, desc: "I love that dot.it lives inside my email. I don’t have to switch tabs or dig through our CRM to find context. It just appears — client history, deal notes, next steps — all in one view. It’s like my inbox finally became intelligent.", thumbnail: SamanthaImage, title: "Samantha R", text: "Account Executive, Automotive" },
        { id: 5, desc: "I love that dot.it lives inside my email. I don’t have to switch tabs or dig through our CRM to find context. It just appears — client history, deal notes, next steps — all in one view. It’s like my inbox finally became intelligent.", thumbnail: JordanImage, title: "Jordan M.", text: "Project Manager, Market Research" },
    ];

    const sliderRef = useRef(null);
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(3);
    const [cardWidth, setCardWidth] = useState(0);
    const gap = 24;

    const total = SLIDER_TEAMS.length;

    useEffect(() => {
        const handleResize = () => {
            const vis = window.innerWidth < 768 ? 1 : 3;
            setVisible(vis);
            const containerWidth = sliderRef.current?.offsetWidth || 0;
            setCardWidth((containerWidth - (vis - 1) * gap) / vis);
            if (index > total - vis) setIndex(total - vis >= 0 ? total - vis : 0);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [index, total]);

    const nextSlide = () => {
        if (index < total - visible) setIndex(prev => prev + 1);
    };

    const prevSlide = () => {
        if (index > 0) setIndex(prev => prev - 1);
    };

    return (
        <section className="py-8 md:py-20">
            <div className="container">
                <HeadDesc
                    heading="Trusted by teams globally"
                    classNamehead="!pb-4 !text-center"
                    desc="From startups to enterprises, dot.it helps teams save time and close deals faster."
                    classNameDesc="!text-center !pb-15"
                />

                <div ref={sliderRef} className="relative w-full overflow-hidden py-4">
                    <div
                        className="flex gap-6 transition-transform duration-500"
                        style={{
                            transform: `translateX(-${index * (cardWidth + gap)}px)`,
                        }}
                    >
                        {SLIDER_TEAMS.map(card => (
                            <div
                                key={card.id}
                                style={{ width: cardWidth }}
                                className="shrink-0 bg-[#F5F5F5] p-6 rounded-3xl grid gap-4"
                            >
                                <SliderIcon />
                                <p className="text-xl text-[#141219]">{card.desc}</p>

                                <div className="flex items-center gap-3">
                                    <img
                                        src={card.thumbnail}
                                        alt="thumb"
                                        width={50}
                                        height={50}
                                        loading="lazy"
                                    />
                                    <div className="grid gap-2">
                                        <h2 className="text-base font-bold text-[#67646A]">{card.title}</h2>
                                        <p className="text-sm text-[#413D45]">{card.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center gap-3 mt-8">
                    <button
                        onClick={prevSlide}
                        disabled={index === 0}
                        className="cursor-pointer"
                    >
                        <LeftIcon />
                    </button>
                    <button
                        onClick={nextSlide}
                        disabled={index >= total - visible}
                        className="cursor-pointer"
                    >
                        <RightIcon />
                    </button>
                </div>
            </div>
        </section>
    );
}

