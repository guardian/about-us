import { css } from "@emotion/react";
import BoxContainer from "../../components/boxContainer";
import ContactAndWorkForUs from "../../components/contactAndWorkForUs";
import FullWidthText from "../../components/fullWidthText";
import Header from "../../components/header";
import { PageStyles } from "../../components/pageStyles";
import { neutral } from "@guardian/source/foundations";
import {
  singleColumnResponsiveCardHolder,
  twoColumnResponsiveCardHolder,
  skipToContentStyles,
  oneTopTwoBottomCardHolder,
} from "../../styles/sharedStyles";
import ResponsiveCardVariant1 from "../../components/responsiveCardVariant1";
import FullWidthImage from "../../components/fullWidthImage";
import {
  LinkButton,
  SvgArrowRightStraight,
} from "@guardian/source/react-components";
import { minWidth } from "../../styles/breakpoints";
import dynamic from "next/dynamic";
import Head from "next/head";
import UnfinishedBusinessThrasher from "../../components/unfinishedBusinessThrasher";
import InnerText from "../../components/innerText";

const Footer = dynamic(() => import("../../components/footer/footer"), {
  ssr: false,
});

const guardianFoundationBkg = {
  mobile: `linear-gradient(to top, ${neutral[100]} 42px, ${neutral[97]} 42px)`,
  tablet: `linear-gradient(to top, ${neutral[100]} 49px, ${neutral[97]} 49px)`,
  wide: `linear-gradient(to top, ${neutral[100]} 58px, ${neutral[97]} 58px)`,
};

