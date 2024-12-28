"use client";

import Link from "next/link";

const Pricing = () => {

    return (
        <section className="bg-base-100 overflow-hidden" id="pricing">
            <div className="py-12 px-8 max-w-5xl mx-auto">
                <div className="flex flex-col text-center w-full mb-4">
                    <div className="mb-8">
                        <h2 className="sm:text-5xl text-4xl font-extrabold text-base-content">
                            Invest in Success @ 0 Cost
                        </h2>
                    </div>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-base-content/80">
                        At XpertSeller, we believe in building a partnership with our sellers where we grow together.
                        That's why we've taken an innovative approach to pricing – one that aligns our success with
                        yours.
                    </p>
                    <p className="py-4 max-w-xl mx-auto text-lg opacity-90 leading-relaxed mb-12 md:mb-8">
                        No Upfront Costs. Only Pay for Performance.
                    </p>
                    <Link href="https://calendly.com/ecom_xpertseller/xpertseller-intro-call" target="_blank"
                          className="mx-auto btn btn-primary btn-wide">
                        Contact Us
                    </Link>

                </div>

            </div>
        </section>
    );
};

export default Pricing;
