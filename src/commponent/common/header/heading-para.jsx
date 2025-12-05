export default function HeadDesc({heading, desc, classNamemax, classNamehead, classNameDesc,}) {
    return (
            <div className={`${classNamemax && classNamemax}`}>
                <h3 className={`text-4xl font-semibold text-[#141219] ${classNamehead && classNamehead}`}>{heading && heading}</h3>
                <p className={`text-lg text-[#141219] font-normal ${classNameDesc && classNameDesc}`}>{desc && desc}</p>
            </div>
    )
}