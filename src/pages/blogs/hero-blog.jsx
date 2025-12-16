import HeadingWithText from "../../commponent/common/header/component-heading";

export default function HeroBlog() {
    return (
        <section className="md:py-20 py-8 bg-gray-50">
            <div className="container">
                <div className="grid justify-center">
                    <div className="max-w-[550px]">
                        <HeadingWithText classNametitle={`text-4xl md:text-5xl leading-10 md:leading-[60px] text-center font-semibold pb-2 text-[#011A35]`}
                            highlight="dot.it"
                            after="News & Insights"
                            description="Subscribe to learn about new product features, the latest in technology, solutions, and updates." classNamedesc={`pb-8 text-sm md:text-base text-center leading-6 text-[#012246] font-normal`} />
                    </div>
                </div>
                <div className="flex md:flex-row flex-col gap-4 justify-center">
                    <input type="text" name="search" id="" className="md:w-fit w-full border border-gray-200 shadow-sm rounded-2xl bg-white text-base font-normal text-[#ABAFB1] py-2 px-4" placeholder="Enter your email" />
                    <button className="w-fit text-sm shadow-sm cursor-pointer hover:bg-[#014fa8] font-medium text-white bg-[#0160C9] px-5 py-3.5 rounded-full">Subscribe</button>
                </div>
            </div>
        </section>
    )
}