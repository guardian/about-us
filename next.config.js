let assetPrefix = "";
if (process.env.TEAMCITY_BRANCH === "main") {
  assetPrefix =
    "https://gu-about-us.s3-eu-west-1.amazonaws.com/PROD/gu-about-us-upload";
} else if (process.env.TEAMCITY_BRANCH.length) {
  assetPrefix =
    "https://gu-about-us.s3-eu-west-1.amazonaws.com/CODE/gu-about-us-upload";
}

const withTM = require("next-transpile-modules")([
  "@guardian/consent-management-platform",
]); // pass the modules you would like to see transpiled

module.exports = withTM({ assetPrefix });
