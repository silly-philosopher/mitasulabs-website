"use client";

import React from "react";

const features = [
    {
        name: "Business Dashboard",
        description: (
            <ul className="list-disc pl-5 space-y-1">
                <li><b>Financial Dashboard -</b>  Know how much fees amazon charges on every order and how much net profit you earn.</li>
                <li><b>Product Health Tracker -</b> Get visibility of all the issues, boosting your sales upto 2x ORGANICALLY.</li>
                <li><b>Traffic Tracker -</b> Know which products is getting views and how you can improve it.</li>
            </ul>
        ),
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
            </svg>
        ),
    },
    {
        name: "Pricing Calculator",
        description: (
            <ul className="list-disc pl-5 space-y-1">
                <li><b>Know Your Profits -</b> Know how much Amazon will charge even before you go live!</li>
                <li><b>Compare Shipping Models -</b> Check what works best for you between FBA, EasyShip or SelfShip.</li>
                <li><b>Amazon Fees Calculator -</b> Calculate every Amazon selling fee for any product.</li>
            </ul>
        ),
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
            </svg>
        ),
    },
    {
        name: "Listing Optimiser",
        description: (
            <ul className="list-disc pl-5 space-y-1">
                <li><b>Optimise Existing Listing -</b> Unlimited best-in-class listing in a click with our AI powered listing optimizer, beating your competition like a pro!</li>
                <li><b>Create New Listing -</b> Generate the amazon listings in seconds, inclusive of all the keywords.</li>
                <li><b>Keywords & Search Terms -</b> Place all of the important keywords in your Amazon listing to get you ranking organically on the first page.</li>
            </ul>
        ),
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
            </svg>
        ),
    },
    {
        name: "Account Management",
        description: (
            <ul className="list-disc pl-5 space-y-1">
                <li><b>Unlike Regular Agency -</b> Work with the best Amazon Experts, who understands your goals.</li>
                <li><b>Complete Transparency -</b> Monitor your performance regularly on our Business Dashboard backed by industry best practices.</li>
                <li><b>No lock-in -</b> Grow by the month, pay by the month! Stay for the profitable Amazon growth.</li>
            </ul>
        ),
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
            </svg>
        ),
    },
];

const FeaturesListicle = () => {
    return (
        <section className="bg-base-200" id="features">

            <div className="py-24 px-8 max-w-7xl mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <div className="mb-8">
                        <h2 className="sm:text-5xl text-4xl font-extrabold text-base-content">
                            Features To Unlock Your Amazon Success
                        </h2>
                    </div>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-base-content/80">
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <div key={index}
                             className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:bg-gray-100">
                            <div className="flex items-center space-x-3 mb-4">
                                <h5 className="text-lg font-semibold text-gray-900">{feature.name}</h5>
                            </div>
                            <div className="text-gray-700">{feature.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesListicle;
