export default function HeadingWithText({ before,
    highlight,
    after,
    description,
    classNamedesc,
    classNametitle,
    className = "" }) {
    return (
        <div className={`space-y-2 ${className}`}>
            <h2 className={`text-3xl md:text-4xl leading-11 font-semibold text-[#141219] ${classNametitle}`}>
                {before}{" "}
                <span className="text-[#0160C9]">{highlight}</span>{" "}
                {after}
            </h2>

            <p className={`text-lg font-normal text-[#141219] ${classNamedesc}`}>
                {description}
            </p>
        </div>
    );
}
