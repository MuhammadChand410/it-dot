import { Helmet } from "react-helmet";
import AiDriven from "./ai-driven";
import Faqs from "./faqs";
import StopWasting from "./stop-wasting";
import TeamLove from "./team-love";
import WhyHero from "./why-hero";

export default function WhyDoIt() {
    return (
        <>
            <Helmet>
                <title>My Awesome Why dot.it</title>
                <meta name="description" content="Homepage for My Awesome Website" />
                <meta property="og:title" content="Home — My Awesome Website" />
                <meta property="og:description" content="Homepage for My Awesome Website" />
                <meta property="og:url" content="https://it-dot.vercel.app/" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <WhyHero />
            <StopWasting />
            <TeamLove />
            <Faqs />
            <AiDriven />
        </>
    )
}