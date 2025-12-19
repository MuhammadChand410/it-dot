
import { Helmet } from 'react-helmet'
import SliderTeams from "../../commponent/common/slider-team/slider";
import CompleteImage from "./complete-image";
import DotDifference from "./dot-difference";
import HomeHero from "./hero";
import RevenueTeams from "./revenue-teams";
import Slider from "./slider";
import ThatWorks from "./that-works";
import ValueCrm from "./value-crm";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Home — My Awesome Website</title>
                <meta name="description" content="Homepage for My Awesome Website" />
                <meta property="og:title" content="Home — My Awesome Website" />
                <meta property="og:description" content="Homepage for My Awesome Website" />
                <meta property="og:url" content="https://it-dot.vercel.app/" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <HomeHero />
            <CompleteImage />
            <Slider />
            <ThatWorks />
            <DotDifference />
            <ValueCrm />
            <RevenueTeams />
            <SliderTeams />
        </>
    )
}