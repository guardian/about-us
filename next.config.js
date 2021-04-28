const withTM = require('next-transpile-modules')(['@guardian/consent-management-platform']); // pass the modules you would like to see transpiled

module.exports = withTM();
