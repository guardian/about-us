/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import BoxContainer, {
  boxContainerPadding,
} from "../../components/boxContainer";
import { brand, neutral } from "@guardian/src-foundations";
import ContactAndWorkForUs from "../../components/contactAndWorkForUs";
import { Footer } from "../../components/footer/footer";
import FullWidthText from "../../components/fullWidthText";
import Header from "../../components/header";
import InnerText from "../../components/innerText";
import { PageStyles } from "../../components/pageStyles";
import ResponsiveCardVariant1 from "../../components/responsiveCardVariant1";
import {
  headingCss,
  singleColumnResponsiveCardHolder,
  threeColumnResponsiveCardHolder,
  twoColumnResponsiveCardHolder,
} from "../../styles/sharedStyles";
import FullWidthImage from "../../components/fullWidthImage";

// placeholder values for the background gradient until values are agreed upon for each breakpoint
const ourStructureBkg = {
  mobile: `linear-gradient(to top, #052962 20px, ${neutral[97]} 20px)`,
  tablet: `linear-gradient(to top, #052962 20px, ${neutral[97]} 20px)`,
  wide: `linear-gradient(to top, #052962 20px, ${neutral[97]} 20px)`,
};

const reportsBkg = {
  mobile: `linear-gradient(to top, #F6F6F6 calc(100% - ${boxContainerPadding.mobile} - 20px), #052962 calc(100% - ${boxContainerPadding.mobile} - 20px))`,
  tablet: `linear-gradient(to top, #F6F6F6 calc(100% - ${boxContainerPadding.tablet} - 20px), #052962 calc(100% - ${boxContainerPadding.tablet} - 20px))`,
  wide: `linear-gradient(to top, #F6F6F6 calc(100% - ${boxContainerPadding.wide} - 20px), #052962 calc(100% - ${boxContainerPadding.wide} - 20px))`,
};

