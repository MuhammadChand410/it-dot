import { Link } from "react-router-dom"
import { LinkdenIcon, StarIcon } from "../../../assets/icon"
import { HeaderLogo } from "../../../assets/images"
import Button from "../header/button"

export default function Footer({ count = 5, className = "" }) {
    const FOOTER_LINKS = [
        {
            title: 'Product',
            links: [
                {
                    text: 'Platform Overview',
                    path: '/product'
                },
                {
                    text: 'Request a Demo ',
                    path: '/request/demo'
                },
                {
                    text: 'Why dot.it',
                    path: '/why/dot/it'
                },
                {
                    text: 'Pricing',
                    path: '/princing'
                },

            ]
        },
        {
            title: 'Company',
            links: [
                {
                    text: 'Careers',
                    path: '/careers'
                },
                {
                    text: 'FAQ',
                    path: '/careers#faqs'
                },
            ]
        }
    ]
    const FOOTER_LINK = [
        {
            title: 'Resources',
            links: [
                {
                    text: 'Contact',
                    path: '/contact/us'
                },
                {
                    text: 'Privacy Policy',
                    path: '/privacy/policy'
                },
                {
                    text: 'Terms of Service ',
                    path: '/terms/service'
                },

            ]
        },
        {
            title: 'Support & Sales',
            links: [
                {
                    text: 'support@gotdot.it',
                    path: '/mailto',

                },
                {
                    text: 'ellew@gotdot.it',
                    path: '/mailto',

                },
            ]
        },
    ]
    return (
        <footer className="">
            <div className="">
                <div className="bg-[#E6EFFA] py-10">
                    <h2 className="text-4xl text-center text-[#252B37] font-semibold pb-4">dot your i's and cross your t's</h2>
                    <div className="flex items-center justify-center pb-6 gap-2">
                        <div className="flex gap-1">
                            <div className={`flex gap-1 ${className}`}>
                                {Array.from({ length: count }).map((_, i) => (
                                    <div key={i} className="flex shrink-0">
                                        <StarIcon />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="text-[#535862] text-sm font-medium">100+ Early access members</p>
                    </div>
                    <div className="flex justify-center">
                        <Button text={`Get Started`} />
                    </div>
                </div>
                <div className="bg-white py-8">
                    <div className="container">
                        <div className="grid grid-cols-1 md:grid-cols-[minmax(100px,281px)_minmax(100px,632px)]  justify-between">
                            <div className="">
                                <Link to={`/`}>
                                    <img src={HeaderLogo} alt="footer-logo" width={97} height={35} />
                                </Link>
                                <p className="text-base text-[#131313] font-normal pt-4 pb-4">dot your i's and cross your t's</p>
                                <p className="text-base max-w-[206px] text-[#131313] font-normal pb-5">dot.it Technologies, Inc.
                                    Craig Ranch, McKinney, TX</p>
                                <Link to='https://www.linkedin.com/' target="blank" className="md:pb-0 pb-4">
                                    <LinkdenIcon />
                                </Link>

                            </div>
                            <div>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
                                    {
                                        FOOTER_LINKS.map(item => (
                                            <ul key={item.title}>
                                                <h3 className="text-lg font-semibold text-[#131313] pb-4">{item.title}</h3>
                                                {
                                                    item.links.map((linkItem) => (
                                                        <li key={linkItem.text} className="pb-3 flex gap-2 items-center">
                                                            {linkItem.icon &&
                                                                <div className="shrink-0"><linkItem.icon /> </div>
                                                            }
                                                            <Link to={linkItem.path} className='font-normal text-base text-[#131313] decoration-non'>{linkItem.text}</Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        ))
                                    }

                                    {
                                        FOOTER_LINK.map(item => (
                                            <ul key={item.title}>
                                                <h3 className="text-lg font-semibold text-[#131313] pb-4">{item.title}</h3>
                                                {
                                                    item.links.map((linkItem) => {
                                                        let href = "#";
                                                        let isMap = false;

                                                        if (linkItem.path === "/tell") {
                                                            href = `tel:${linkItem.text}`;
                                                        } else if (linkItem.path === "/mailto") {
                                                            href = `mailto:${linkItem.text}`;
                                                        } else if (linkItem.path === "/map") {
                                                            href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(linkItem.text)}`;
                                                            isMap = true;
                                                        }

                                                        return (
                                                            <li key={linkItem.text} className="pb-3 flex gap-2 items-center">

                                                                <Link to={linkItem.path}
                                                                    {...(isMap ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                                                    className="font-normal text-base text-[#131313] decoration-none"
                                                                >
                                                                    {linkItem.text}
                                                                </Link>
                                                            </li>
                                                        );
                                                    })
                                                }
                                            </ul>
                                        ))
                                    }
                                </div>
                            </div>
                            <p className="mt-6 md:mt-8 pb-2 text-base text-[#A3A3A3] font-normal">dot.it | © 2025</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}