const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            // NextJS <Image> component needs to whitelist domains for src={}
            "res.cloudinary.com",
            "lh3.googleusercontent.com",
            "pbs.twimg.com",
            "images.unsplash.com",
            "logos-world.net",
            "smaacbucketpublic.s3.ap-south-1.amazonaws.com",
            "randomuser.me",
            "check-inplus.s3.ap-south-1.amazonaws.com",
        ],
    },
};

module.exports = nextConfig;
