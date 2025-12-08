import { motion } from "framer-motion";
import { CrmFive, CrmFour, SalesProductivityImage, ThatWorksImage } from "../../assets/images";
const FEATURES_DATA = [
    {
        id: 1,
        title: "Sales Productivity",
        desc: "Manage every phase of the sales process directly in email. Streamline operations and increase productivity.",
        image: SalesProductivityImage,
    },
    {
        id: 2,
        title: "Real-Time Synchronization",
        desc: "Receive instant updates in the CRM based on recent engagement. Edit records directly in email and ensure no detail is missed by reducing data entry errors.",
        image: ThatWorksImage,
    },
    {
        id: 3,
        title: "Personalized AI",
        desc: "Leverage the power of AI through dot.it’s ability to read emails, suggest next steps, track customer history and sort through tasks. ",
        image: CrmFour,
    },
    {
        id: 4,
        title: "CRM Agnostic Integration",
        desc: "Integrate dot.it seamlessly with any CRM system you're currently using. Gain unparalleled flexibility by eliminating the need to switch or adapt to new platforms.",
        image: CrmFive,
    }
];
export default function UniqueFeatures() {
    return (
        <section className="py-8 md:py-20">
            <div className="container">
                <h2 className="text-3xl md:text-4xl text-[#141219] font-semibold text-center pb-8 md:pb-15">
                    Discover the power behind dot.it's unique features
                </h2>
                <div className="flex flex-col gap-12">
                    {FEATURES_DATA.map((card, index) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className={`
                                 grid grid-cols-1 items-center justify-center 
                                   md:grid-cols-[minmax(100px,458px)_minmax(100px,450px)] gap-24
                                ${index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}
                            `}
                        >
                            <div>
                                <h3 className="text-3xl font-semibold text-[#141219] pb-6">
                                    {card.title}
                                </h3>
                                <p className="text-lg text-[#141219]">
                                    {card.desc}
                                </p>
                            </div>

                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="flex justify-center"
                            >
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    width={450}
                                    height={450}
                                    loading="lazy"
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}






