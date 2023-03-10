let assetPrefix = undefined;
let basePath = "/about";

if (process.env.TEAMCITY_BRANCH === "main") {
  assetPrefix = "/about";
} else if (process.env.TEAMCITY_BRANCH) {
  assetPrefix =
    "https://gu-about-us.s3-eu-west-1.amazonaws.com/CODE/gu-about-us-upload/about";
  basePath = "/CODE/gu-about-us-upload/about";
}

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  assetPrefix,
  basePath,
  transpilePackages: [
    "@guardian/consent-management-platform",
    "@guardian/libs",
    "ophan-tracker-js",
  ],
  compiler: {
    emotion: { sourceMap: true },
  },
};

module.exports = nextConfig;
