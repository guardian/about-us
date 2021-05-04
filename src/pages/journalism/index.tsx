/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import BoxContainer from "../../components/boxContainer";
import ContactAndWorkForUs from "../../components/contactAndWorkForUs";
import FullWidthText from "../../components/fullWidthText";
import Header from "../../components/header";
import InnerText from "../../components/innerText";
import { PageStyles } from "../../components/pageStyles";
import { neutral } from "@guardian/src-foundations";
import {
  headingCss,
  oneThenThreeColumnResponsiveCardHolder,
  responsiveCardV2Holder,
  twoColumnResponsiveCardHolder,
} from "../../styles/sharedStyles";
import ResponsiveCardVariant1 from "../../components/responsiveCardVariant1";
import FullWidthImage from "../../components/fullWidthImage";
import ResponsiveCardVariant2 from "../../components/responsiveCardVariant2";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("../../components/footer/footer"), {
  ssr: false,
});

const gotAStoryBkg = {
  mobile: `linear-gradient(to top, ${neutral[100]} 42px, ${neutral[97]} 42px)`,
  tablet: `linear-gradient(to top, ${neutral[100]} 49px, ${neutral[97]} 49px)`,
  wide: `linear-gradient(to top, ${neutral[100]} 58px, ${neutral[97]} 58px)`,
};

