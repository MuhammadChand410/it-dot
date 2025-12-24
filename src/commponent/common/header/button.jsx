import { Link } from "react-router-dom";
import { ArrowIcon } from "../../../assets/icon";

export default function Button({text}) {
    return (
        <Link to="https://tally.so/r/315L24" target="blank" type="submint" className={`bg-[#0160C9] shadow-xl flex w-fit cursor-pointer py-2 items-center gap-3 px-4 rounded-full text-white text-base font-semibold hover:bg-[#014fa8] transition-all duration-200`}>
            {text} 
            <ArrowIcon />
        </Link>
    )
}