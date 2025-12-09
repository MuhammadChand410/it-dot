import AiReply  from "../../assets/images/ai-reply.mp4";

export default function CompleteImage(){
    return(
        <section className="pb-8 md:pb-20">
            <div className="container">
                <video src={AiReply} width={1324} height={479} autoPlay muted loop playsInline />
            </div>
        </section>
    )
}