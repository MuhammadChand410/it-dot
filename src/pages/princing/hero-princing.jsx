import HeadingWithText from "../../commponent/common/header/component-heading";

export default function HeroPrincing() {
    return (
        <section className="md:py-20 py-8 bg-gray-50">
            <div className="container">
                <div className="grid justify-center">
                    <div className="max-w-[550px]">
                        <HeadingWithText before="Choosing the" classNametitle={`text-4xl md:text-5xl leading-10 md:leading-[60px] text-center font-semibold pb-2 text-[#011A35]`}
                            highlight="right" after='plan'
                            description="Choose a plan that fits your needs and budget, and let's embark on this journey of success together." classNamedesc={`text-sm md:text-base text-center leading-6 text-[#012246] font-normal`} />
                    </div>
                </div>
            </div>
        </section>
    )
}