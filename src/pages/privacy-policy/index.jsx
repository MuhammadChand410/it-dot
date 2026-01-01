import { Helmet } from "react-helmet";
import PrivacyAside from "./privacy-aside";
import PrivacyHero from "./privacy-hero";

export default function PrivacyPolicy() {
    return (
        <>
            <Helmet>
                <title>My Awesome Privacy Policy</title>
                <meta name="description" content="Homepage for My Awesome Website" />
                <meta property="og:title" content="Home — My Awesome Website" />
                <meta property="og:description" content="Homepage for My Awesome Website" />
                <meta property="og:url" content="https://it-dot.vercel.app/" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <PrivacyHero />
            <PrivacyAside />
        </>
    )
}