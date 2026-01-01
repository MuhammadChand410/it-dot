import { Helmet } from "react-helmet";
import HeroProduct from "./hero-product";
import ManagementImage from "./management-image";
import RightInbox from "./right-inbox";
import UniqueFeatures from "./unique-features";

export default function Product() {
    return (
        <>
            <Helmet>
                <title>My Awesome Product</title>
                <meta name="description" content="Homepage for My Awesome Website" />
                <meta property="og:title" content="Home — My Awesome Website" />
                <meta property="og:description" content="Homepage for My Awesome Website" />
                <meta property="og:url" content="https://it-dot.vercel.app/" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <HeroProduct />
            <ManagementImage />
            <UniqueFeatures />
            <RightInbox />
        </>
    )
}