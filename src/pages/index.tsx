import { css } from "@emotion/react";
import BoxContainer from "../components/boxContainer";
import ContactAndWorkForUs from "../components/contactAndWorkForUs";
import FullWidthText, { highlightedCss } from "../components/fullWidthText";
import Header from "../components/header";
import HeaderQuote from "../components/headerQuote";
import InnerText from "../components/innerText";
import LatestNews from "../components/latestNews";
import { neutral } from "@guardian/source-foundations";
import { PageStyles } from "../components/pageStyles";
import ReaderFundedSubscribeCard from "../components/reader-funded/readerFundedSubscribeCard";
import ResponsiveCardVariant1 from "../components/responsiveCardVariant1";
import {
  readerFundedSubscribeCardHolderCss,
  readerFundedHeadingCss,
  skipToContentStyles,
  supportReaderFundedHeadingCss,
  printReaderFundedHeadingCss,
} from "../styles/sharedStyles";
import { twoColumnResponsiveCardHolder } from "../styles/sharedStyles";
import FullWidthImage from "../components/fullWidthImage";
import ReaderFundedContributeCard from "../components/reader-funded/readerFundedContributeCard";
import ReaderFundedPatronSupport from "../components/reader-funded/readerFundedPatronSupport";
import {
  LinkButton,
  SvgArrowRightStraight,
} from "@guardian/source-react-components";
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

const HomePage = () => (
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
          title: "Guardian Media Group",
          isSelected: false,
          link: "/about/organisation",
        },
        {
          title: "The Scott Trust",
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
    <main id="main">
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
      >
        <>
          <InnerText title="Our organisation" theme="light">
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
              <p>
                In short, the Guardian isn’t owned or controlled by advertisers or
                billionaires. It’s owned by a Trust, and it runs on trust. Let’s
                keep building that trust together.
              </p>
            </>
          </InnerText>
          <div css={twoColumnResponsiveCardHolder}>
            <ResponsiveCardVariant1
              title="Times change but the Guardian’s values don’t: an essay by our editor"
              imagePath="https://i.guim.co.uk/img/media/6614f6286da1a57ba2e41c953993718cbf09e473/0_0_5000_3000/master/5000.jpg?width=920&dpr=1&s=none"
              linkUrl="https://www.theguardian.com/media/2021/may/05/guardian-200-anniversary-covid-pandemic-journalism-editor-mission"
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
      <BoxContainer
        theme="dark"
        background={{ backgroundColor: `${neutral[97]}` }}
      >
        <>
          <InnerText title="We’re reader funded" theme="dark">
            <p
              css={css`
                max-width: 850px;
              `}
            >
              The Guardian’s independent, high-impact journalism is powered by
              its global readership. The Guardian has over 1 million recurring digital supporters
              from more than 180 countries around the world. It’s thanks to this generosity
              that we can provide quality, trustworthy reporting that’s open for
              everyone to read. With no shareholders or billionaire owner, we
              can investigate and challenge without fear or favour, and amplify
              stories that need to be told. You can show your support for our
              work today, in whichever way suits you best.
            </p>
          </InnerText>
          <h3 css={[readerFundedHeadingCss, supportReaderFundedHeadingCss]}>
            Support the Guardian
          </h3>
          <ReaderFundedContributeCard />
          <h3 css={[readerFundedHeadingCss, printReaderFundedHeadingCss]}>
            Print Subscriptions
          </h3>
          <div css={readerFundedSubscribeCardHolderCss}>
            <ReaderFundedSubscribeCard
              title="Newspaper"
              bodyText="Convenient and money-saving, get a newspaper delivered to your door, or pick it up from your local shop. Choose your subscription, from daily to weekend-only."
              href="https://support.theguardian.com/subscribe/paper"
              imagePath="/about/images/newspaper-desktop.png"
            />
            <ReaderFundedSubscribeCard
              title="Guardian Weekly"
              bodyText="Explore the stories that shaped the week with our magazine, delivered worldwide. From top news picks to insightful opinion pieces and engaging long reads."
              href="https://support.theguardian.com/subscribe/weekly"
              imagePath="/about/images/guardian-weekly-desktop.png"
            />
          </div>
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
                Our investigations have exposed governmental and social failings,
                including Windrush revelations in the UK, Covid-19, Cambridge
                Analytica, the Snowden Files, the Panama, Paradise and Pandora
                Papers, and the Pegasus Project.
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
              imagePath="/about/images/USA_920x552.jpg"
              linkUrl="https://www.theguardian.com/us"
              linkText="Visit Guardian US"
            />
            <ResponsiveCardVariant1
              title="Guardian Australia"
              imagePath="/about/images/australia_920x552.jpg"
              linkUrl="https://www.theguardian.com/au"
              linkText="Visit Guardian Australia"
            />
            <ResponsiveCardVariant1
              title="Guardian Europe"
              imagePath="/about/images/europe_920x552.jpg"
              linkUrl="https://www.theguardian.com/europe"
              linkText="Visit Guardian Europe"
            />
            <ResponsiveCardVariant1
              title="Guardian International"
              imagePath="/about/images/world_920x552.jpg"
              linkUrl="https://www.theguardian.com/international"
              linkText="Visit Guardian International"
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
