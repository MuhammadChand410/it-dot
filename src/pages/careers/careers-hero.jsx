import HeadingWithText from "../../commponent/common/header/component-heading";

export default function CareersHero() {
    return (
        <section className="md:py-20 py-8 bg-gray-50">
            <div className="container">
                <div className="grid justify-center">
                    <div className="max-w-[600px]">
                        <HeadingWithText before="Join " classNametitle={`text-4xl md:text-5xl leading-10 md:leading-[60px] text-center font-semibold pb-2 text-[#011A35]`}
                            highlight="our" after="growing team"
                            description="We're hiring creators who want to solve meaningful problems with AI, not chase hype. Our team values clarity, speed, and work that creates lasting impact ." classNamedesc={`text-sm md:text-base text-center leading-6 text-[#012246] font-normal`} />
                    </div>
                </div>
            </div>
        </section>

    )
}