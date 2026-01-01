import { Helmet } from "react-helmet";
import SliderTeams from "../../commponent/common/slider-team/slider";
import FaqsPrincing from "./faq-princing";
import HeroPrincing from "./hero-princing";
import PrincingCard from "./princing-card";

export default function Princing() {
    return (

        <>
            <Helmet>
                <title>My Awesome Pricing</title>
                <meta name="description" content="Homepage for My Awesome Website" />
                <meta property="og:title" content="Home — My Awesome Website" />
                <meta property="og:description" content="Homepage for My Awesome Website" />
                <meta property="og:url" content="https://it-dot.vercel.app/" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <HeroPrincing />
            <PrincingCard />
            <FaqsPrincing />
            <SliderTeams />
        </>
    )
}