import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import { ArrowwIcon, SearchIcon } from "../../assets/icon";
import { FeaturesImage, TechnologyImage } from "../../assets/images";
import { Link } from "react-router-dom";

export default function Articules({ totalPages = 10 }) {

    const [currentPage, setCurrentPage] = useState(3);

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    const TECHNOLOGYY_IMAGEE = [

        {
            id: 1,
            thumbnaill: FeaturesImage,
            textt: 'dot.it • 29 October 2025',
            titlee: 'The Transformative Power of Artificial Intelligence in Today’s World',
            descc: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
            spann: '#technology',
            spann: '#Sales',
        },
    ]
    const TECHNOLOGY_IMAGE = [
        {
            id: 1,
            thumbnail: TechnologyImage,
            text: 'dot.it • 18 September 2025',
            title: 'The Transformative Power of Artificial Intelligence in Today’s World',
            desc: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
            span: '#technology'
        },
        {
            id: 2,
            thumbnail: TechnologyImage,
            text: 'dot.it • 3 September 2025',
            title: 'The Transformative Power of Artificial Intelligence in Today’s World',
            desc: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
            span: '#technology'
        },
    ]
    return (
        <section className="md:py-20 py-8 bg-white">
            <div className="container">
                <div className="border-b border-gray-200 pb-6">
                    <div className="flex flex-col md:flex-row gap-4 justify-between  pb-6">
                        <h2 className="text-4xl font-semibold text-[#141219]">Featured Articles</h2>
                        <div className="flex gap-2 max-w-[350px] items-center border border-gray-200 shadow-sm rounded-2xl bg-white py-3.5 px-5.5">
                            <SearchIcon />
                            <input type="text" name="search" id="" className="outline-none text-base font-normal text-[#AAAAAA] max-w-[294px]" placeholder="Search for news or articles" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-[minmax(100px,492px)_minmax(100px,764px)] gap-6">
                        {TECHNOLOGYY_IMAGEE.map((card =>
                            <Link to={`/key/data/bossted`} className="px-3 py-3 w-fit h-fit border border-gray-200 rounded-xl" key={card.id}>
                                <div
                                    className=" w-full h-[200px] md:h-[242px] overflow-hidden rounded-lg">
                                    <img
                                        src={card.thumbnaill}
                                        alt="technology-image"
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="mt-4">
                                    <span className="text-sm font-semibold text-[#0160C9] ">{card.textt}</span>
                                    <div className="flex items-start gap-4 pb-2 mt-4">
                                        <h3 className="text-lg texxt-[#101828] font-medium">{card.titlee}</h3>
                                        <div className="flex shrink-0">
                                            <ArrowwIcon />
                                        </div>
                                    </div>
                                    <p className="text-sm font-normal text-[#475467] pb-4.5">{card.descc}</p>
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-sm font-medium text-[#535862]  py-0.5 px-1.5 rounded-md border border-gray-200 bg-white">{card.spann}</span>
                                        <span className="text-sm font-medium text-[#535862]  py-0.5 px-1.5 rounded-md border border-gray-200 bg-white">{card.spann}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                        <div className="grid gap-6">
                            {TECHNOLOGY_IMAGE.map((card =>
                                <Link to={`/key/data/bossted`} className="px-3 py-3 border border-gray-200 rounded-xl grid grid-cols-1 md:grid-cols-[minmax(100px,204px)_minmax(100px,420px)] gap-4" key={card.id}>
                                    <div className="w-full h-48 md:h-52 lg:h-52 overflow-hidden rounded-xl">
                                        <img
                                            src={card.thumbnail}
                                            alt="technology-image"
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>

                                    <div className="">
                                        <span className="text-sm font-semibold text-[#0160C9] ">{card.text}</span>
                                        <div className="flex items-start gap-4 pb-2 mt-3">
                                            <h3 className="text-lg texxt-[#101828] font-medium">{card.title}</h3>
                                            <div className="flex shrink-0">
                                                <ArrowwIcon />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-sm font-normal text-[#475467] pb-4 md:pb-8">{card.desc}</p>
                                            <span className="text-sm font-medium text-[#535862]  py-0.5 px-1.5 rounded-md border border-gray-200 bg-white">{card.span}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex overflow-auto gap-6 justify-between items-center py-6">

                    <button
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="flex items-center gap-1 cursor-pointer px-3 py-2 border border-gray-200  rounded-full
                           text-[#344054] text-sm disabled:opacity-40"
                    >
                        <ArrowLeftIcon />
                        Previous
                    </button>

                    <div className="flex gap-0.5 font-medium text-sm">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => goToPage(page)}
                                className={`px-4 py-2.5 cursor-pointer rounded-lg 
                        ${currentPage === page
                                        ? "bg-gray-100  text-[#0160C9] font-medium"
                                        : "text-[#788393] hover:bg-gray-200"}
                        `}
                            >
                                {page}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="flex items-center gap-1 px-3 cursor-pointer py-2 border border-gray-200 rounded-full
                           text-[#344054] text-sm disabled:opacity-40"
                    >
                        Next
                        <ArrowRightIcon />
                    </button>
                </div>
            </div>
        </section>
    )
}