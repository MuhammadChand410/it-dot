import HeadingWithText from "../../commponent/common/header/component-heading";

export default function ContactHero() {
    return (
        <section className="md:py-20 py-8 bg-gray-50">
            <div className="container">
                <div className="grid justify-center">
                    <div className="max-w-[550px]">
                        <HeadingWithText before="Let's connect and " classNametitle={`text-4xl md:text-5xl leading-10 md:leading-[60px] text-center font-semibold pb-2 text-[#011A35]`}
                            highlight="dot.it"
                            description="Have questions? Your thoughts and feedback are important to us." classNamedesc={`text-sm md:text-base text-center leading-6 text-[#012246] font-normal`} />
                    </div>
                </div>
            </div>
        </section>
    )
}