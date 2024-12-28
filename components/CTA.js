import config from "@/config";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="relative hero overflow-hidden min-h-screen">
      {/* <Image
        src="https://smaacbucketpublic.s3.ap-south-1.amazonaws.com/Check-in+Plus+Report.png"
        alt="Background"
        className="object-cover w-full"
        fill
      /> */}
      <div className="relative hero-overlay bg-neutral bg-opacity-70"></div>
      <div className="relative hero-content text-center text-neutral-content p-8">
        <div className="flex flex-col items-center max-w-xl p-8 md:p-0">
          <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 md:mb-12">
            Focus on your work. Let software take care of boring tasks.
          </h2>
          <p className="text-lg opacity-80 mb-12 md:mb-16">
            Dont waste time in checking visits, preparing reports and more. Implement Check-in Plus, get daily and monthly reports with location and image verification. Done.
          </p>

          {/* <button className="btn btn-primary btn-wide">
            Get {config.appName}
          </button> */}
          <Link href="/#pricing" className="btn btn-primary btn-wide">
            Get {config.appName}
          </Link>
        </div>
      </div>
    </section >
  );
};

export default CTA;

