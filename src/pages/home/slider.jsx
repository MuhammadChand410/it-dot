import React, { useState, useEffect } from "react";
import { BlueAwningImage, FiveOlkImage, KesyshaImage, MedcImage, ZaptaImage } from "../../assets/images";

export default function Slider() {
    const [showSlider, setShowSlider] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowSlider(true), 500);
        return () => clearTimeout(timer);
    }, []);

    const SLIDER_IMAGE = [
        {
            id: 1,
            thumbnail: KesyshaImage,
            width: 154,
            height: 46
        },
        {
            id: 2,
            thumbnail: MedcImage,
            width: 140,
            height: 40
        },
        {
            id: 3,
            thumbnail: BlueAwningImage,
            width: 80,
            height: 40
        },
        {
            id: 4,
            thumbnail: FiveOlkImage,
            width: 64,
            height: 48
        },
        {
            id: 5,
            thumbnail: ZaptaImage,
            width: 128,
            height: 40
        },
        {
            id: 6,
            thumbnail: KesyshaImage,
            width: 154,
            height: 46
        },
        {
            id: 7,
            thumbnail: MedcImage,
            width: 140,
            height: 40
        },
        {
            id: 8,
            thumbnail: BlueAwningImage,
            width: 80,
            height: 40
        },
        {
            id: 9,
            thumbnail: FiveOlkImage,
            width: 64,
            height: 48
        },
        {
            id: 10,
            thumbnail: ZaptaImage,
            width: 128,
            height: 40
        },
    ];

    return (
        <section className="py-8 md:py-10">
            <div>
                <div className="main-animate h-[70px] mx-auto flex items-center overflow-hidden">
                    {showSlider && (
                        <div className="slider w-full">
                            <div className="slide-track flex items-center">
                                {SLIDER_IMAGE.map((card) => (
                                    <div
                                        className="slide flex justify-center items-center w-[200px] h-[50px]"
                                        key={card.id}
                                    >
                                        <img
                                            src={card.thumbnail}
                                            alt="brand"
                                            width={card.width}
                                            height={card.height}
                                            className="object-contain"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
