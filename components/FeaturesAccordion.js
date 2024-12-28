"use client";

import {useState, useRef} from "react";
import Image from "next/image";

// The features array is a list of features that will be displayed in the accordion.
// - title: The title of the feature
// - description: The description of the feature (when clicked)
// - type: The type of media (video or image)
// - path: The path to the media (for better SEO, try to use a local path)
// - format: The format of the media (if type is 'video')
// - alt: The alt text of the image (if type is 'image')
const features = [
    {
        title: "",
        description:
            "",
        type: "video",
        path: "",
        format: "video/webm",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
            </svg>

        ),
    }
];

// An SEO-friendly accordion component including the title and a description (when clicked.)
const Item = ({feature, isOpen, setFeatureSelected}) => {
    const accordion = useRef(null);
    const {title, description, svg} = feature;

    return (
        <li>
            <button
                className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg"
                onClick={(e) => {
                    e.preventDefault();
                    setFeatureSelected();
                }}
                aria-expanded={isOpen}
            >
        <span className={`duration-100 ${isOpen ? "text-primary" : ""}`}>
          {svg}
        </span>
                <span
                    className={`flex-1 text-base-content ${isOpen ? "text-primary font-semibold" : ""
                    }`}
                >
          <h3 className="inline">{title}</h3>
        </span>
            </button>

            <div
                ref={accordion}
                className={`transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden`}
                style={
                    isOpen
                        ? {maxHeight: accordion?.current?.scrollHeight, opacity: 1}
                        : {maxHeight: 0, opacity: 0}
                }
            >
                <div className="pb-5 leading-relaxed">{description}</div>
            </div>
        </li>
    );
};

// A component to display the media (video or image) of the feature. If the type is not specified, it will display an empty div.
// Video are set to autoplay for best UX.
const Media = ({feature}) => {
    const {type, path, format, alt} = feature;
    //const style = "rounded-2xl aspect-square w-full sm:w-[26rem]";
    const style = "rounded-2xl aspect-w-8/5 w-full sm:w-[48rem]"; //(custom-change)
    const size = {
        width: 800, //Set to 800 for above commented setting (custom-change)
        height: 500,
    };

    if (type === "video") {
        return (
            <video
                className={style}
                autoPlay
                muted
                loop
                playsInline
                controls
                width={size.width}
                height={size.height}
            >
                <source src={path} type={format}/>
            </video>
        );
    } else if (type === "image") {
        return (
            <Image
                src={path}
                alt={alt}
                className={`${style} object-cover object-center`}
                width={size.width}
                height={size.height}
            />
        );
    } else {
        return <div className={`${style} !border-none`}></div>;
    }
};

// A component to display 2 to 5 features in an accordion.
// By default, the first feature is selected. When a feature is clicked, the others are closed.
const FeaturesAccordion = () => {
    const [featureSelected, setFeatureSelected] = useState(0);

    return (
        <section
            className="py-24 md:py-32 space-y-24 md:space-y-32 max-w-7xl mx-auto bg-base-100 "
            id="features"
        >
            <div className="px-8">
                <h2 className="font-extrabold text-4xl lg:text-6xl tracking-tight mb-12 md:mb-24">
                    Effortlessly Track & Verify team visits with
                    <span
                        className="bg-neutral text-neutral-content px-2 md:px-4 ml-1 md:ml-1.5 leading-relaxed whitespace-nowrap">
            Peace of Mind
          </span>
                </h2>
                <div className=" flex flex-col md:flex-row gap-12 md:gap-24">
                    <div className="grid grid-cols-1 items-stretch gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
                        <ul className="w-full">
                            {features.map((feature, i) => (
                                <Item
                                    key={feature.title}
                                    index={i}
                                    feature={feature}
                                    isOpen={featureSelected === i}
                                    setFeatureSelected={() => setFeatureSelected(i)}
                                />
                            ))}
                        </ul>

                        <Media feature={features[featureSelected]} key={featureSelected}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesAccordion;
