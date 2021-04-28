/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import BoxContainer from "../../components/boxContainer";
import ContactAndWorkForUs from "../../components/contactAndWorkForUs";
import FullWidthText from "../../components/fullWidthText";
import Header from "../../components/header";
import { PageStyles } from "../../components/pageStyles";
import { neutral } from "@guardian/src-foundations/palette";
import {
  headingCss,
  twoThenOneColumnResponsiveCardHolder,
} from "../../styles/sharedStyles";
import ResponsiveCardVariant1 from "../../components/responsiveCardVariant1";
import FullWidthImage from "../../components/fullWidthImage";
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import("../../components/footer/footer"), {
  ssr: false,
});

const scottTrustBkg = {
  mobile: `linear-gradient(to top, ${neutral[100]} 42px, ${neutral[97]} 42px)`,
  tablet: `linear-gradient(to top, ${neutral[100]} 49px, ${neutral[97]} 49px)`,
  wide: `linear-gradient(to top, ${neutral[100]} 58px, ${neutral[97]} 58px)`,
};

const OurHistory = () => (
  <>
    <PageStyles />
    <Header
      navSections={[
        {
          title: "About us",
          isSelected: false,
          link: "/",
        },
        {
          title: "Our organisation",
          isSelected: false,
          link: "/our-organisation",
        },
        {
          title: "Our history",
          isSelected: true,
          link: "/our-history",
        },
        {
          title: "Journalism",
          isSelected: false,
          link: "/journalism",
        },
      ]}
    />
    <FullWidthText theme="dark" title="Our History">
      <>
        <p>
          The Manchester Guardian was founded to promote the liberal interest in
          the aftermath of the 1819 Peterloo Massacre, and was first published
          on 5 May 1821. The Guardian achieved national and international
          recognition under the editorship of CP Scott, who held the post for 57
          years from 1872.
        </p>
        <p>
          In May 1921, CP Scott wrote a leading article to mark the centenary of
          the paper setting out the values of the Guardian: honesty, cleanness
          [integrity], courage, fairness, a sense of duty to the reader and a
          sense of duty to the community.
        </p>
      </>
    </FullWidthText>
    <FullWidthImage
      smallImageUrl="/images/history-full-width-small.png"
      largeImageUrl="/images/history-full-width-large.png"
    />
    <BoxContainer
      theme="light"
      background={{ backgroundColor: `${neutral[97]}` }}
      overlapTop={true}
    >
      <>
        <h2 css={headingCss}>Read more</h2>
        <div css={twoThenOneColumnResponsiveCardHolder}>
          <ResponsiveCardVariant1
            title="Advertising"
            imagePath="/images/history-2.png"
            linkUrl="https://www.theguardian.com/uk"
          />
          <ResponsiveCardVariant1
            title="Guardian Jobs"
            imagePath="/images/history-3.png"
            linkUrl="https://www.theguardian.com/uk"
          />
          <ResponsiveCardVariant1
            title="GNM Archive"
            imagePath="/images/history-4.png"
            linkUrl="https://www.theguardian.com/uk"
            alwaysImgOnLeft={true}
          />
        </div>
      </>
    </BoxContainer>
    <BoxContainer theme="light" background={scottTrustBkg}>
      <>
        <h2 css={headingCss}>The Scott Trust</h2>
        <div css={twoThenOneColumnResponsiveCardHolder}>
          <ResponsiveCardVariant1
            title="Scott Trust values"
            imagePath="/images/history-6.png"
            linkUrl="https://www.theguardian.com/uk"
          />
          <ResponsiveCardVariant1
            title="Scott Trust timeline"
            imagePath="/images/history-7.png"
            linkUrl="https://www.theguardian.com/uk"
          />
          <ResponsiveCardVariant1
            title="CP Scott’s centenary essay - a blueprint for independent journalism"
            imagePath="/images/history-8.png"
            linkUrl="https://www.theguardian.com/uk"
            alwaysImgOnLeft={true}
          />
        </div>
      </>
    </BoxContainer>
    <ContactAndWorkForUs />
    <Footer />
  </>
);

export default OurHistory;
