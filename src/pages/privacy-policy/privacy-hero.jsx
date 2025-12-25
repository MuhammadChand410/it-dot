import HeadingWithText from "../../commponent/common/header/component-heading";

export default function PrivacyHero() {
    return (
        <section className="md:py-20 py-8 bg-gray-50">
            <div className="container">
                <div className="grid justify-center">
                    <div className="max-w-[680px]">
                        <HeadingWithText before="Privacy " classNametitle={`text-4xl md:text-5xl leading-10 md:leading-[60px] text-center font-semibold pb-2 text-[#011A35]`}
                            highlight="Policy"
                            description="Your privacy is important to us at dot.it. We respect your privacy regarding any information we may collect from you across our website." classNamedesc={`text-sm md:text-base text-center leading-6 text-[#012246] font-normal`} />
                    </div>
                </div>
            </div>
        </section>

    )
}