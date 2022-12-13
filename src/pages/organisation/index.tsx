/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import BoxContainer, {
  boxContainerPadding,
} from "../../components/boxContainer";
import { brand, neutral } from "@guardian/src-foundations";
import ContactAndWorkForUs from "../../components/contactAndWorkForUs";
import FullWidthText from "../../components/fullWidthText";
import Header from "../../components/header";
import InnerText from "../../components/innerText";
import { PageStyles } from "../../components/pageStyles";
import ResponsiveCardVariant1 from "../../components/responsiveCardVariant1";
import {
  headingCss,
  singleColumnResponsiveCardHolder,
  skipToContentStyles,
  threeColumnResponsiveCardHolder,
  twoColumnResponsiveCardHolder,
} from "../../styles/sharedStyles";
import FullWidthImage from "../../components/fullWidthImage";
import {
  LeadershipProfile,
  leadershipProfilesHolder,
} from "../../components/leadershipProfile";
import { DetailsAndImage } from "../../components/detailsAndImage";
import dynamic from "next/dynamic";
import Head from "next/head";

const Footer = dynamic(() => import("../../components/footer/footer"), {
  ssr: false,
});

const ourStructureBkg = {
  mobile: `linear-gradient(to top, #052962 41px, ${neutral[97]} 41px)`,
  tablet: `linear-gradient(to top, #052962 80px, ${neutral[97]} 80px)`,
  desktop: `linear-gradient(to top, #052962 90px, ${neutral[97]} 90px)`,
  wide: `linear-gradient(to top, #052962 85px, ${neutral[97]} 85px)`,
};

const reportsBkg = {
  mobile: `linear-gradient(to top, #F6F6F6 calc(100% - ${boxContainerPadding.mobile} - 41px), #052962 calc(100% - ${boxContainerPadding.mobile} - 41px))`,
  tablet: `linear-gradient(to top, #F6F6F6 calc(100% - ${boxContainerPadding.tablet} - 80px), #052962 calc(100% - ${boxContainerPadding.tablet} - 80px))`,
  desktop: `linear-gradient(to top, #F6F6F6 calc(100% - ${boxContainerPadding.tablet} - 90px), #052962 calc(100% - ${boxContainerPadding.tablet} - 90px))`,
  wide: `linear-gradient(to top, #F6F6F6 calc(100% - ${boxContainerPadding.wide} - 85px), #052962 calc(100% - ${boxContainerPadding.wide} - 85px))`,
};

const guardianFoundationBkg = {
  mobile: `linear-gradient(to top, ${neutral[100]} 42px, ${neutral[97]} 42px)`,
  tablet: `linear-gradient(to top, ${neutral[100]} 49px, ${neutral[97]} 49px)`,
  wide: `linear-gradient(to top, ${neutral[100]} 58px, ${neutral[97]} 58px)`,
};

