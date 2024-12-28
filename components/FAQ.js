"use client";

import {useRef, useState} from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList

const faqList = [
    {
        question: "What is XpertSeller?",
        answer: <div className="space-y-2 leading-relaxed">XpertSeller is a comprehensive tool designed to assist online
            sellers in optimizing their sales and streamlining their processes on platforms like Amazon and Flipkart.
            Our platform offers a range of features including sales optimization, process automation, actionable
            analytics, and marketplace integration, all aimed at making online selling easier and more
            profitable.</div>,
    },
    {
        question: " How does XpertSeller help boost my sales?",
        answer: (
            <p>
                Our platform offers several features to boost your sales, including product visibility enhancement,
                pricing strategy advisories, SEO optimization, and promotional campaign management. These tools are
                designed to increase your product's visibility, attract more buyers, and ultimately, enhance your sales
                performance.
            </p>
        ),
    },
    {
        question: "Can XpertSeller integrate with my existing online store?",
        answer: (
            <p>
                Yes, XpertSeller seamlessly integrates with major online marketplaces like Amazon and Flipkart. Our
                platform is designed to synchronize your inventory, manage orders, and consolidate sales data across
                platforms, providing you with a unified overview of your online business.
            </p>
        ),
    },
    {
        question: "Is XpertSeller suitable for sellers new to online marketplaces?",
        answer: (
            <div className="space-y-2 leading-relaxed">Absolutely! XpertSeller is user-friendly and perfect for both new
                and experienced sellers. Our platform
                simplifies the complexities of online selling, providing easy-to-understand analytics, automated
                processes, and 24/7 support to guide you through your online selling journey.</div>
        ),
    },
    {
        question: "How do I get started with XpertSeller?",
        answer: (
            <div className="space-y-2 leading-relaxed">Getting started with XpertSeller is easy. Simply sign up on our
                website, customize your dashboard to suit your business needs, and start using our suite of tools to
                optimize your online selling process. If you need any assistance, our support team is always here to
                help.</div>
        ),
    },
];

const Item = ({item}) => {
    const accordion = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li>
            <button
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(!isOpen);
                }}
                aria-expanded={isOpen}
            >
        <span
            className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
                <svg
                    className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center transition duration-200 ease-out ${isOpen && "rotate-180"
                        }`}
                    />
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center rotate-90 transition duration-200 ease-out ${isOpen && "rotate-180 hidden"
                        }`}
                    />
                </svg>
            </button>

            <div
                ref={accordion}
                className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
                style={
                    isOpen
                        ? {maxHeight: accordion?.current?.scrollHeight, opacity: 1}
                        : {maxHeight: 0, opacity: 0}
                }
            >
                <div className="pb-5 leading-relaxed">{item?.answer}</div>
            </div>
        </li>
    );
};

const FAQ = () => {
    return (
        <section className="bg-base-200" id="faq">
            <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
                <div className="flex flex-col text-left basis-1/2">
                    <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
                    <p className="sm:text-4xl text-3xl font-extrabold text-base-content mb-8">
                        Frequently Asked Questions
                    </p>
                    <div class="text-base-content/80">Have another question? Contact me on <a
                        class="link text-base-content" target="_blank"
                        href="https://www.linkedin.com/company/xpertseller/">LinkedIn</a> or by <a
                        href="mailto:contact@xpertseller.com" target="_blank" class="link text-base-content">email</a>.
                    </div>
                </div>

                <ul className="basis-1/2">
                    {faqList.map((item, i) => (
                        <Item key={i} item={item}/>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default FAQ;
