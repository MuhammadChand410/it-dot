import { useState } from "react";
import { CrmFive, CrmFour, CrmImage, CrmImagee, CrmThree } from "../../assets/images";
import HeadDesc from "../../commponent/common/header/heading-para";

export default function DotDifference() {

    const [activeId, setActiveId] = useState(1);

    const CRM_IMAGES = {
        1: CrmImage,
        2: CrmImagee,
        3: CrmThree,
        4: CrmFour,
        5: CrmFive,
    };

    const VALUE_CRM = [
        {
            id: 1,
            head: 'Revenue Impact',
            desc: 'Designed for the entire revenue team, dot.it understands your pipeline and delivers insights for consistent engagement.'
        },
        {
            id: 2,
            head: 'User-Centric Vision',
            desc: 'Every facet of dot.it is designed with the user s journey in mind, creating an intuitive experience to navigating through your sales.'
        },
        {
            id: 3,
            head: 'Seamless Synergy',
            desc: 'No more searching for email attachments. Drag and drop files directly into dot.it and allow dot.it s AI to sort items accordingly.'
        },
        {
            id: 4,
            head: 'Innovative AI',
            desc: 'Save hours of digging through conversations with dot.it AI’s ability to recall specific details, provide next step, and AI Reply.'
        },
        {
            id: 5,
            head: 'Beyond Conventional',
            desc: 'Stay informed with the latest company news, empowering your  team with relevant information for more effective engagements.'
        },
    ];

    return (
        <section className="bg-[#FAFAFA] py-8 md:py-20">
            <div className="container">
                <div className="flex justify-center">
                    <HeadDesc
                        heading={`The dot.it difference`}
                        classNamehead={`!pb-4 !text-center`}
                        desc={`Not just doing things different but doing them better and smarter for every user.`}
                        classNameDesc={`!text-center !pb-15`}
                    />
                </div>

                <div className="grid grid-cols-1 items-center md:grid-cols-[minmax(100px,482px)_minmax(100px,751px)] gap-11">

                    <div className="grid gap-6">
                        {VALUE_CRM.map((card) => (
                            <div
                                key={card.id}
                                onClick={() => setActiveId(card.id)}
                                className={`py-3 shadow-xs cursor-pointer px-6 rounded-3xl text-left transition 
                                    ${activeId === card.id
                                        ? "bg-[#D9E7F7]"
                                        : "bg-[#FFF]"
                                    }
                                `}
                            >
                                <h2 className="text-[#141219] text-lg font-medium pb-2">{card.head}</h2>
                                <p className="text-[#414651] text-sm font-normal">{card.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div>
                        <img
                            src={CRM_IMAGES[activeId]}
                            alt="crm-image"
                            width={767}
                            height={520}
                            className="rounded-xl transition-all duration-300"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