const JournalismPage = () => (
  <>
    <PageStyles />
    <Header
      navSections={[
        {
          title: "About us",
          isSelected: false,
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
          isSelected: true,
          link: "/about/journalism",
        },
      ]}
    />

    <FullWidthText theme="dark" title="Journalism">
      <p>
        The Guardian has a global reputation for holding power to account and
        championing the voices of those less heard. Our Covid-19 investigations
        exposed governmental and social failings, as did our earlier work on the
        Snowden disclosures, the Windrush scandal, Cambridge Analytica and the
        Panama Papers. We are passionate about the climate emergency, social
        justice, fairness and progress. We remain dedicated to truth and to
        bringing about a more hopeful future.
      </p>
    </FullWidthText>
    <FullWidthImage
      smallImageUrl="/about/images/journalism-full-width-small.jpg"
      largeImageUrl="/about/images/journalism-full-width-large.jpg"
    />
    <BoxContainer
      theme="light"
      background={{ backgroundColor: `${neutral[97]}` }}
      overlapTop={true}
    >
      <>
        <InnerText title="Our values and mission for journalism" theme="light">
          <p>
            The Scott Trust, which owns the Guardian, was established in 1936 to
            secure the financial and editorial independence of the Guardian in
            perpetuity, and to safeguard the journalistic freedom and liberal
            values of the Guardian free from commercial or political
            interference. To this day our independence and values drive Guardian
            journalism.
          </p>
        </InnerText>
        <div css={twoColumnResponsiveCardHolder}>
          <ResponsiveCardVariant1
            title="A mission for journalism: an essay by our editor"
            imagePath="/about/images/front-page-2.jpg"
            linkUrl="https://www.theguardian.com/news/2017/nov/16/a-mission-for-journalism-in-a-time-of-crisis"
          />
          <ResponsiveCardVariant1
            title="How the Guardian covered 2020"
            imagePath="/about/images/journalism-3.jpg"
            linkUrl="https://www.theguardian.com/info/ng-interactive/2020/dec/21/the-guardian-in-2020"
          />
          <ResponsiveCardVariant1
            title="How the Guardian is editorially independent"
            imagePath="/about/images/journalism-4.jpg"
            linkUrl="https://www.theguardian.com/about/2017/nov/17/who-owns-the-guardian-our-unique-independent-structure"
          />
          <ResponsiveCardVariant1
            title="CP Scott’s centenary essay - a blueprint for independent journalism"
            imagePath="/about/images/front-page-5.jpg"
            linkUrl="https://www.theguardian.com/sustainability/cp-scott-centenary-essay"
          />
        </div>
      </>
    </BoxContainer>
    <BoxContainer
      theme="light"
      background={{ backgroundColor: `${neutral[97]}` }}
    >
      <>
        <h2 css={headingCss}>Editors</h2>
        <div css={oneThenThreeColumnResponsiveCardHolder}>
          <ResponsiveCardVariant1
            title="Katharine Viner, editor-in-chief, Guardian News & Media"
            imagePath="/about/images/journalism-5.jpg"
            linkUrl="https://www.theguardian.com/profile/katharineviner"
            alwaysImgOnLeft={true}
          />
          <ResponsiveCardVariant1
            title="John Mulholland, editor of Guardian US"
            imagePath="/about/images/journalism-6.jpg"
            linkUrl="https://www.theguardian.com/profile/johnmulholland"
          />
          <ResponsiveCardVariant1
            title="Lenore Taylor, editor of Guardian Australia"
            imagePath="/about/images/journalism-7.jpg"
            linkUrl="https://www.theguardian.com/profile/lenore-taylor"
          />
          <ResponsiveCardVariant1
            title="Paul Webster, editor of the Observer"
            imagePath="/about/images/journalism-8.jpg"
            linkUrl="https://www.theguardian.com/profile/paul-webster"
          />
        </div>
      </>
    </BoxContainer>
    <BoxContainer
      theme="light"
      background={{ backgroundColor: `${neutral[97]}` }}
    >
      <>
        <InnerText title="Guardian journalism" theme="light">
          <p>
            The Guardian’s purposeful journalism, serving our global audience,
            includes print and digital products, podcasts, video, infographics,
            email newsletters and a dedicated programme of live discussions,
            debates and interviews.
          </p>
        </InnerText>
        <div css={responsiveCardV2Holder}>
          <ResponsiveCardVariant2
            title="Website"
            href="https://www.theguardian.com"
            imageUrl="/about/images/journalism-9.jpg"
          />
          <ResponsiveCardVariant2
            title="Apps"
            href="https://support.theguardian.com/subscribe/digital"
            imageUrl="/about/images/journalism-10.jpg"
          />
          <ResponsiveCardVariant2
            title="Newsletters"
            href="https://www.theguardian.com/email-newsletters"
            imageUrl="/about/images/journalism-11.jpg"
          />
          <ResponsiveCardVariant2
            title="The Guardian newspaper"
            href="https://www.theguardian.com/gnm-archive/2002/jun/06/1"
            imageUrl="/about/images/journalism-12.jpg"
          />
          <ResponsiveCardVariant2
            title="The Observer newspaper"
            href="https://www.theguardian.com/gnm-archive/2002/jun/06/2"
            imageUrl="/about/images/journalism-13.jpg"
          />
          <ResponsiveCardVariant2
            title="The Guardian Weekly"
            href="https://www.theguardian.com/weekly"
            imageUrl="/about/images/journalism-14.jpg"
          />
          <ResponsiveCardVariant2
            title="Podcasts"
            href="https://www.theguardian.com/podcasts"
            imageUrl="/about/images/journalism-15.jpg"
          />
          <ResponsiveCardVariant2
            title="Video & documentaries"
            href="https://www.theguardian.com/video"
            imageUrl="/about/images/journalism-16.jpg"
          />
          <ResponsiveCardVariant2
            title="Live events"
            href="https://membership.theguardian.com/events"
            imageUrl="/about/images/journalism-17.jpg"
          />
        </div>
        <div css={twoColumnResponsiveCardHolder}>
          <h3>International editions</h3>
          <ResponsiveCardVariant1
            title="Guardian US"
            imagePath="/about/images/front-page-11.jpg"
            linkUrl="https://www.theguardian.com/info/about-guardian-us"
            linkText="Visit Guardian US"
          />
          <ResponsiveCardVariant1
            title="Guardian Australia"
            imagePath="/about/images/front-page-12.jpg"
            linkUrl="https://www.theguardian.com/info/about-guardian-australia"
            linkText="Guardian Australia"
          />
        </div>
      </>
    </BoxContainer>
    <BoxContainer
      theme="light"
      background={{ backgroundColor: `${neutral[97]}` }}
    >
      <>
        <h2 css={headingCss}>Editorial standards</h2>
        <div css={twoColumnResponsiveCardHolder}>
          <ResponsiveCardVariant1
            title="Editorial guidelines for journalists"
            imagePath="/about/images/journalism-20.jpg"
            linkUrl="https://www.theguardian.com/info/2015/aug/05/the-guardians-editorial-code"
          />
          <ResponsiveCardVariant1
            title="About our readers’ editor who manages complaints"
            imagePath="/about/images/journalism-21.jpg"
            linkUrl="https://www.theguardian.com/info/2013/sep/23/guardian-readers-editor"
          />
          <ResponsiveCardVariant1
            title="Community standards"
            imagePath="/about/images/journalism-22.jpg"
            linkUrl="https://www.theguardian.com/community-standards"
          />
          <ResponsiveCardVariant1
            title="Style guide"
            imagePath="/about/images/journalism-23.jpg"
            linkUrl="https://www.theguardian.com/guardian-observer-style-guide-a"
          />
        </div>
      </>
    </BoxContainer>
    <BoxContainer theme="light" background={gotAStoryBkg}>
      <>
        <InnerText title="Got a story?" theme="light">
          <p>
            The Guardian welcomes anonymous and confidential news tips to help
            inform our journalism. Find out how to get in touch with the
            Guardian to share a story or reach our editorial departments.
          </p>
        </InnerText>
        <div css={twoColumnResponsiveCardHolder}>
          <ResponsiveCardVariant1
            title="Contact us securely"
            imagePath="/about/images/journalism-24.jpg"
            linkUrl="https://www.theguardian.com/help/ng-interactive/2017/mar/17/contact-the-guardian-securely"
          />
          <ResponsiveCardVariant1
            title="Contact our editorial desks "
            imagePath="/about/images/journalism-25.jpg"
            linkUrl="https://www.theguardian.com/help/contact-us"
          />
        </div>
      </>
    </BoxContainer>
    <ContactAndWorkForUs />
    <Footer />
  </>
);

export default JournalismPage;
