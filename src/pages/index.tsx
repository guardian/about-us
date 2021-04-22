/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import BoxContainer from "../components/boxContainer";
import ContactAndWorkForUs from "../components/contactAndWorkForUs";
import { Footer } from "../components/footer/footer";
import FullWidthText, { highlightedCss } from "../components/fullWidthText";
import Header from "../components/header";
import HeaderQuote from "../components/headerQuote";
import InnerText from "../components/innerText";
import { neutral } from "@guardian/src-foundations";
import { PageStyles } from "../components/pageStyles";

const HomePage = () => (
  <>
    <PageStyles />
    <Header
      navSections={[
        {
          title: "About us",
          isSelected: true,
          link: "/",
        },
        {
          title: "Our organisation",
          isSelected: false,
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
    <HeaderQuote
      quote="Since 1821 the mission of The Guardian has been to use clarity and imagination to build hope."
      author="Katharine Viner, editor-in-chief"
    />
    <FullWidthText theme="light">
      <p>
        Guardian Media Group is a global news organisation that delivers{" "}
        <span css={highlightedCss}>fearless, investigative journalism</span> -
        giving a voice to the powerless and holding power to account.
        <br />
        Our independent ownership structure means we are entirely free from
        political and commercial influence.{" "}
        <span css={highlightedCss}>
          Only our values determine the stories we choose to cover
        </span>{" "}
        – relentlessly and courageously.
      </p>
    </FullWidthText>
    <BoxContainer
      theme="light"
      background={{ backgroundColor: `${neutral[97]}` }}
      overlapTop={true}
    >
      <InnerText title="Our Organisation" theme="light">
        <>
          <p>
            The Guardian is owned by Guardian Media Group, which has only one
            shareholder - the Scott Trust.
          </p>
          <p>
            The Scott Trust, named after our longest serving editor, CP Scott,
            exists to secure the financial and editorial independence of the
            Guardian in perpetuity.
          </p>
          <p>
            Today more than half of our revenue comes directly from our readers,
            helping to support Guardian journalism and keep it open for
            everyone.
          </p>
        </>
      </InnerText>
    </BoxContainer>
    <BoxContainer
      theme="dark"
      background={{ backgroundColor: `${neutral[97]}` }}
    >
      <InnerText title="We're reader funded" theme="dark">
        <>
          <p>
            The Guardian’s independent, high-impact journalism is powered by its
            global readership. In 2020 alone, more than 1.5 million readers
            supported us financially. It’s thanks to this generosity that we can
            provide quality, trustworthy reporting that’s open for everyone to
            read. With no shareholders or billionaire owner, we can investigate
            and challenge without fear or favour, and amplify stories that need
            to be told. You can show your support for our work today, in
            whichever way suits you best.
          </p>
        </>
      </InnerText>
    </BoxContainer>
    <BoxContainer
      theme="light"
      background={{ backgroundColor: `${neutral[97]}` }}
    >
      <InnerText title="Journalism" theme="light">
        <>
          <p>
            The Guardian is globally renowned for its coverage of politics, the
            environment, science, social justice, sport and culture. Our
            journalists deliver agenda-setting investigations, breaking live
            news, compelling opinion writing and the liveliest features, as well
            as award-winning podcasts, video documentaries and infographics and
            visuals.
          </p>
          <p>
            Our Covid-19 investigations exposed governmental and social
            failings, as did the Snowden Files, Panama Papers, Cambridge
            Analytica Files and the Windrush revelations in the UK.
          </p>
          <p>
            Our teams in the UK, US and Australia produce theguardian.com,
            Guardian Australia, Guardian US, Guardian Weekly, and The Guardian
            and Observer newspapers in the UK.
          </p>
        </>
      </InnerText>
    </BoxContainer>
    <ContactAndWorkForUs />
    <Footer />
  </>
);

export default HomePage;
