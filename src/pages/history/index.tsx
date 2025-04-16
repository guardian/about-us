import BoxContainer from "../../components/boxContainer";
import ContactAndWorkForUs from "../../components/contactAndWorkForUs";
import FullWidthText from "../../components/fullWidthText";
import Header from "../../components/header";
import { PageStyles } from "../../components/pageStyles";
import { neutral } from "@guardian/source-foundations";
import {
  headingCss,
  singleColumnResponsiveCardHolder,
  twoColumnResponsiveCardHolder,
  skipToContentStyles,
} from "../../styles/sharedStyles";
import ResponsiveCardVariant1 from "../../components/responsiveCardVariant1";
import FullWidthImage from "../../components/fullWidthImage";
import dynamic from "next/dynamic";
import Head from "next/head";
import UnfinishedBusinessThrasher from "../../components/unfinishedBusinessThrasher";
import InnerText from "../../components/innerText";

const Footer = dynamic(() => import("../../components/footer/footer"), {
  ssr: false,
});

const scottTrustBkg = {
  mobile: `linear-gradient(to top, ${neutral[100]} 42px, ${neutral[97]} 42px)`,
  tablet: `linear-gradient(to top, ${neutral[100]} 49px, ${neutral[97]} 49px)`,
  wide: `linear-gradient(to top, ${neutral[100]} 58px, ${neutral[97]} 58px)`,
};

const guardianFoundationBkg = {
  mobile: `linear-gradient(to top, ${neutral[100]} 42px, ${neutral[97]} 42px)`,
  tablet: `linear-gradient(to top, ${neutral[100]} 49px, ${neutral[97]} 49px)`,
  wide: `linear-gradient(to top, ${neutral[100]} 58px, ${neutral[97]} 58px)`,
};

const OurHistory = () => (
  <>
    <Head>
      <title>The Scott Trust | The Guardian</title>
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
          isSelected: false,
          link: "/about/organisation",
        },
        {
          title: "The Scott Trust",
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
    <main id="main">
      <FullWidthText theme="dark" title="The Scott Trust">
        <>
          <p>
            The Scott Trust has been the sole shareholder in Guardian Media
            Group since 1936, when John Russell Scott renounced his family’s
            stake in the Guardian and transferred ownership to a group of
            trustees. The shareholders of the Scott Trust take no dividend from
            the business. All of GMG’s profits are reinvested in journalism and
            do not benefit a proprietor or shareholders.
          </p>
          <p>
            The Scott Trust’s ownership of the Guardian ensures our
            editor-in-chief and journalists are shielded from any undue
            influences, whether commercial, political or financial. This is a
            powerful and liberating model for journalism. It ensures that
            editorial decisions — what we say and how we say it — are decisions
            for the editor-in-chief.
          </p>
          <p>
            While the Guardian has grown over this period to serve tens of
            millions of regular readers all over the world, with newsrooms in
            the UK, US and Australia, the Scott Trust’s founding purpose has
            remained the same:{" "}
            <em>
              “to secure the financial and editorial independence of the
              Guardian in perpetuity”
            </em>
            .
          </p>
        </>
      </FullWidthText>
      <FullWidthImage
        smallImageUrl="/about/images/history-full-width-small.jpg"
        largeImageUrl="/about/images/history-full-width-large.jpg"
      />
      <BoxContainer theme="light" background={scottTrustBkg}>
        <>
          <h2 css={headingCss}>The Scott Trust</h2>
          <div css={twoColumnResponsiveCardHolder}>
            <ResponsiveCardVariant1
              title="The Scott Trust board"
              imagePath="/about/images/organisation-3.jpg"
              linkUrl="https://www.theguardian.com/the-scott-trust/2015/jul/26/the-scott-trust-board"
            />
            <ResponsiveCardVariant1
              title="Annual reports and letter from the chair"
              imagePath="/about/images/organisation-9.jpg"
              linkUrl="https://www.theguardian.com/the-scott-trust/2015/jul/23/the-scott-trust-financials"
            />
            <ResponsiveCardVariant1
              title="The Scott Trust values"
              imagePath="/about/images/front-page-4.jpg"
              linkUrl="https://www.theguardian.com/the-scott-trust/2015/jul/26/the-scott-trust"
            />
            <ResponsiveCardVariant1
              title="CP Scott’s centenary essay"
              imagePath="https://i.guim.co.uk/img/media/f1e4961ebcf53adaa7f182dd84b01f81a1bef7fa/0_0_5000_3000/master/5000.jpg?width=620&dpr=2&s=none"
              linkUrl="https://www.theguardian.com/sustainability/cp-scott-centenary-essay"
            />
          </div>
        </>
      </BoxContainer>
      <BoxContainer
        theme="light"
        background={{ backgroundColor: `${neutral[97]}` }}
        overlapTop={true}
        paddingBottom={true}
      >
        <>
          <h2 css={headingCss}>Read more</h2>
          <div css={twoColumnResponsiveCardHolder}>
            <ResponsiveCardVariant1
              title="History of the Guardian"
              imagePath="/about/images/history-2.jpg"
              linkUrl="https://www.theguardian.com/gnm-archive/2002/jun/06/1"
            />
            <ResponsiveCardVariant1
              title="GNM Archive"
              imagePath="/about/images/history-4.jpg"
              linkUrl="https://www.theguardian.com/gnm-archive"
            />
          </div>
        </>
      </BoxContainer>
      <UnfinishedBusinessThrasher />
      <BoxContainer theme="light" background={guardianFoundationBkg}>
        <>
          <InnerText title="The Guardian Foundation" theme="light">
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

export default OurHistory;