const LinkButtonCss = css`
  margin-top: 41px;
  ${minWidth.tablet} {
    margin-top: 48px;
  }
  ${minWidth.desktop} {
    margin-top: 57px;
  }
`;

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
      <BoxContainer theme="light" background={{ backgroundColor: neutral[97] }} overlapTop={true}>
        <>
          <InnerText theme="light" title="Purpose">
            <>
              <p>
                The core purpose of the Scott Trust is to secure the financial
                and editorial independence of the Guardian in perpetuity. Its
                secondary purpose is to champion and promote the causes of
                freedom of the press and access to liberal journalism in the UK
                and around the world.
              </p>
              <p>
                The Guardian seeks to be self-sustaining financially but the
                security of the Scott Trust allows it to look beyond the here
                and now, towards future-facing investments and initiatives that
                safeguard Guardian journalism for generations to come.
              </p>
              <p>
                The Trust is ultimately accountable for any issues that may
                materially impact the preservation of the financial position and
                independence of the Guardian. This includes the reputation of
                the Guardian and the promotion of liberal and progressive
                journalism.
              </p>
              <p>
                Through the Guardian Foundation, the Trust also supports a
                number of programmes around the world that support the freedom
                of the press and the future of liberal journalism.
              </p>
              <p>
                Read more about Scott Trust initiatives to promote liberal
                journalism and support the next generation of reporters{" "}
                <a href="https://www.theguardian.com/info/2025/apr/15/scott-trust-initiatives">
                  here
                </a>
                .
              </p>
            </>
          </InnerText>
          <div css={twoColumnResponsiveCardHolder}>
            <ResponsiveCardVariant1
              title="Annual reports and letter from the chair"
              imagePath="/about/images/organisation-9.jpg"
              linkUrl="https://www.theguardian.com/the-scott-trust/2015/jul/23/the-scott-trust-financials"
            />
            <ResponsiveCardVariant1
              title="The Scott Trust board"
              imagePath="/about/images/organisation-3.jpg"
              linkUrl="https://www.theguardian.com/the-scott-trust/2015/jul/26/the-scott-trust-board"
            />
          </div>
        </>
      </BoxContainer>
      <BoxContainer
        theme="light"
        background={{ backgroundColor: neutral[97] }}
      >
        <>
          <InnerText theme="light" title="History">
            <>
              <p>
                The Manchester Guardian was founded in 1821 following the
                Peterloo Massacre and gained prominence under long-serving
                editor and owner CP Scott's leadership.
              </p>
              <p>
                After the deaths of CP Scott and his son Ted in 1932, his
                surviving son, John, faced a financial crisis that risked the
                future of the Manchester Guardian as an independent liberal
                newspaper.
              </p>
              <p>
                To preserve it, John transferred ownership worth over £1 million
                to the Scott Trust in 1936, requiring only that the paper
                maintain its founding principles.
              </p>
              <p>
                The Trust Deed of 19 June 1936 echoed the long-standing
                injunction to those who take up responsibility for the paper. It
                stated that the company must be carried on as nearly as may be
                upon the same principles as they have heretofore been
                conducted”. This remains the sole instruction given to any
                incoming Guardian editor by the Trust.
              </p>
              <p>
                The Trust was reconstituted in 1948 and then became The Scott
                Trust Limited in 2008, backed by an endowment fund to ensure the
                Guardian's financial stability and editorial independence.
              </p>
              <p>
                In 2021 the Scott Trust undertook a review of governance
                arrangements, in light of the many changes the media industry
                had experienced during the previous decade. The review clarified
                the roles of the Scott Trust and Guardian Media Group boards,
                ensuring they are better positioned to support the Guardian’s
                purpose and mission, editorially and commercially, as it looks
                to the future. The{" "}
                <a href="https://uploads.guim.co.uk/2021/12/06/Conclusions_of_the_Scott_Trust%E2%80%99s_2021_governance_review.pdf">
                  conclusions can be read here
                </a>
                . A summary of today’s governance structure is available{" "}
                <a href="https://drive.google.com/file/d/1C99fs-HKHyCpENm5ry2Ccc6zxcihj2KP/view?usp=sharing">
                  here
                </a>
                .
              </p>
            </>
          </InnerText>
          <div css={oneTopTwoBottomCardHolder}>
            <ResponsiveCardVariant1
              title="CP Scott’s centenary essay"
              imagePath="https://i.guim.co.uk/img/media/f1e4961ebcf53adaa7f182dd84b01f81a1bef7fa/0_0_5000_3000/master/5000.jpg?width=620&dpr=2&s=none"
              linkUrl="https://www.theguardian.com/sustainability/cp-scott-centenary-essay"
              alwaysImgOnLeft={true}
            />
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
      <BoxContainer
        theme="light"
        background={{ backgroundColor: neutral[97] }}
        paddingBottom={true}
      >
        <>
          <InnerText theme="light" title="Values">
            <>
              <p>
                The Manchester Guardian was founded in the liberal interest to
                support reform in the early 19th century. The ethos of public
                service has been part of the DNA of the Guardian ever since.
              </p>
              <p>
                In his 1921 centenary editorial, editor CP Scott established its
                enduring principles: honesty, integrity, courage, fairness, and
                a sense of duty to readers and community. His famous declaration
                that "Comment is free, but facts are sacred" and emphasis on
                giving voice to both supporters and opponents remain at the
                heart of the present-day news organisation.
              </p>
              <p>
                Change in over a century is inevitable — the Scott Trust
                continues to renew and reinvent based on its responsibilities.
              </p>
              <p>
                These principles are maintained through a voluntary payment
                model, keeping information free from a paywall, and global
                expansion to serve a community not defined by geography, but by
                a shared hope for the future. They also inform a rigorous
                self-regulation through an independent readers' editor who
                addresses public concerns about its journalism.
              </p>
            </>
          </InnerText>
          <LinkButton
            priority="primary"
            size="default"
            icon={<SvgArrowRightStraight />}
            iconSide="right"
            nudgeIcon={true}
            cssOverrides={LinkButtonCss}
            href="https://www.theguardian.com/the-scott-trust/2015/jul/26/the-scott-trust"
          >
            More on our values
          </LinkButton>
        </>
      </BoxContainer>
      <UnfinishedBusinessThrasher />
      <BoxContainer theme="light" background={{ backgroundColor: neutral[97] }}>
        <>
          <InnerText title="The Scott Trust Endowment" theme="light">
            <p>
              The Scott Trust built up a substantial endowment fund through
              prudent sale of assets which have since been invested for
              long-term growth. These funds are managed by the Scott Trust
              Endowment.
            </p>
          </InnerText>
          <div css={twoColumnResponsiveCardHolder}>
            <ResponsiveCardVariant1
              title="Read more about The Scott Trust Endowment"
              imagePath="https://i.guim.co.uk/img/media/6614f6286da1a57ba2e41c953993718cbf09e473/0_0_5000_3000/master/5000.jpg?width=920&dpr=1&s=none"
              linkUrl="https://www.theguardian.com/info/2025/apr/15/the-scott-trust-endowment"
            />
            <ResponsiveCardVariant1
              title="The Scott Trust Endowment board"
              imagePath="/about/images/organisation-3.jpg"
              linkUrl="https://www.theguardian.com/info/2025/apr/15/the-scott-trust-endowment-board"
            />
          </div>
        </>
      </BoxContainer>
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
