import { ArrowwIcon } from "../../assets/icon"
import { BlogBillImage, PmImage, WhatImage } from "../../assets/images"

export default function ReadMore() {
    const READMORE_IMAGEE = [
        {
            id: 1,
            thumbnaill: BlogBillImage,
            textt: 'dot.it • 15 October 2025',
            titlee: 'Bill Walsh leadership lessons',
            descc: 'JavaScript frameworks make development easy with extensive features and functionalities.',
            spann: '#technology',
        },
        {
            id: 2,
            thumbnaill: PmImage,
            textt: 'dot.it • 12 October 2025',
            titlee: 'PM mental models',
            descc: 'JavaScript frameworks make development easy with extensive features and functionalities.',
            spann: '#Design',
        },
        {
            id: 3,
            thumbnaill: WhatImage,
            textt: 'dot.it • 10 October 2025',
            titlee: 'What is Wireframing?',
            descc: 'JavaScript frameworks make development easy with extensive features and functionalities.',
            spann: '#Design',
        },
    ]
    return (
        <section className="bg-white md:py-20 py-8">
            <div className="container">
                <div>
                    <h2 className="text-4xl font-semibold text-[#141219] pb-8 md:pb-16 text-center">Read More Blogs</h2>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-6 pb-6">
                    {READMORE_IMAGEE.map((card) => (
                        <div
                            className="px-3 py-3 w-fit h-fit border border-gray-200 rounded-xl"
                            key={card.id}
                        >
                            <div className="w-full h-60 md:h-64 lg:h-68 overflow-hidden rounded-xl">
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
                                    <h3 className="text-lg texxt-[#101828] font-medium">{card.titlee}</h3>
                                    <div className="flex shrink-0">
                                        <ArrowwIcon />
                                    </div>
                                </div>
                                <p className="text-sm font-normal text-[#475467] pb-4.5">{card.descc}</p>
                                <span className="text-sm font-medium text-[#535862] py-0.5 px-1.5 rounded-md border border-gray-200 bg-white">
                                    {card.spann}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}