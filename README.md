# About Us

About pages for theguardian.com.

## Technologies

- [Next](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Emotion](https://emotion.sh/)

The project makes use of Nextjs static export in order to output static HTML/CSS `next export`. An effort has been made to construct the about us pages with a purely HTML output, the only exception to this is the footer and CMP integration that require asynchronous loading of client side javascript which in turn needs access to the window object.

### One-off setup

Ensure you have Node.js installed ([nvm's installation instructions](https://github.com/nvm-sh/nvm#installing-and-updating))

### Running instructions

```
$ git clone git@github.com:guardian/about-us.git
$ cd about-us
$ npm install
$ npm run dev
```

`npm run dev` will start the development server on port 3000, from here navigate to [http://localhost:3000/about](http://localhost:3000/about).


### Deployment pipeline

There is a CI/CD process via the `Build and deploy` Github workflow. A push/merge into the `main` branch will work it's way over to the following s3 bucket:
`s3://gu-about-us/PROD/gu-about-us-upload/about/`. You can also manually deploy any branch to the CODE environment which will work it's way over to here:
`s3://gu-about-us/CODE/gu-about-us-upload/about/`.

Routing has been setup for the PROD section of the bucket to here: 
- [theguardian.com/about](https://www.theguardian.com/about)
- [theguardian.com/about/organisation](https://www.theguardian.com/about/organisation)
- [theguardian.com/about/history](https://www.theguardian.com/about/history)
- [theguardian.com/about/journalism](https://www.theguardian.com/about/journalism)

As of writing this readme, routing for the CODE section of the bucket has not been setup. You can view the corresponding pages in CODE via the following s3 http urls:
- [homepage](https://gu-about-us.s3-eu-west-1.amazonaws.com/CODE/gu-about-us-upload/about/index.html)
- [our organisation](https://gu-about-us.s3-eu-west-1.amazonaws.com/CODE/gu-about-us-upload/about/organisation.html)
- [our history](https://gu-about-us.s3-eu-west-1.amazonaws.com/CODE/gu-about-us-upload/about/history.html)
- [journalism](https://gu-about-us.s3-eu-west-1.amazonaws.com/CODE/gu-about-us-upload/about/journalism.html)

## Known issues

### Dev server: "Prop `className` did not match" error in the browser console

This issue was raised in the migration to React 18 and Next 13. There's no clear
resolution. The issue does not affect production, or the functionality of the
dev server.
