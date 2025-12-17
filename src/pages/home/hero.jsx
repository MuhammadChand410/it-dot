import { StarIcon } from "../../assets/icon"
import { HeroHomeImage } from "../../assets/images"
import Button from "../../commponent/common/header/button"

export default function HomeHero({ count = 5, className = "" }) {
    return (
        <section className={`py-8 md:py-20bg-cover bg-center bg-no-repeat`} style={{
            backgroundImage: `url(${HeroHomeImage})`,
        }}>
            <div className="container">
                <div className="grid justify-center">
                    <div className=" text-center">
                        <div className="grid justify-center pb-3">
                            <div className="flex items-center gap-2 bg-[#F6F4F1] py-2 px-3 rounded-[100px] w-fit">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.0413923 8.87577C0.0137963 8.91373 0 8.95859 0 9.00345C0 9.05176 0.0137963 9.09662 0.0413923 9.13458C0.0724378 9.16909 0.110388 9.1967 0.155232 9.2174L2.46295 10.0456C3.72546 10.5046 4.86724 11.2362 5.8193 12.1852C6.77136 13.1307 7.50266 14.2799 7.95454 15.5464L8.78587 17.8447C8.79967 17.8896 8.82727 17.931 8.86522 17.9586C8.90661 17.9862 8.95145 18 8.99974 18C9.04803 18 9.09633 17.9862 9.13428 17.9586C9.16877 17.9241 9.19291 17.8861 9.21361 17.8447L10.0449 15.5464C10.5003 14.2834 11.2281 13.1342 12.1802 12.1852C13.1253 11.2293 14.2706 10.4977 15.5365 10.0456L17.8443 9.2174C17.8891 9.2036 17.9305 9.17254 17.9581 9.13458C17.9891 9.09662 18.0029 9.05176 17.9995 9.00345C17.9995 8.95514 17.9857 8.90682 17.9581 8.86886C17.927 8.83435 17.8891 8.80675 17.8443 8.78949L15.5365 7.95782C14.2775 7.4954 13.1322 6.7638 12.1802 5.81825C11.2281 4.87269 10.4968 3.72699 10.0449 2.46051L9.21361 0.155285C9.19981 0.110423 9.17222 0.0690167 9.13428 0.0414094C9.09633 0.013802 9.04803 0 8.99974 0C8.95145 0 8.90316 0.013802 8.86522 0.0414094C8.83072 0.0724676 8.80312 0.110423 8.78587 0.155285L7.95454 2.46741C7.49921 3.73044 6.76792 4.87615 5.8193 5.82515C4.87414 6.78106 3.72891 7.51265 2.46295 7.96472L0.155232 8.79639C0.110388 8.8102 0.0689883 8.83781 0.0413923 8.87577Z" fill="#0160C9" />
                                </svg>
                                <span className="text-sm font-medium text-black">AI Powered Sales Management</span>
                            </div>
                        </div>
                        <h2 className="text-3xl md:text-5xl max-w-[876px] pb-3 font-semibold text-black">Manage your entire sales journey without ever leaving your inbox</h2>
                        <p className="max-w-[920px] drop-shadow-xl pb-6 text-sm md:text-base text-black font-normal">dot.it connects your touchpoints—emails, meetings, calls, and CRM activity—into one streamlined flow. Our AI handles the busywork by logging updates, automating follow-ups, surfacing valuable insights, and providing next steps alongside actionable intelligence. No more lost deals to messy processes—just faster cycles and stronger closes.</p>
                        <div className="flex items-center justify-center pb-5 gap-2">
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
                        <div className="grid justify-center">
                            <Button text={`Get Started`} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}