import { Helmet } from "react-helmet";
import CaseStudiesIndustry from "./case-industry";
import HeroCaseStudies from "./case-studies-hero";

export default function CaseStudies() {
    return (
        <>
            <Helmet>
                <title>My Awesome Case Studies</title>
                <meta name="description" content="Homepage for My Awesome Website" />
                <meta property="og:title" content="Home — My Awesome Website" />
                <meta property="og:description" content="Homepage for My Awesome Website" />
                <meta property="og:url" content="https://it-dot.vercel.app/" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <HeroCaseStudies />
            <CaseStudiesIndustry />
        </>
    )
}