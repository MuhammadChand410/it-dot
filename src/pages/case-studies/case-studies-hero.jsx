import HeadingWithText from "../../commponent/common/header/component-heading";

export default function HeroCaseStudies() {
    return (
        <section className="md:py-20 py-8 bg-gray-50">
            <div className="container">
                <div className="grid justify-center">
                    <div className="max-w-[740px]">
                        <HeadingWithText before="Success stories powered by " classNametitle={`text-4xl md:text-5xl leading-10 md:leading-[60px] text-center font-semibold pb-2 text-[#011A35]`}
                            highlight=" dot.it"
                            description="See how leading teams streamline their sales workflows with dot.it. Discover real success stories from companies transforming their inbox into a powerful CRM hub." classNamedesc={`max-w-[620px] mx-auto text-sm md:text-base text-center leading-6 text-[#012246] font-normal`} />
                    </div>
                </div>
            </div>
        </section>
    )
}