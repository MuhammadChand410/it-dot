
import SliderTeams from "../../commponent/common/slider-team/slider";
import CompleteImage from "./complete-image";
import DotDifference from "./dot-difference";
import HomeHero from "./hero";
import RevenueTeams from "./revenue-teams";
import Slider from "./slider";
import ThatWorks from "./that-works";
import ValueCrm from "./value-crm";

export default function Home(){
    return(
        <>
        <HomeHero/>
        <CompleteImage/>
        <Slider/>
        <ThatWorks />
        <DotDifference/>
        <ValueCrm/>
        <RevenueTeams/>
       <SliderTeams/>
        </>
    )
}