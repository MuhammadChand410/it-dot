import { CompleteImagee } from "../../assets/images";

export default function CompleteImage(){
    return(
        <section className="pb-8 md:pb-20">
            <div className="container">
                <img src={CompleteImagee} alt="complete-image" width={1324} height={479} loading="lazy" />
            </div>
        </section>
    )
}