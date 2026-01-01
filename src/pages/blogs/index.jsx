import { Helmet } from "react-helmet";
import Articules from "./articules";
import Blog from "./blog";
import HeroBlog from "./hero-blog";

export default function Blogs(){
    return(
        <>
         <Helmet>
                <title>My Awesome Blogs</title>
                <meta name="description" content="Homepage for My Awesome Website" />
                <meta property="og:title" content="Home — My Awesome Website" />
                <meta property="og:description" content="Homepage for My Awesome Website" />
                <meta property="og:url" content="https://it-dot.vercel.app/" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
        <HeroBlog/>
        <Articules />
        <Blog />
        </>
    )
}