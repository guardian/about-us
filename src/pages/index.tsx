/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React from "react";
import BoxContainer from "../components/boxContainer";
import ContactAndWorkForUs from "../components/contactAndWorkForUs";
import FullWidthText, { highlightedCss } from "../components/fullWidthText";
import Header from "../components/header";
import HeaderQuote from "../components/headerQuote";
import InnerText from "../components/innerText";
import LatestNews from "../components/latestNews";
import { neutral } from "@guardian/src-foundations";
import { PageStyles } from "../components/pageStyles";
import ReaderFundedSubscribeCard from "../components/reader-funded/readerFundedSubscribeCard";
import ResponsiveCardVariant1 from "../components/responsiveCardVariant1";
import {
  readerFundedSubscribeCardHolderCss,
  readerFundedHeadingCss,
  skipToContentStyles,
} from "../styles/sharedStyles";
import { twoColumnResponsiveCardHolder } from "../styles/sharedStyles";
import FullWidthImage from "../components/fullWidthImage";
import ReaderFundedContributeCard from "../components/reader-funded/readerFundedContributeCard";
import ReaderFundedPatronSupport from "../components/reader-funded/readerFundedPatronSupport";
import BirthdayThrasher from "../components/birthdayThrasher";
import { LinkButton } from "@guardian/src-button";
import { SvgArrowRightStraight } from "@guardian/src-icons";
import { minWidth } from "../styles/breakpoints";
import dynamic from "next/dynamic";
import Head from "next/head";

const Footer = dynamic(() => import("../components/footer/footer"), {
  ssr: false,
});

const LinkButtonCss = css`
  margin-top: 41px;
  ${minWidth.tablet} {
    margin-top: 48px;
  }
  ${minWidth.desktop} {
    margin-top: 57px;
  }
`;

