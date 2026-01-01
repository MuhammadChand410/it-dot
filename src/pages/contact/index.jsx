import { Helmet } from "react-helmet";
import HeadingWithText from "../../commponent/common/header/component-heading";
import ComponentContactUs from "../../commponent/common/header/contact-us";

export default function Contact() {
    return (
        <>
            <Helmet>
                <title>My Awesome Contact Us</title>
                <meta name="description" content="Homepage for My Awesome Website" />
                <meta property="og:title" content="Home — My Awesome Website" />
                <meta property="og:description" content="Homepage for My Awesome Website" />
                <meta property="og:url" content="https://it-dot.vercel.app/" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <section className="md:py-20 py-8 bg-gray-50">
                <div className="container">
                    <div className="grid justify-center">
                        <div className="max-w-[550px]">
                            <HeadingWithText before="Let's connect and " classNametitle={`text-4xl md:text-5xl leading-10 md:leading-[60px] text-center font-semibold pb-2 text-[#011A35]`}
                                highlight=" dot.it"
                                description="Have questions? Your thoughts and feedback are important to us." classNamedesc={`text-sm md:text-base text-center leading-6 text-[#012246] font-normal`} />
                        </div>
                    </div>
                </div>
            </section>
            <ComponentContactUs heading={`Ready to dot your i’s and cross your t’s`} description={`Our friendly team would love to hear from you.`} />
        </>
    )
}