const HomePage = () => (
  <>
    <Head>
      <title>About our organisation | The Guardian</title>
    </Head>
    <PageStyles />
    <a href="#main" css={skipToContentStyles}>
      Skip to main content
    </a>
    <Header
      navSections={[
        {
          title: "About us",
          isSelected: false,
          link: "/about/",
        },
        {
          title: "Our organisation",
          isSelected: true,
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
    <main id="main">
      <FullWidthText theme="dark" title="Our organisation">
        <>
          <p>
            Guardian Media Group has only one shareholder - The Scott Trust. The
            Trust forms part of a unique ownership structure for the Guardian
            that ensures editorial interests remain free of commercial
            pressures.
          </p>
          <p>
            Today more than half of our revenue comes directly from our readers,
            helping to support Guardian journalism and keep it open for
            everyone.
          </p>
        </>
      </FullWidthText>
      <FullWidthImage
        smallImageUrl="/about/images/organisation-full-width-small.jpg"
        largeImageUrl="/about/images/organisation-full-width-large.jpg"
      />
      <BoxContainer
        theme="light"
        background={ourStructureBkg}
        overlapTop={true}
      >
        <>
          <InnerText title="Our structure" theme="light">
            <>
              <p>
                Guardian Media Group (GMG) owns Guardian News &amp; Media (GNM)
                - the publisher of the Guardian and Observer newspapers in the
                UK, theguardian.com and Guardian US and Australia.
              </p>
              <p>
                The Scott Trust, named after our longest serving editor, CP
                Scott, exists to secure the financial and editorial independence
                of the Guardian in perpetuity.
              </p>
            </>
          </InnerText>
          <div css={twoColumnResponsiveCardHolder}>
            <ResponsiveCardVariant1
              title="About the Scott Trust"
              imagePath="/about/images/organisation-2.jpg"
              linkUrl="https://www.theguardian.com/the-scott-trust"
            />
            <ResponsiveCardVariant1
              title="The Scott Trust board"
              imagePath="/about/images/organisation-3.jpg"
              linkUrl="https://www.theguardian.com/the-scott-trust/2015/jul/26/the-scott-trust-board"
            />
            <ResponsiveCardVariant1
              title="About Guardian Media Group"
              imagePath="/about/images/front-page-3.jpg"
              linkUrl="https://www.theguardian.com/gmg"
            />
            <ResponsiveCardVariant1
              title="GMG Board"
              imagePath="/about/images/organisation-5.jpg"
              linkUrl="https://www.theguardian.com/gmg/2015/jul/23/gnm-board"
            />
          </div>
        </>
      </BoxContainer>
      <BoxContainer theme="light" background={{ backgroundColor: brand[400] }}>
        <>
          <h2 css={headingCss}>Leadership</h2>
          <div css={leadershipProfilesHolder}>
            <LeadershipProfile
              imageUrl="/about/images/organisation-6.jpg"
              title={{
                name: "Katharine Viner",
                job: "Editor-in-chief",
                organisation: "Guardian News & Media",
              }}
              bodyCopy="Katharine Viner is the editor-in-chief of Guardian News & Media. The editor-in-chief reports only to the Scott Trust and has complete editorial independence. She also sits on the boards of the Scott Trust and Guardian Media Group, and the executive committee of Guardian News & Media."
            />
            <LeadershipProfile
              imageUrl="/about/images/organisation-7.jpg"
              title={{
                name: "Anna Bateson",
                job: "Chief executive",
                organisation: "Guardian Media Group",
              }}
              bodyCopy="Anna Bateson is the chief executive of Guardian Media Group (GMG), a role she took up in September 2022. Anna worked at the Guardian from 2016 onward, first as VP for platforms and partnerships and then from 2017-2020 as chief customer officer, and briefly as interim chief executive. Prior to the Guardian, Anna worked at a number of tech and media organisations, including YouTube, Google, ITV, MTV and Bloomberg, and was most recently CEO at a VC-backed e-commerce beauty business."
            />
          </div>
          <DetailsAndImage
            imageUrl="/about/images/organisation-8.jpg"
            title="GNM executive committee"
            bodyCopy="Read more about the management team of Guardian News & Media"
            readMoreUrl="https://www.theguardian.com/gnm-press-office/gnm-executive-committee"
          />
        </>
      </BoxContainer>
      <BoxContainer theme="light" background={reportsBkg}>
        <>
          <h2 css={headingCss}>GMG financial reports and corporate policies</h2>
          <div css={twoColumnResponsiveCardHolder}>
            <ResponsiveCardVariant1
              title="Financial reports"
              imagePath="/about/images/organisation-9.jpg"
              linkUrl="https://www.theguardian.com/gmg/2015/jul/27/guardian-media-group-annual-financial-reports"
            />
            <ResponsiveCardVariant1
              title="Corporate policies"
              imagePath="/about/images/organisation-10.jpg"
              linkUrl="https://www.theguardian.com/gmg/2018/mar/14/corporate-reports-and-policies"
            />
          </div>
        </>
      </BoxContainer>
      <BoxContainer theme="light" background={{ backgroundColor: neutral[97] }}>
        <>
          <InnerText title="Sustainability" theme="light">
            <>
              <p>
                As an organisation we recognise that the escalating climate
                crisis is the defining issue of our times.
              </p>
              <p>
                In 2019, we became the first major news organisation to certify
                as a B Corporation, and made a climate pledge to our readers
                committing to reach net zero carbon emissions by 2030.
              </p>
              <p>
                In 2020 we announced we will no longer accept advertising from
                oil and gas companies, becoming the first major global news
                organisation to stop accepting money from companies that extract
                fossil fuels.
              </p>
            </>
          </InnerText>
          <div css={threeColumnResponsiveCardHolder}>
            <ResponsiveCardVariant1
              title="GMG as a B Corporation"
              imagePath="/about/images/organisation-11.jpg"
              linkUrl="https://www.theguardian.com/gnm-press-office/2019/oct/16/guardian-media-group-becomes-first-major-news-organisation-to-become-a-b-corporation-and-pledges-to-reach-net-zero-emissions-by-2030"
            />
            <ResponsiveCardVariant1
              title="Positive impact and sustainability report"
              imagePath="/about/images/organisation-13.jpg"
              linkUrl="https://www.theguardian.com/gmg/2021/aug/25/positive-impact-and-sustainability-report"
            />
            <ResponsiveCardVariant1
              title="Our climate pledge"
              imagePath="/about/images/organisation-12.jpg"
              linkUrl="https://www.theguardian.com/environment/2021/oct/25/the-guardians-climate-pledge"
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
              We value and respect all differences in people, seen and unseen,
              and aspire to an open, supportive and inclusive culture which
              makes the Guardian a good place to work for everyone. We have a
              global workforce, with the majority of our staff in the UK and
              growing operations in Australia and the US.
            </p>
          </InnerText>
          <div css={threeColumnResponsiveCardHolder}>
            <ResponsiveCardVariant1
              title="Diversity, equity and inclusion"
              imagePath="/about/images/organisation-14.jpg"
              linkUrl="https://www.theguardian.com/about/2021/apr/30/diversity-equity-and-inclusion"
            />
            <ResponsiveCardVariant1
              title="Employee engagement"
              imagePath="/about/images/organisation-workplace.jpg"
              linkUrl="https://www.theguardian.com/about/2021/apr/30/employee-engagement"
            />
            <ResponsiveCardVariant1
              title="Work for us"
              imagePath="/about/images/organisation-16.jpg"
              linkUrl="https://workforus.theguardian.com/"
            />
          </div>
        </>
      </BoxContainer>
      <BoxContainer
        theme="light"
        background={{ backgroundColor: `${neutral[97]}` }}
      >
        <>
          <InnerText title="Our revenue mix" theme="light">
            <p>
              GMG operates a diverse revenue model including reader revenues,
              advertising, jobs advertising, licensing and philanthropic
              funding. We are increasingly global with growing commercial
              operations in the US and Australia. Revenue from readers now
              accounts for over 50% of GMG's annual revenue, with more than half
              of reader revenue coming from readers outside the UK.
            </p>
          </InnerText>
          <DetailsAndImage
            imageUrl="/about/images/organisation-17.jpg"
            title="Reader funding"
            bodyCopy="Readers can support the Guardian through a digital or print subscription, a recurring or single contribution or as a patron. Read more about our subscriptions:"
            readMoreUrl="https://support.theguardian.com/uk/subscribe?CMP=ppc_mem_&gclid=CjwKCAjw6fCCBhBNEiwAem5SOy61gdjmDXnbjnURNn2-xbO9vEeSd2xYypEw7Y4u9A-qu5-ZJ-ZehxoC41oQAvD_BwE"
          />
          <div css={threeColumnResponsiveCardHolder}>
            <ResponsiveCardVariant1
              title="Advertising"
              imagePath="/about/images/organisation-18.jpg"
              linkUrl="https://advertising.theguardian.com/"
            />
            <ResponsiveCardVariant1
              title="Guardian Jobs"
              imagePath="/about/images/organisation-19.jpg"
              linkUrl="https://jobs.theguardian.com/"
            />
            <ResponsiveCardVariant1
              title="Philanthropic funding"
              imagePath="/about/images/organisation-20.jpg"
              linkUrl="https://www.theguardian.com/info/2018/oct/02/philanthropic-partnerships-at-the-guardian"
            />
          </div>
        </>
      </BoxContainer>
      <BoxContainer theme="light" background={guardianFoundationBkg}>
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
              imagePath="/about/images/organisation-21.jpg"
              linkUrl="https://theguardianfoundation.org/"
              alwaysImgOnLeft={true}
            />
          </div>
        </>
      </BoxContainer>
      <ContactAndWorkForUs />
    </main>
    <Footer />
  </>
);

export default HomePage;
