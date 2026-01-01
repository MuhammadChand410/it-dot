import { Helmet } from "react-helmet";
import TermsAside from "./terms-aside";
import TermsHero from "./terms-hero";

export default function TermsService() {
    return (
        <>
            <Helmet>
                <title>My Awesome Terms of Service</title>
                <meta name="description" content="Homepage for My Awesome Website" />
                <meta property="og:title" content="Home — My Awesome Website" />
                <meta property="og:description" content="Homepage for My Awesome Website" />
                <meta property="og:url" content="https://it-dot.vercel.app/" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <TermsHero />
            <TermsAside />
        </>
    )
}