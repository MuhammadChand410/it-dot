import { Link } from "react-router-dom"
import { HomeIcon } from "../../assets/icon"
import { HeroKeydataImage } from "../../assets/images"

export default function HeroKeydata() {
    const HERO_HEADINGBTN = [
        {
            id: 1,
            text: '/',
        },
        {
            id: 2,
            text: 'Blogs',
            path: "/blogs",
        },
        {
            id: 3,
            text: '/'
        },
        {
            id: 4,
            text: 'How KeyData Boosted Sales Efficiency by 40% Using Dot.it'
        },
    ]
    return (
        <section className="md:py-20 py-8 bg-white">
            <div className="container">
                <div className="flex items-center justify-center gap-2 pb-3">
                    <Link to="/">
                        <HomeIcon />
                    </Link>
                    {HERO_HEADINGBTN.map((card) => (
                        card.path ? (
                            <Link to={card.path} key={card.id}>
                                <p className="text-sm font-medium text-[#535862] hover:text-[#0160C9]">
                                    {card.text}
                                </p>
                            </Link>
                        ) : (
                            <p
                                key={card.id}
                                className="text-sm font-medium text-[#535862] max-w-[152px] overflow-hidden text-ellipsis whitespace-nowrap"
                            >
                                {card.text}
                            </p>
                        )
                    ))}
                </div>

                <div className="flex justify-center pb-8 md:pb-16">
                    <h2 className="text-3xl md:leading-15 leading-10 md:text-5xl font-semibold text-[#181D27] max-w-[668px]">How KeyData Boosted Sales Efficiency by 40% Using Dot.it</h2>
                </div>
                <div className="w-full h-[480px] overflow-hidden rounded-2xl">
                    <img src={HeroKeydataImage} alt="hero-keydata-image" className="object-cover" width={1216} height={640} loading="lazy" />
                </div>
            </div>
        </section>
    )
}