const HomePage = (): jsx.JSX.Element => (
  <>
    <Head>
      <title>About us | The Guardian</title>
    </Head>
    <PageStyles />
    <a href="#main" css={skipToContentStyles}>
      Skip to main content
    </a>
    <Header
      navSections={[
        {
          title: "About us",
          isSelected: true,
          link: "/about/",
        },
        {
          title: "Our organisation",
          isSelected: false,
          link: "/about/organisation",
        },
        {
          title: "Our history",
          isSelected: false,
          link: "/about/history",
        },
        {
          title: "Journalism",
          isSelected: false,
          link: "/about/journalism",
        },
      ]}
    />
    <main id="main" >
      <h1
        // This is a copy of `visuallyHidden` taken from @guardian/source-foundations
        css={css`
          position: absolute;
          opacity: 0;
          height: 0;
          width: 0;
          top: 0;
          left: 0;
        `}
      >
        About us
      </h1>
      <HeaderQuote
        quote="Since 1821 the mission of the Guardian has been to use clarity and imagination to build hope."
        author="Katharine Viner, editor-in-chief"
      />
      <FullWidthText theme="light">
        <>
          <p>
            Guardian Media Group is a global news organisation that delivers{" "}
            <span css={highlightedCss}>fearless, investigative journalism</span>{" "}
            - giving a voice to the powerless and holding power to account.
          </p>
          <p>
            Our independent ownership structure means we are entirely free from
            political and commercial influence.{" "}
            <span css={highlightedCss}>
              Only our values determine the stories we choose to cover
            </span>{" "}
            – relentlessly and courageously.
          </p>
        </>
      </FullWidthText>
      <FullWidthImage
        smallImageUrl="/about/images/front-page-full-width-small.jpg"
        largeImageUrl="/about/images/front-page-full-width-large.jpg"
      />
      <BoxContainer
        theme="light"
        background={{ backgroundColor: `${neutral[97]}` }}
        overlapTop={true}
        paddingBottom={true}
      >
        <>
          <InnerText title="Our Organisation" theme="light">
            <>
              <p>
                The Guardian is owned by Guardian Media Group, which has only
                one shareholder - the Scott Trust.
              </p>
              <p>
                The Scott Trust, named after our longest serving editor, CP
                Scott, exists to secure the financial and editorial independence
                of the Guardian in perpetuity.
              </p>
              <p>
                Today more than half of our revenue comes directly from our
                readers, helping to support Guardian journalism and keep it open
                for everyone.
              </p>
            </>
          </InnerText>
          <div css={twoColumnResponsiveCardHolder}>
            <ResponsiveCardVariant1
              title="A mission for journalism: an essay by our editor"
              imagePath="/about/images/front-page-2.jpg"
              linkUrl="https://www.theguardian.com/news/2017/nov/16/a-mission-for-journalism-in-a-time-of-crisis"
            />
            <ResponsiveCardVariant1
              title="Guardian Media Group"
              imagePath="/about/images/front-page-3.jpg"
              linkUrl="https://www.theguardian.com/gmg"
            />
            <ResponsiveCardVariant1
              title="The Scott Trust and our values"
              imagePath="/about/images/front-page-4.jpg"
              linkUrl="https://www.theguardian.com/the-scott-trust/2015/jul/26/the-scott-trust"
            />
            <ResponsiveCardVariant1
              title="CP Scott’s centenary essay"
              imagePath="/about/images/front-page-5.jpg"
              linkUrl="https://www.theguardian.com/sustainability/cp-scott-centenary-essay"
            />
          </div>
          <LinkButton
            priority="primary"
            size="default"
            icon={<SvgArrowRightStraight />}
            iconSide="right"
            nudgeIcon={true}
            cssOverrides={LinkButtonCss}
            href="https://www.theguardian.com/about/organisation"
          >
            More on our organisation
          </LinkButton>
        </>
      </BoxContainer>
      <BirthdayThrasher />
      <BoxContainer
        theme="dark"
        background={{ backgroundColor: `${neutral[97]}` }}
      >
        <>
          <InnerText title="We're reader funded" theme="dark">
            <p>
              The Guardian’s independent, high-impact journalism is powered by
              its global readership. In 2020 alone, more than 1.5 million
              readers supported us financially. It’s thanks to this generosity
              that we can provide quality, trustworthy reporting that’s open for
              everyone to read. With no shareholders or billionaire owner, we
              can investigate and challenge without fear or favour, and amplify
              stories that need to be told. You can show your support for our
              work today, in whichever way suits you best.
            </p>
          </InnerText>
          <h3 css={readerFundedHeadingCss(true)}>Subscribe</h3>
          <div css={readerFundedSubscribeCardHolderCss}>
            <ReaderFundedSubscribeCard
              imagePath={{
                mobile: "/about/images/front-page-7-mobile.png",
                tabletAndAbove: "/about/images/front-page-7-desktop.png",
              }}
              title="Digital"
              bodyText="Enjoy the richest experience of Guardian reporting. Ad-free reading across all your devices, plus premium access to two innovative, award-winning apps."
              href="https://support.theguardian.com/subscribe/digital"
            />
            <ReaderFundedSubscribeCard
              imagePath={{
                mobile: "/about/images/front-page-8-mobile.png",
                tabletAndAbove: "/about/images/front-page-8-desktop.png",
              }}
              title="Print"
              bodyText="Convenient and money-saving, get a newspaper delivered to your door, or pick it up from your local shop. Choose your subscription, from daily to weekend-only."
              href="https://support.theguardian.com/subscribe/paper"
            />
            <ReaderFundedSubscribeCard
              imagePath={{
                mobile: "/about/images/front-page-9-mobile.png",
                tabletAndAbove: "/about/images/front-page-9-desktop.png",
              }}
              title="Guardian Weekly"
              bodyText="Explore the stories that shaped the week with our magazine, delivered worldwide. From top news picks to insightful opinion pieces and engaging long reads."
              href="https://support.theguardian.com/subscribe/weekly"
            />
          </div>
          <h3 css={readerFundedHeadingCss()}>Make a contribution</h3>
          <ReaderFundedContributeCard />
          <ReaderFundedPatronSupport />
        </>
      </BoxContainer>
      <BoxContainer
        theme="light"
        background={{ backgroundColor: `${neutral[97]}` }}
        paddingBottom={true}
      >
        <>
          <InnerText title="Journalism" theme="light">
            <>
              <p>
                The Guardian is globally renowned for its coverage of politics,
                the environment, science, social justice, sport and culture. Our
                journalists deliver agenda-setting investigations, breaking live
                news, compelling opinion writing and the liveliest features, as
                well as award-winning podcasts, video documentaries and
                infographics and visuals.
              </p>
              <p>
                Our Covid-19 investigations exposed governmental and social
                failings, as did the Snowden Files, Panama Papers, Cambridge
                Analytica Files and the Windrush revelations in the UK.
              </p>
              <p>
                Our teams in the UK, US and Australia produce theguardian.com,
                Guardian Australia, Guardian US, Guardian Weekly, and the
                Guardian and Observer newspapers in the UK.
              </p>
            </>
          </InnerText>
          <div css={twoColumnResponsiveCardHolder}>
            <ResponsiveCardVariant1
              title="Guardian US"
              imagePath="/about/images/front-page-11.jpg"
              linkUrl="https://www.theguardian.com/us"
              linkText="Visit Guardian US"
            />
            <ResponsiveCardVariant1
              title="Guardian Australia"
              imagePath="/about/images/front-page-12.jpg"
              linkUrl="https://www.theguardian.com/au"
              linkText="Guardian Australia"
            />
          </div>
          <LinkButton
            priority="primary"
            size="default"
            icon={<SvgArrowRightStraight />}
            iconSide="right"
            nudgeIcon={true}
            cssOverrides={LinkButtonCss}
            href="https://theguardian.com/about/journalism"
          >
            More on journalism
          </LinkButton>
        </>
      </BoxContainer>
      <LatestNews />
      <ContactAndWorkForUs />
    </main>
    <Footer />
  </>
);

export default HomePage;
