import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon, ArrowwIcon, SearchIcon } from "../../assets/icon";
import { AutomatingImage, BoostingImage, CreatingImage, EnhancingImage, ReducingImage, RevolutiozingImage, StreameningImage, TransformingImage } from "../../assets/images";
import { Link } from "react-router-dom";

export default function CaseStudiesIndustry({ totalPages = 10 }) {
    const [currentPage, setCurrentPage] = useState(3);
    const [activeListing, setActiveListing] = useState(1);

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const BLOGS_LISTING = [
        { id: 1, text: 'All' },
        { id: 2, text: 'Finance' },
        { id: 3, text: 'Telecommunication' },
        { id: 4, text: 'Automotive' },
        { id: 5, text: 'Market Research' },
        { id: 6, text: 'Manufacturing' },
        { id: 7, text: 'Legal' },
        { id: 8, text: 'Aviation' },
        { id: 9, text: 'Consulting' },
        { id: 10, text: 'Anyone using email and CRM' },
    ];

    const TECHNOLOGYY_IMAGEE = [
        {
            id: 1,
            thumbnaill: TransformingImage,
            textt: 'dot.it • 15 October 2025',
            titlee: 'Transforming Marketing Campaigns with AdVision for BrandHive',
            descc: 'JavaScript frameworks make development easy with extensive features and functionalities.',
            spann: '#technology',
            path:'/transforming'
        },
        {
            id: 2,
            thumbnaill: EnhancingImage,
            textt: 'dot.it • 12 October 2025',
            titlee: 'Enhancing Customer Experience with OmniChannel CRM for Retailify',
            descc: 'JavaScript frameworks make development easy with extensive features and functionalities.',
            spann: '#Design',
            path:'/enhancing'
        },
        {
            id: 3,
            thumbnaill: BoostingImage,
            textt: 'dot.it • 10 October 2025',
            titlee: 'Boosting Cybersecurity with SecureGuard for FinServe Enterprises',
            descc: 'JavaScript frameworks make development easy with extensive features and functionalities.',
            spann: '#Design',
            path:'/boosting'
        },
        {
            id: 4,
            thumbnaill: AutomatingImage,
            textt: 'dot.it • 8 October 2025',
            titlee: 'Automating HR Tasks with PeopleSuite for NextGen Corp',
            descc: 'JavaScript frameworks make development easy with extensive features and functionalities.',
            spann: '#Design',
            path:'/automating'
        },
        {
            id: 5,
            thumbnaill: ReducingImage,
            textt: 'dot.it • 5 October 2025',
            titlee: 'Reducing Processing Time with FinTech Custom Solution for GreenBank',
            descc: 'JavaScript frameworks make development easy with extensive features and functionalities.',
            spann: '#Design',
            path:'/reducing'
        },
        {
            id: 6,
            thumbnaill: CreatingImage,
            textt: 'dot.it • 3 October 2025',
            titlee: 'Creating Custom AI Analytics Tools for AdSmart Media',
            descc: 'JavaScript frameworks make development easy with extensive features and functionalities.',
            spann: '#Design',
            path:'/creating'
        },
        {
            id: 7,
            thumbnaill: StreameningImage,
            textt: 'dot.it • 5 October 2025',
            titlee: 'Streamlining Logistics with RoutePro: A Custom Delivery Tracking Tool',
            descc: 'JavaScript frameworks make development easy with extensive features and functionalities.',
            spann: '#Design',
            path:'/streamlining'
        },
        {
            id: 8,
            thumbnaill: RevolutiozingImage,
            textt: 'dot.it • 3 October 2025',
            titlee: 'Revolutionizing Education Platforms with EduLearn for BrightFuture Academy',
            descc: 'JavaScript frameworks make development easy with extensive features and functionalities.',
            spann: '#Design',
            path:'/revolutionizing'
        },
    ];


    const getCardIndex = (listingId) => {
        if (listingId >= 2 && listingId <= 7) return listingId - 2;
        if (listingId === 8) return 0;
        if (listingId === 9) return 1;
        if (listingId === 10) return 0;
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
                    <h2 className="text-4xl font-semibold text-[#141219]">Read by Industry</h2>
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

                <div className="grid md:grid-cols-4 grid-cols-1 pt-6 gap-6 border-b border-gray-200 pb-6">
                    {displayedCards.map((card) => (
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
                                    <h3 className="text-lg text-[#101828] font-medium grow line-clamp-2">{card.titlee}</h3>
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