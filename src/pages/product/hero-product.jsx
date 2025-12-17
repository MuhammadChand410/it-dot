import { ProductHeroImage } from "../../assets/images";
import Button from "../../commponent/common/header/button";

export default function HeroProduct() {
    return (
        <section className="py-8 md:py-20">
            <div className="container">
                <div className="flex md:flex-row flex-col gap-25 justify-center items-center">
                    <div className="">
                        <h2 className="max-w-[560px] pb-3 text-[34px] md:text-[40px] font-semibold text-[#011A35] leading-10 md:leading-14">Managing workflows across multiple platforms is chaotic but not with  <span className="text-[#0160C9]">dot.it</span></h2>
                        <p className="pb-6 max-w-[490px] text-sm md:text-base font-normal text-[#012246]">Transform your email into a powerful CRM workspace. Update deals, log activities, and surface insights without switching tabs. Save time, reduce errors, focus on what matters.</p>
                        <Button text={`Get Started`}/>
                    </div>
                    <div>
                        <img src={ProductHeroImage} alt="product-hero-image" width={441} height={432} loading="lazy" />
                    </div>
                </div>
            </div>
        </section>
    )
}