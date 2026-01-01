import { Helmet } from "react-helmet";
import HeadingWithText from "../../commponent/common/header/component-heading";
import ComponentContactUs from "../../commponent/common/header/contact-us";

export default function RequestDemo() {
    return (
        <>
            <Helmet>
                <title>My Awesome Request a Demo</title>
                <meta name="description" content="Homepage for My Awesome Website" />
                <meta property="og:title" content="Home — My Awesome Website" />
                <meta property="og:description" content="Homepage for My Awesome Website" />
                <meta property="og:url" content="https://it-dot.vercel.app/" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <section className="md:py-20 py-8 bg-gray-50">
                <div className="container">
                    <div className="grid justify-center">
                        <div className="max-w-[630px]">
                            <HeadingWithText before="See" classNametitle={`text-4xl md:text-5xl leading-10 md:leading-[60px] text-center font-semibold pb-2 text-[#011A35]`}
                                highlight=" dot.it"
                                after="in action"
                                description="Ready to experience how dot.it transforms your inbox into your smartest sales tool?" classNamedesc={`text-sm md:text-base text-center leading-6 text-[#012246] font-normal`} />
                        </div>
                    </div>
                </div>
            </section>
            <ComponentContactUs heading={`Book your demo`} description={`Our team will walk you through key features, integrations, and real use cases to help you get started.`} />
        </>
    )
}