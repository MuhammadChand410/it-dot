import { Link } from "react-router-dom";
import { CaseStudiesImage } from "../../../assets/images";
import HeroTitle from "../single-blog/hero-title";
import { HomeIcon } from "../../../assets/icon";

export default function CaseStudiesCommon({ tittle, herotitle }) {
    const HERO_HEADINGBTN = (herotitle) => [
        { id: 1, text: "/" },
        { id: 2, text: "Blogs", path: "/blogs" },
        { id: 3, text: "/" },
        {
            id: 4,
            component: <HeroTitle herotitle={herotitle} />,
        },
    ];
    return (
        <>
            {/* <section className="">
                <div>
                    <img src={CaseStudiesImage} alt="case-studies-image" width={1440} height={450} loading="lazy" />
                </div>
                <div className="container">
                    <div className="relative -mt-20 md:mt-32 ">
                        <div className="flex items-center justify-center gap-2 pb-3">
                            <Link to="/">
                                <HomeIcon />
                            </Link>
                            {HERO_HEADINGBTN(herotitle).map((card) =>
                                card.path ? (
                                    <Link to={card.path} key={card.id}>
                                        <p className="text-sm font-medium text-[#535862] hover:text-[#0160C9]">
                                            {card.text}
                                        </p>
                                    </Link>
                                ) : (
                                    <div key={card.id}>
                                        {card.component || (
                                            <p className="text-sm font-medium text-[#535862] max-w-[152px] overflow-hidden text-ellipsis whitespace-nowrap">
                                                {card.text}
                                            </p>
                                        )}
                                    </div>
                                )
                            )}
                        </div>

                        <div className="flex justify-center pb-8 md:pb-16">
                            <h2 className="text-3xl md:leading-15 leading-10 md:text-5xl font-semibold text-white text-center max-w-[798px]">{tittle}</h2>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="relative md:pb-20 pb-8">
                <img
                    src={CaseStudiesImage}
                    alt="case-studies-image"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                />

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

        </>
    )
}