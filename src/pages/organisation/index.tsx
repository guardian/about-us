import { css } from "@emotion/react";
import BoxContainer, {
  boxContainerPadding,
} from "../../components/boxContainer";
import { brand, neutral } from "@guardian/source-foundations";
import ContactAndWorkForUs from "../../components/contactAndWorkForUs";
import FullWidthText from "../../components/fullWidthText";
import Header from "../../components/header";
import InnerText from "../../components/innerText";
import { PageStyles } from "../../components/pageStyles";
import ResponsiveCardVariant1 from "../../components/responsiveCardVariant1";
import {
  headingCss,
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

const marginTop = css`
  margin-top: 0;
`;

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

const HomePage = () => (
  <>
    <Head>
      <title>Guardian Media Group | The Guardian</title>
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
          title: "Guardian Media Group",
          isSelected: true,
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
      <FullWidthText theme="dark" title="Guardian Media Group">
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
          <InnerText title="Our organisation" theme="light">
            <>
              <p>
                Guardian Media Group is amongst the world’s leading media
                organisations. Its core business is Guardian News &amp; Media
                (GNM), publisher of theguardian.com, one of the largest
                English-speaking quality news websites in the world.
              </p>
              <p>
                The Guardian was first published in 1821. Today, the Guardian
                serves readers around the world through five thriving digital
                editions, and audiences from outside of the UK represent more
                than two-thirds of the Guardian’s total digital audience. It
                also prints the Guardian newspaper six days a week in the UK.
              </p>
            </>
          </InnerText>
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
                job: "editor-in-chief",
                organisation: "Guardian News & Media",
              }}
              bodyCopy="Katharine Viner is editor-in-chief of the Guardian, a position she has held since June 2015. Prior to this, Katharine was deputy editor 2008-2015, launched the award-winning Guardian Australia in 2013, and was also editor of Guardian US, based in New York. Since becoming editor, she has put the Guardian’s purpose at the heart of its journalism and led the development of the Guardian’s successful reader contribution strategy. Under Katharine’s leadership, the Guardian became the first news organisation in the world to win both an Oscar and a Bafta."
            />
            <LeadershipProfile
              imageUrl="/about/images/organisation-7.jpg"
              title={{
                name: "Anna Bateson",
                job: "chief executive",
                organisation: "Guardian Media Group",
              }}
              bodyCopy="Anna Bateson is the chief executive of Guardian Media Group (GMG), a role she took up in September 2022. Anna worked at the Guardian from 2016 onward, first as VP for platforms and partnerships and then from 2017-2020 as chief customer officer, and briefly as interim chief executive. Prior to the Guardian, Anna worked at a number of tech and media organisations, including YouTube, Google, ITV, MTV and Bloomberg, and was most recently CEO at a VC-backed e-commerce beauty business."
            />
          </div>
          <div css={twoColumnResponsiveCardHolder}>
            <ResponsiveCardVariant1
              title="GNM executive committee"
              imagePath="/about/images/organisation-8.jpg"
              linkUrl="https://www.theguardian.com/gnm-press-office/gnm-executive-committee"
            />
            <ResponsiveCardVariant1
              title="GMG Board"
              imagePath="/about/images/organisation-5.jpg"
              linkUrl="https://www.theguardian.com/gmg/2015/jul/23/gnm-board"
            />
          </div>
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
                Being a purposeful and sustainable business is central to the
                Guardian’s strategy, bringing together many aspects of our work
                and the decisions we take together.
              </p>
              <p>
                In 2019, we became the first major news organisation to certify
                as a B Corporation. In 2023, we successfully renewed our
                certification, increasing our overall score and making progress
                in almost every category.
              </p>
              <p>
                We are committed to reaching our goal of eliminating two thirds
                of our emissions by 2030 and report on this annually.
              </p>
            </>
          </InnerText>
          <div css={threeColumnResponsiveCardHolder}>
            <ResponsiveCardVariant1
              title="GMG as a B Corporation"
              imagePath="/about/images/organisation-11.jpg"
              linkUrl="https://www.bcorporation.net/en-us/find-a-b-corp/company/guardian-media-group/"
            />
            <ResponsiveCardVariant1
              title="Positive impact and sustainability report"
              imagePath="/about/images/organisation-13.jpg"
              linkUrl="https://www.theguardian.com/gmg/2018/mar/14/corporate-reports-and-policies"
            />
            <ResponsiveCardVariant1
              title="Our climate commitments"
              imagePath="https://i.guim.co.uk/img/media/4238de7bd948c2563120a1785c7f9993baa3fa4c/0_0_1800_1080/master/1800.jpg?width=630&dpr=1&s=none"
              linkUrl="https://www.theguardian.com/environment/2023/nov/28/guardian-environment-pledge-2023"
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
          <InnerText title="Supporting the Guardian" theme="light">
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
            imageUrl="/about/images/reader-funding.png"
            title="Reader funding"
            bodyCopy="Guardian readers can show their financial support for our journalism by giving a single amount as often as they like, or by setting up a recurring payment every month or year. To support at a higher level, they can join our Patrons programme."
            readMoreUrl="https://www.theguardian.com/media/2022/dec/09/what-do-you-get-when-you-support-the-guardian-supporter-subscribe-contribute"
          />
          <div css={[threeColumnResponsiveCardHolder, marginTop]}>
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
      <ContactAndWorkForUs />
    </main>
    <Footer />
  </>
);

export default HomePage;
