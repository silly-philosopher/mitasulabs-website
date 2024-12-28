import Image from "next/image";
import config from "@/config";

// The list of your testimonials. It needs 3 items to fill the row.
const list = [
  {
    // Optional, use for social media like Twitter. Does not link anywhere but cool to display
    // REQUIRED
    name: "Rajiv S., Flipkart Seller",
    // REQUIRED
    text: "Before using XpertSeller, I felt overwhelmed with the day-to-day management of my online store across multiple platforms. Since signing up, I've seen a remarkable change. The process automation tools have saved me countless hours, and my sales have increased by 40% in just a few months. Highly recommend XpertSeller to anyone looking to streamline their online business!",
    // Optional, a statically imported image (usually from your public folder—recommended) or a link to the person's avatar. Shows a fallback letter if not provided
    img: "",
  },
  {
    name: "Emily Chen, Amazon Seller",
    text: "As a new seller on Amazon, the competition was intimidating, and I struggled to make my products stand out. XpertSeller's sales boosting tools and actionable analytics have been a game changer for me. I've gained invaluable insights into customer behavior and market trends, which have helped me refine my strategy and significantly improve my product visibility. My revenue has grown, and I feel more confident in my online selling journey thanks to XpertSeller.",
    img: ""
  },
  {
    name: "Amit Patel, Multi-Platform Seller",
    text: "Managing inventory and orders across Amazon and Flipkart used to be a logistical nightmare for me. With XpertSeller's marketplace integration and inventory management automation, I've been able to synchronize my operations and avoid stockouts and overselling issues. The platform is incredibly user-friendly, making it easy for me to monitor my business's performance at a glance. XpertSeller has not only improved my operational efficiency but also contributed to a steady increase in sales. A must-have tool for online sellers!",
    img: ""
  },
];
// A single testimonial, to be rendered in  a list
const Testimonial = ({ i }) => {
  const testimonial = list[i];

  if (!testimonial) return null;

  return (
    <li key={i}>
      <figure className="relative max-w-lg h-full p-6 md:p-10 bg-base-200 rounded-2xl max-md:text-sm flex flex-col">
        <blockquote className="relative flex-1">
          <p className="text-base-content/80 leading-relaxed">
            {testimonial.text}
          </p>
        </blockquote>
        <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 md:gap-8 md:pt-8 md:mt-8 border-t border-base-content/5">
          <div className="w-full flex items-center justify-between gap-2">
            <div>
              <div className="font-medium text-base-content md:mb-0.5">
                {testimonial.name}
              </div>
            </div>

            <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
              {testimonial.img ? (
                <Image
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                  src={list[i].img}
                  alt={`${list[i].name}'s testimonial for ${config.appName}`}
                  width={48}
                  height={48}
                />
              ) : (
                <span className="w-10 h-10 md:w-12 md:h-12 rounded-full flex justify-center items-center text-lg font-medium bg-base-300">
                  {testimonial.name.charAt(0)}
                </span>
              )}
            </div>
          </div>
        </figcaption>
      </figure>
    </li>
  );
};

const Testimonials3 = () => {
  return (
    <section id="testimonials">
      <div className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <div className="mb-8">
            <h2 className="sm:text-5xl text-4xl font-extrabold text-base-content">
              17+ businesses are alreading Checking in!
            </h2>
          </div>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-base-content/80">
            Don&apos;t take our word for it. Here&apos;s what they say
            about Check-in Plus.
          </p>
        </div>

        <ul
          role="list"
          className="flex flex-col items-center lg:flex-row lg:items-stretch gap-6 lg:gap-8"
        >
          {[...Array(3)].map((e, i) => (
            <Testimonial key={i} i={i} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials3;
