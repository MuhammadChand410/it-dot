import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon, ArrowwIcon, SearchIcon } from "../../assets/icon";
import { BlogBillImage } from "../../assets/images";

export default function Blog({ totalPages = 10 }) {
    const [currentPage, setCurrentPage] = useState(3);
    const [activeListing, setActiveListing] = useState(1);

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const BLOGS_LISTING = [
        { id: 1, text: 'All' },
        { id: 2, text: 'AI / Technology' },
        { id: 3, text: 'Automation' },
        { id: 4, text: 'Data' },
        { id: 5, text: 'Productivity' },
        { id: 6, text: 'Engagement' },
        { id: 7, text: 'Strategy' },
        { id: 8, text: 'Intelligence' },
        { id: 9, text: 'Sales' },
    ];

    const TECHNOLOGYY_IMAGEE = [
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
            thumbnaill: BlogBillImage,
            textt: 'dot.it • 12 October 2025',
            titlee: 'PM mental models',
            descc: 'JavaScript frameworks make development easy with extensive features and functionalities.',
            spann: '#Design',
        },
        {
            id: 3,
            thumbnaill: BlogBillImage,
            textt: 'dot.it • 10 October 2025',
            titlee: 'What is Wireframing?',
            descc: 'JavaScript frameworks make development easy with extensive features and functionalities.',
            spann: '#Design',
        },
        {
            id: 4,
            thumbnaill: BlogBillImage,
            textt: 'dot.it • 8 October 2025',
            titlee: 'Our top 10 Javascript frameworks to use',
            descc: 'JavaScript frameworks make development easy with extensive features and functionalities.',
            spann: '#Design',
        },
        {
            id: 5,
            thumbnaill: BlogBillImage,
            textt: 'dot.it • 5 October 2025',
            titlee: 'Our top 10 Javascript frameworks to use',
            descc: 'JavaScript frameworks make development easy with extensive features and functionalities.',
            spann: '#Design',
        },
        {
            id: 6,
            thumbnaill: BlogBillImage,
            textt: 'dot.it • 3 October 2025',
            titlee: 'Our top 10 Javascript frameworks to use',
            descc: 'JavaScript frameworks make development easy with extensive features and functionalities.',
            spann: '#Design',
        },
    ];


    const getCardIndex = (listingId) => {
        if (listingId >= 2 && listingId <= 7) return listingId - 2;
        if (listingId === 8) return 0;
        if (listingId === 9) return 1;
        return null;
    };

    const displayedCards =
        activeListing === 1
            ? TECHNOLOGYY_IMAGEE
            : [TECHNOLOGYY_IMAGEE[getCardIndex(activeListing)]];

    return (
        <section className="md:py-20 py-8">
            <div className="container">
                <div className="flex flex-col md:flex-row gap-4 justify-between pb-8">
                    <h2 className="text-4xl font-semibold text-[#141219]">Blogs</h2>
                    <div className="flex gap-2 max-w-[350px] items-center border border-gray-200 shadow-sm rounded-2xl bg-white py-3.5 px-5.5">
                        <SearchIcon />
                        <input
                            type="text"
                            name="search"
                            placeholder="Search for news or articles"
                            className="outline-none text-base font-normal text-[#AAAAAA] max-w-[294px]"
                        />
                    </div>
                </div>

                <ul className="overflow-auto flex gap-5  border-b border-gray-200">
                    {BLOGS_LISTING.map((listing) => (
                        <li
                            key={listing.id}
                            className={`whitespace-nowrap text-base font-medium cursor-pointer pb-3 ${activeListing === listing.id
                                    ? "text-[#005BAA] border-b-3 border-[#005BAA]"
                                    : "text-[#667085]"
                                }`}
                            onClick={() => setActiveListing(listing.id)}
                        >
                            {listing.text}
                        </li>
                    ))}
                </ul>

                <div className="grid md:grid-cols-3 grid-cols-1 pt-6 gap-6 border-b border-gray-200 pb-6">
                    {displayedCards.map((card) => (
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

                <div className="flex overflow-auto gap-6 justify-between items-center py-6">
                    <button
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="flex items-center gap-1 cursor-pointer px-3 py-2 border border-gray-200 rounded-full text-[#344054] text-sm disabled:opacity-40"
                    >
                        <ArrowLeftIcon />
                        Previous
                    </button>

                    <div className="flex gap-0.5 font-medium text-sm">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => goToPage(page)}
                                className={`px-4 py-2.5 cursor-pointer rounded-lg ${currentPage === page
                                    ? "bg-gray-100 text-[#0160C9] font-medium"
                                    : "text-[#788393] hover:bg-gray-200"
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="flex items-center gap-1 px-3 cursor-pointer py-2 border border-gray-200 rounded-full text-[#344054] text-sm disabled:opacity-40"
                    >
                        Next
                        <ArrowRightIcon />
                    </button>
                </div>
            </div>
        </section>
    );
}
