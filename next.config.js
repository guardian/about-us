let assetPrefix = "";
let basePath = "/about";

if (process.env.TEAMCITY_BRANCH === "main") {
  assetPrefix = "/about";
} else if (process.env.TEAMCITY_BRANCH) {
  assetPrefix =
    "https://gu-about-us.s3-eu-west-1.amazonaws.com/CODE/gu-about-us-upload/about";
  basePath = "/CODE/gu-about-us-upload/about";
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix,
  basePath,
  compiler: {
    emotion: true
  },
  distDir: 'out/about',
  output: 'export',
  transpilePackages: [
    "@guardian/libs",
    "@guardian/source/foundations",
    "@guardian/source/react-components",
    "@guardian/ophan-tracker-js",
  ]
};

module.exports = nextConfig;
