let assetPrefix = "";
let basePath = "/about";

if (process.env.TEAMCITY_BRANCH === "main") {
  assetPrefix = "/about";
} else if (process.env.TEAMCITY_BRANCH) {
  assetPrefix =
    "https://gu-about-us.s3-eu-west-1.amazonaws.com/CODE/gu-about-us-upload/about";
  basePath =
    "https://gu-about-us.s3-eu-west-1.amazonaws.com/CODE/gu-about-us-upload/about";
}

const withTM = require("next-transpile-modules")([
  "@guardian/consent-management-platform",
  "ophan-tracker-js",
]); // pass the modules you would like to see transpiled

module.exports = withTM({
  assetPrefix,
  basePath,
});