const HomePage = () => (
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
          isSelected: true,
          link: "/our-organisation",
        },
        {
          title: "Our history",
          isSelected: false,
          link: "/our-history",
        },
        {
          title: "Journalism",
          isSelected: false,
          link: "/journalism",
        },
      ]}
    />
    <FullWidthText theme="dark" title="Our organisation">
      <>
        <p>
          Guardian Media Group has only one shareholder - The Scott Trust. The
          Trust forms part of a unique ownership structure for the Guardian that
          ensures editorial interests remain free of commercial pressures.
        </p>
        <p>
          Today more than half of our revenue comes directly from our readers,
          helping to support Guardian journalism and keep it open for everyone.
        </p>
      </>
    </FullWidthText>
    <FullWidthImage smallImageUrl="/images/organisation-full-width-small.png" largeImageUrl="/images/organisation-full-width-large.png" />
    <BoxContainer theme="light" background={ourStructureBkg} overlapTop={true}>
      <>
        <InnerText title="Our structure" theme="light">
          <>
            <p>
              Guardian Media Group (GMG) owns Guardian News &amp; Media (GNM) -
              the publisher of the Guardian and Observer newspapers in the UK,
              theguardian.com and Guardian US and Australia.
            </p>
            <p>
              The Scott Trust, named after our longest serving editor, CP Scott,
              exists to secure the financial and editorial independence of the
              Guardian in perpetuity.
            </p>
          </>
        </InnerText>
        <div css={twoColumnResponsiveCardHolder}>
          <ResponsiveCardVariant1
            title="About the Scott Trust"
            imagePath="/images/organisation-2.png"
            linkUrl="https://www.theguardian.com/uk"
          />
          <ResponsiveCardVariant1
            title="The Scott Trust board"
            imagePath="/images/organisation-3.png"
            linkUrl="https://www.theguardian.com/uk"
          />
          <ResponsiveCardVariant1
            title="About Guardian Media Group"
            imagePath="/images/organisation-4.png"
            linkUrl="https://www.theguardian.com/uk"
          />
          <ResponsiveCardVariant1
            title="GMG Board"
            imagePath="/images/organisation-5.png"
            linkUrl="https://www.theguardian.com/uk"
          />
        </div>
      </>
    </BoxContainer>
    <BoxContainer theme="light" background={{ backgroundColor: brand[400] }}>
      <h2 css={headingCss}>Leadership</h2>
    </BoxContainer>
    <BoxContainer theme="light" background={reportsBkg}>
      <>
        <h2 css={headingCss}>GMG financial and corporate reports</h2>
        <div css={twoColumnResponsiveCardHolder}>
          <ResponsiveCardVariant1
            title="Financial reports"
            imagePath="/images/organisation-9.png"
            linkUrl="https://www.theguardian.com/uk"
          />
          <ResponsiveCardVariant1
            title="Corporate policies"
            imagePath="/images/organisation-10.png"
            linkUrl="https://www.theguardian.com/uk"
          />
        </div>
      </>
    </BoxContainer>
    <BoxContainer theme="light" background={{ backgroundColor: neutral[97] }}>
      <>
        <InnerText title="Sustainability" theme="light">
          <>
            <p>
              As an organisation we recognise that the escalating climate crisis
              is the defining issue of our times.
            </p>
            <p>
              In 2019, we became the first major news organisation to certify as
              a B Corporation, and made a climate pledge to our readers
              committing to reach net zero carbon emissions by 2030.
            </p>
          </>
        </InnerText>
        <div css={threeColumnResponsiveCardHolder}>
          <ResponsiveCardVariant1
            title="GMG as a B Corporation"
            imagePath="/images/organisation-11.png"
            linkUrl="https://www.theguardian.com/uk"
          />
          <ResponsiveCardVariant1
            title="Our climate pledge"
            imagePath="/images/organisation-12.png"
            linkUrl="https://www.theguardian.com/uk"
          />
          <ResponsiveCardVariant1
            title="Sustainable business report"
            imagePath="/images/organisation-13.png"
            linkUrl="https://www.theguardian.com/uk"
          />
        </div>
      </>
    </BoxContainer>
    <BoxContainer
      theme="light"
      background={{ backgroundColor: `${neutral[97]}` }}
    >
      <>
        <InnerText title="Our people" theme="light">
          <p>
            The majority of our staff, around 90% of our workforce, are employed
            in the UK, and we have growing operations in the US and Australia.
            We value and respect all differences in all people, seen and unseen,
            and aspire to an open, supportive and inclusive culture which makes
            the Guardian a good place to work for everyone.
          </p>
        </InnerText>
        <div css={threeColumnResponsiveCardHolder}>
          <ResponsiveCardVariant1
            title="GMG as a B Corporation"
            imagePath="/images/organisation-14.png"
            linkUrl="https://www.theguardian.com/uk"
          />
          <ResponsiveCardVariant1
            title="Our climate pledge"
            imagePath="/images/organisation-15.png"
            linkUrl="https://www.theguardian.com/uk"
          />
          <ResponsiveCardVariant1
            title="Sustainable business report"
            imagePath="/images/organisation-16.png"
            linkUrl="https://www.theguardian.com/uk"
          />
        </div>
      </>
    </BoxContainer>
    <BoxContainer
      theme="light"
      background={{ backgroundColor: `${neutral[97]}` }}
    >
      <>
        <InnerText title="Commercial" theme="light">
          <p>
            GMG operates a diverse revenue model including reader revenues,
            advertising, jobs advertising, licencing and philanthropic funding.
            Revenue from readers now accounts for over 50% of GMG's annual
            revenues.
          </p>
        </InnerText>
        <div css={threeColumnResponsiveCardHolder}>
          <ResponsiveCardVariant1
            title="Advertising"
            imagePath="/images/organisation-18.png"
            linkUrl="https://www.theguardian.com/uk"
          />
          <ResponsiveCardVariant1
            title="Guardian Jobs"
            imagePath="/images/organisation-19.png"
            linkUrl="https://www.theguardian.com/uk"
          />
          <ResponsiveCardVariant1
            title="Philanthropic funding"
            imagePath="/images/organisation-20.png"
            linkUrl="https://www.theguardian.com/uk"
          />
        </div>
      </>
    </BoxContainer>
    <BoxContainer
      theme="light"
      background={{ backgroundColor: `${neutral[97]}` }}
    >
      <>
        <InnerText title="Guardian Foundation" theme="light">
          <p>
            Through the Scott Trust, our independent charity the Guardian
            Foundation supports media under threat, promotes diversity in the
            media and empowers children and young people to engage with the
            news. The charity envisions a world in which all people can tell
            their stories, access the truth and hold power to account.
          </p>
        </InnerText>
        <div css={singleColumnResponsiveCardHolder}>
          <ResponsiveCardVariant1
            title="Guardian Foundation"
            imagePath="/images/organisation-21.png"
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

export default HomePage;
