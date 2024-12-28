import Image from "next/image";
import config from "@/config";

// Use this object to add an icon to the testimonial (optional) like the Product Hunt logo for instance. Only change the values if you add more referrings sites (currently Twitter & Product Hunt)
const refTypes = {
  productHunt: {
    id: "product_hunt",
    ariaLabel: "See user review on Product Hunt",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 26.245 26.256"
        className="w-[18px] h-[18px]"
      >
        <path
          d="M26.254 13.128c0 7.253-5.875 13.128-13.128 13.128S-.003 20.382-.003 13.128 5.872 0 13.125 0s13.128 5.875 13.128 13.128"
          fill="#da552f"
        />
        <path
          d="M14.876 13.128h-3.72V9.2h3.72c1.083 0 1.97.886 1.97 1.97s-.886 1.97-1.97 1.97m0-6.564H8.53v13.128h2.626v-3.938h3.72c2.538 0 4.595-2.057 4.595-4.595s-2.057-4.595-4.595-4.595"
          fill="#fff"
        />
      </svg>
    ),
  },
  twitter: {
    id: "twitter",
    ariaLabel: "See user post on Twitter",
    svg: (
      <svg
        className="w-5 h-5 fill-[#00aCee]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
      </svg>
    ),
  },
  other: { id: "other" },
};

// The list of your testimonials. It needs 11 items to fill the grid. The last one (11th) is featured on large devices (span 2 columns + big font)
const list = [
  {
    // Optional, use for social media like Twitter. Does not link anywhere but cool to display
    username: "",
    // REQUIRED
    name: "Rajiv S., Flipkart Seller",
    // REQUIRED
    text: "Using XpertSeller, I quickly managed my online store better and saw my sales jump by 40%. It's perfect for anyone wanting to make their online selling easier.",
    // REQUIRED — use refTypes.other if you don't want to display an icon
    type: refTypes.other,
    // Optional, link to the person's testimonial. It's more trustable
    link: "https://twitter.com/marc_louvion",
    // Optional, a statically imported image (usually from your public folder—recommended) or a link to the person's avatar. Shows a fallback letter if not provided
    // img: "https://pbs.twimg.com/profile_images/1514863683574599681/9k7PqDTA_400x400.jpg",
  },
  {
    username: "",
    name: "Emily Chen, Amazon Seller",
    text: "XpertSeller helped my products get noticed on Amazon. It showed me what customers like and helped me sell more. Now, I'm earning more and feel great about selling online.",
    type: refTypes.other,
    link: "https://twitter.com/the_mcnaveen",
  },
  {
    username: "",
    name: "Amit Patel, Multi-Platform Seller",
    text: "XpertSeller made it easy to keep track of my stock and orders on Amazon and Flipkart, making my work smoother and helping me sell more. It's simple to use and a big help for selling online.",
    type: refTypes.other,
    link: "https://www.producthunt.com/products/shipfast-2/reviews?review=667971",
  },
  {
    name: "Priya K., Online Retailer",
    text: "Before XpertSeller, handling my online shop was tough. Now, I'm selling way more because it makes everything simpler. If you sell online, you need this tool",
    type: refTypes.other,
  },
  {
    username: "",
    name: "Shubham, E-commerce Entrepreneur",
    text: "XpertSeller showed me what's hot in the market and made my products popular. My earnings have shot up, and I've never been more confident selling online.",
    type: refTypes.other,
    link: "https://www.producthunt.com/posts/shipfast-2?comment=2707061",
  },
  {
    username: "",
    name: "Luisa M., Online Merchant",
    text: "Juggling stock for my online stores used to be a headache. With XpertSeller, everything's in sync, and I've been selling more without the stress. It's incredibly easy to use",
    type: refTypes.other,
    link: "https://twitter.com/imgyf/status/1697549891080532236?s=20",
  },
  {
    name: "Gayatri, Small Business Owner",
    text: "XpertSeller turned my small shop into a busy online store. It saves me time and helped me double my sales. Highly recommend it to make online selling a breeze.",
    type: refTypes.other,
  },
  {
    name: "Samantha W., New Online Seller",
    text: "I was new to online selling and worried about keeping up. XpertSeller was a lifeline, making my products a hit and boosting my income. Selling online is now exciting and rewarding",
    type: refTypes.other,
  },
];

// A single testimonial, to be rendered in  a list
const Testimonial = ({ i }) => {
  const testimonial = list[i];

  if (!testimonial) return null;

  return (
    <li key={i}>
      <figure className="relative h-full p-6 bg-base-100 rounded-lg">
        <blockquote className="relative">
          <p className="text-sm text-base-content/80">{testimonial.text}</p>
        </blockquote>
        <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/5">
          <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
            {testimonial.img ? (
              <Image
                className="w-10 h-10 rounded-full object-cover"
                src={list[i].img}
                alt={`${list[i].name}'s testimonial for ${config.appName}`}
                width={48}
                height={48}
              />
            ) : (
              <span className="w-10 h-10 rounded-full flex justify-center items-center text-lg font-medium bg-base-300">
                {testimonial.name.charAt(0)}
              </span>
            )}
          </div>
          <div className="w-full flex items-end justify-between gap-2">
            <div>
              <div className="text-sm font-medium text-base-content">
                {testimonial.name}
              </div>
              {testimonial.username && (
                <div className="mt-0.5 text-sm text-base-content/80">
                  @{testimonial.username}
                </div>
              )}
            </div>

            {testimonial.link && testimonial.type?.svg && (
              <a
                href={testimonial.link}
                target="_blank"
                className="shrink-0 "
                aria-label={testimonial.type?.ariaLabel}
              >
                {testimonial.type?.svg}
              </a>
            )}
          </div>
        </figcaption>
      </figure>
    </li>
  );
};

const Testimonials11 = () => {
  return (
      <section className="bg-base-200" id="testimonials">
        <div className="py-24 px-8 max-w-7xl mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <div className="mb-8">
              <h2 className="sm:text-5xl text-4xl font-extrabold text-base-content">
                25+ Amazon Sellers Boosting Sales with XpertSeller!
              </h2>
            </div>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-base-content/80">
              Don't take our word for it. Here's what they have to say about XpertSeller.
            </p>
          </div>

          <ul
              role="list"
              className="grid grid-cols-1 gap-6 mx-auto sm:gap-8 md:grid-cols-2 lg:max-w-none lg:grid-cols-4"
          >
            {/* Each `li` represents a column */}
            {[...Array(4)].map((_, colIndex) => (
                <li key={colIndex}>
                  {/* Each column has 2 testimonials */}
                  <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                    {[...Array(2)].map((_, i) => (
                        <Testimonial key={i} i={i + colIndex * 2}/>
                    ))}
                  </ul>
                </li>
            ))}
          </ul>
        </div>
      </section>
  );
};

export default Testimonials11;
