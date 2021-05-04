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
          link: "/about/",
        },
        {
          title: "Our organisation",
          isSelected: false,
          link: "/about/organisation",
        },
        {
          title: "Our history",
          isSelected: true,
          link: "/about/history",
        },
        {
          title: "Journalism",
          isSelected: false,
          link: "/about/journalism",
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
      smallImageUrl="/about/images/history-full-width-small.jpg"
      largeImageUrl="/about/images/history-full-width-large.jpg"
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
            title="History of the Guardian"
            imagePath="/about/images/history-2.jpg"
            linkUrl="https://www.theguardian.com/gnm-archive/2002/jun/06/1"
          />
          <ResponsiveCardVariant1
            title="History of The Observer"
            imagePath="/about/images/history-3.jpg"
            linkUrl="https://www.theguardian.com/gnm-archive/2002/jun/06/2"
          />
          <ResponsiveCardVariant1
            title="GNM Archive"
            imagePath="/about/images/history-4.jpg"
            linkUrl="https://www.theguardian.com/gnm-archive"
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
            imagePath="/about/images/front-page-4.jpg"
            linkUrl="https://www.theguardian.com/the-scott-trust/2015/jul/26/the-scott-trust"
          />
          <ResponsiveCardVariant1
            title="Scott Trust timeline"
            imagePath="/about/images/history-7.jpg"
            linkUrl="https://www.theguardian.com/the-scott-trust/2015/jul/26/a-history-of-the-scott-trust"
          />
          <ResponsiveCardVariant1
            title="CP Scott’s centenary essay"
            imagePath="/about/images/history-8.jpg"
            linkUrl="https://www.theguardian.com/sustainability/cp-scott-centenary-essay"
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
