import { Helmet } from "react-helmet";
import CareersHero from "./careers-hero";
import Faqs from "./faqs";
import OpenRols from "./open-rols";
import OurMission from "./our-mission";

export default function Careers(){
    return(
        <>
         <Helmet>
                <title>My Awesome Careers</title>
                <meta name="description" content="Homepage for My Awesome Website" />
                <meta property="og:title" content="Home — My Awesome Website" />
                <meta property="og:description" content="Homepage for My Awesome Website" />
                <meta property="og:url" content="https://it-dot.vercel.app/" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
        <CareersHero />
        <OpenRols />
        <OurMission />
        <Faqs />
        </>
    )
}