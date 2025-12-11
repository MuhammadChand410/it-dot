import { ManagementImagee } from "../../assets/images";

export default function ManagementImage(){
    return(
        <section>
            <div>
                <img src={ManagementImagee} alt="management-image" width={1440} height={620} loading="lazy" />
            </div>
        </section>
    )
}