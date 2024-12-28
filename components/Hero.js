import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";
import Link from "next/link";

const Hero = () => {
    return (
        <section
            className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
            <div
                className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
                <a
                    href=""
                    target="_blank"
                    className=" -mb-4 md:-mb-6 group"
                    title="Product Hunt link"
                >

                </a>

                <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
                    All-in-One App for Successful Amazon Sellers
                </h1>
                <p className="text-lg opacity-80 leading-relaxed">
                    Sell More, Worry Less: Sign-up now to kick-start your Journey of becoming a Top Amazon Seller!
                </p>
                <Link href="https://app.xpertseller.com/auth/register" target="_blank"
                      className="btn btn-primary btn-wide">
                    Sign-up Here
                </Link>
            </div>
            <div className="lg:w-full">
                <Image
                    src="https://res.cloudinary.com/dfao6zqc7/image/upload/v1710514211/xpert_seller/home_top_ozslmm.webp"
                    alt="xpert-seller"
                    className="w-full"
                    priority={true}
                    width={500}
                    height={500}
                />
            </div>
        </section>
    );
};

export default Hero;
