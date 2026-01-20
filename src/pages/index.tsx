import { css } from "@emotion/react";
import BoxContainer from "../components/boxContainer";
import ContactAndWorkWithUs from "../components/contactAndWorkWithUs";
import FullWidthText, { highlightedCss } from "../components/fullWidthText";
import Header from "../components/header";
import HeaderQuote from "../components/headerQuote";
import InnerText from "../components/innerText";
import LatestNews from "../components/latestNews";
import { palette } from "@guardian/source/foundations";
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
} from "@guardian/source/react-components";
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
        // This is a copy of `visuallyHidden` taken from @guardian/source/foundations
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
        background={{ backgroundColor: palette.neutral[97] }}
        overlapTop={true}
      >
        <>
          <InnerText title="Our organisation" theme="light">
            <>
              <p>
                The Guardian’s agenda-setting journalism is underpinned by an
                independent ownership structure that is different from other
                global news organisations. It guarantees our journalism and our
                editor stay independent from any outside influence, whether
                financial, political or commercial.
              </p>
              <p>
                In 1936, John Russell Scott — the proprietor of the Manchester
                Guardian, as it was then known — transferred his family’s stake
                in the newspaper to a group of trustees. The Scott Trust became
                the owner of the newspaper, putting in place the independent
                ownership structure that supports the Guardian to this day.
              </p>
              <p>
                This independent ownership structure is made up of three key
                organisations:
              </p>
              <ul>
                <li>
                  <strong>The Scott Trust</strong>, the sole shareholder of
                  Guardian Media Group. The purpose — and privilege — of the
                  Trust is to secure the financial and editorial independence of
                  the Guardian in perpetuity.
                </li>
                <li>
                  <strong>The Scott Trust Endowment</strong>, a fund built up
                  following the prudent sale of assets with the core purpose of
                  investing to provide financial returns to support Guardian
                  journalism in perpetuity.
                </li>
                <li>
                  <strong>Guardian Media Group</strong>, the owner of Guardian
                  News &amp; Media (GNM) and publisher of the Guardian newspaper
                  and website.
                </li>
              </ul>
              <p>
                This exceptional, if not unique, form of governance for a news
                publisher ensures that all surplus financial returns are
                reinvested into our high quality journalism for a global
                audience rather than benefiting a proprietor or shareholders.
              </p>
              <p>
                A summary of the governance structure is available{" "}
                <a href="https://drive.google.com/file/d/1C99fs-HKHyCpENm5ry2Ccc6zxcihj2KP/view">
                  here
                </a>
                .
              </p>
            </>
          </InnerText>
          <div css={twoColumnResponsiveCardHolder}>
            <ResponsiveCardVariant1
              title="Times change but the Guardian’s values don’t"
              imagePath="https://i.guim.co.uk/img/media/6614f6286da1a57ba2e41c953993718cbf09e473/0_0_5000_3000/master/5000.jpg?width=920&dpr=1&s=none"
              linkUrl="https://www.theguardian.com/media/2021/may/05/guardian-200-anniversary-covid-pandemic-journalism-editor-mission"
            />
            <ResponsiveCardVariant1
              title="A mission for journalism: an essay by our editor"
              imagePath="/about/images/front-page-2.jpg"
              linkUrl="https://www.theguardian.com/news/2017/nov/16/a-mission-for-journalism-in-a-time-of-crisis"
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
        background={{ backgroundColor: palette.neutral[97] }}
      >
        <>
          <InnerText title="We’re reader funded" theme="dark">
            <p
              css={css`
                max-width: 850px;
              `}
            >
              The Guardian’s independent, high-impact journalism is powered by
              its global readership. The Guardian has over 1 million recurring
              digital supporters from more than 180 countries around the world.
              It’s thanks to this generosity that we can provide quality,
              trustworthy reporting that’s open for everyone to read. With no
              shareholders or billionaire owner, we can investigate and
              challenge without fear or favour, and amplify stories that need to
              be told. You can show your support for our work today, in
              whichever way suits you best.
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
        background={{ backgroundColor: palette.neutral[97] }}
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
                Our investigations have exposed governmental and social
                failings, including Windrush revelations in the UK, Covid-19,
                Cambridge Analytica, the Snowden Files, the Panama, Paradise and
                Pandora Papers, and the Pegasus Project.
              </p>
              <p>
                Our teams in the UK, US and Australia produce theguardian.com,
                Guardian Australia, Guardian US, Guardian Weekly, and the
                Guardian newspaper in the UK.
              </p>
            </>
          </InnerText>
          <div css={twoColumnResponsiveCardHolder}>
            <ResponsiveCardVariant1
              title="UK edition"
              imagePath="/about/images/UK_920x552.jpg"
              linkUrl="https://www.theguardian.com/uk"
              linkText="Visit UK edition"
            />
            <ResponsiveCardVariant1
              title="US edition"
              imagePath="/about/images/USA_920x552.jpg"
              linkUrl="https://www.theguardian.com/us"
              linkText="Visit US edition"
            />
            <ResponsiveCardVariant1
              title="Australia edition"
              imagePath="/about/images/australia_920x552.jpg"
              linkUrl="https://www.theguardian.com/au"
              linkText="Visit Australia edition"
            />
            <ResponsiveCardVariant1
              title="Europe edition"
              imagePath="/about/images/europe_920x552.jpg"
              linkUrl="https://www.theguardian.com/europe"
              linkText="Visit Europe edition"
            />
            <ResponsiveCardVariant1
              title="International edition"
              imagePath="/about/images/world_920x552.jpg"
              linkUrl="https://www.theguardian.com/international"
              linkText="Visit International edition"
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
      <ContactAndWorkWithUs />
    </main>
    <Footer />
  </>
);

export default HomePage;
