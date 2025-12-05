import { CustomCrm, HighLevel, HubSpot, Microsoft, SalesForce } from "../../assets/images";
import Button from "../../commponent/common/header/button";
import HeadDesc from "../../commponent/common/header/heading-para";

export default function ValueCrm() {
    const VALUES_CRMS = [
        {
            id: 1,
            thumbnail: SalesForce,
            desc: 'Update records, log emails, and manage opportunities all without leaving your inbox.',
            width: 84,
            height: 60,
        },
        {
            id: 2,
            thumbnail: HubSpot,
            desc: 'Sync conversations, track engagement, and auto update CRM fields directly from email.',
            width: 117,
            height: 66,
        },
        {
            id: 3,
            thumbnail: CustomCrm,
            desc: 'Log calls, schedule follow ups, and keep your deals always up to date from the sidebar.',
            width: 173,
            height: 64,
        },
        {
            id: 4,
            thumbnail: Microsoft,
            desc: 'Two-way sync ensures every interaction you make in email is reflected instantly in Zoho.',
            width: 184,
            height: 64,
        },

        {
            id: 5,
            thumbnail: HighLevel,
            desc: 'Integrated scheduling, meeting logging, and activity tracking right where you work.',
            width: 260,
            height: 65,
        },




    ]
    return (
        <section className="py-8 md:py-20 bg-white">
            <div className="container">
                <div>
                    <HeadDesc heading={`Maximize the value of your CRM`} classNamehead={`!text-center !pb-4`} desc={`Works seamlessly with your current tools`} classNameDesc={`!text-center !pb-15`} />
                </div>
                <div className="flex md:flex-row flex-col pb-8 gap-6">
                    {VALUES_CRMS.map((card =>
                        <div className="grid gap-6" key={card.id}>
                            <div className="flex justify-center">
                                <img src={card.thumbnail} alt="sales-force" width={card.width} height={card.height} loading="lazy" />
                            </div>
                            <p className="text-sm text-center text-[#141219] font-normal">{card.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <Button />
                </div>
            </div>
        </section>
    )
}