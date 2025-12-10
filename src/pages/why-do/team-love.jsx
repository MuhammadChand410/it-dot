import { SaveIcon } from "../../assets/icon";
import HeadingWithText from "../../commponent/common/header/component-heading";

export default function TeamLove() {
    const TEAM_LOVE = [
        {
            id: 1,
            icon: SaveIcon,
            title: 'Save Hours Every Week',
            desc: 'Eliminate repetitive admin tasks. Spend less time updating CRM and more time closing deals.',
        },
        {
            id: 2,
            icon: SaveIcon,
            title: 'Save Hours Every Week',
            desc: 'Eliminate repetitive admin tasks. Spend less time updating CRM and more time closing deals.',
        },
        {
            id: 3,
            icon: SaveIcon,
            title: 'Save Hours Every Week',
            desc: 'Eliminate repetitive admin tasks. Spend less time updating CRM and more time closing deals.',
        },
        {
            id: 4,
            icon: SaveIcon,
            title: 'Save Hours Every Week',
            desc: 'Eliminate repetitive admin tasks. Spend less time updating CRM and more time closing deals.',
        },
        {
            id: 5,
            icon: SaveIcon,
            title: 'Save Hours Every Week',
            desc: 'Eliminate repetitive admin tasks. Spend less time updating CRM and more time closing deals.',
        },
        {
            id: 6,
            icon: SaveIcon,
            title: 'Save Hours Every Week',
            desc: 'Eliminate repetitive admin tasks. Spend less time updating CRM and more time closing deals.',
        },
    ]
    return (
        <section className="md:py-20 py-8 bg-[#E6EFFA]">
            <div className="container">
                <div className="grid justify-center">
                    <HeadingWithText
                        before="Why teams love "
                        highlight="dot.it"
                        description="Over hundreds of users have requested early access to transform their workflows"
                        classNamedesc='pb-8 md:pb-15'
                        className='text-center'
                    />
                </div>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
                    {TEAM_LOVE.map((card =>
                        <div className='px-5 grid gap-10 py-5 rounded-3xl bg-white' key={card.id}>
                            <card.icon />
                            <div>
                                <h2 className='text-xl font-medium text-[#141219] pb-2'>{card.title}</h2>
                                <p className='text-lg font-normal text-[#535862]'>{card.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}