import { AiDotIcon, AiDottIcon } from "../../assets/icon";

export default function AiDriven() {
    return (
        <section className="md:py-10 py-6 bg-white">
            <div className="container">
                <div className="flex justify-center">
                    <div className="max-w-[662px]">
                        <AiDotIcon />
                        <p className="text-lg md:text-2xl text-[#181D27] text-center font-medium leading-8">dot.it is redefining sales management with seamless integrations <span className="text-[#717680]"> and</span> AI-driven insights <span className="text-[#717680]"> that simplify and streamline the entire workflow. </span> </p>
                        <div className="flex justify-end -mt-3">
                            <AiDottIcon />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}