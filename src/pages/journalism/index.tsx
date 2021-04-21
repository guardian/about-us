/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import FullWidthText from "../../components/fullWidthText";
import { PageStyles } from "../../components/pageStyles";
import Header from "../../components/header";
import BoxContainer from "../../components/boxContainer";
import InnerText from "../../components/innerText";
import { neutral } from "@guardian/src-foundations";
import { headingCss } from "../../styles/sharedStyles";

const JournalismPage = () => (
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
          isSelected: false,
          link: "/our-history",
        },
        {
          title: "Journalism",
          isSelected: true,
          link: "/journalism",
        },
      ]}
    />
    <FullWidthText theme="dark" title="Journalism">
      <p>
        The Guardian has a global reputation of holding power to account and
        championing the voices of those less heard. Our Covid-19 investigations
        exposed governmental and social failings, as did our earlier work on the
        Snowden disclosures, the Windrush scandal, Cambridge Analytica and the
        Panama Papers. We are passionate about the climate emergency, social
        justice, fairness and progress. We remain dedicated to truth and to
        bringing about a more hopeful future.
      </p>
    </FullWidthText>
    <BoxContainer
      theme="light"
      background={{ backgroundColor: `${neutral[97]}` }}
      overlapTop={true}
    >
      <InnerText title="Our values and mission for journalism" theme="light">
        <p>
          The Scott Trust, which owns the Guardian was established in 1936 to
          secure the financial and editorial independence of the Guardian in
          perpetuity and to safeguard the journalistic freedom and liberal
          values of the Guardian free from commercial or political interference.
          To this day our independence and values drive Guardian journalism.
        </p>
      </InnerText>
    </BoxContainer>
    <BoxContainer
      theme="light"
      background={{ backgroundColor: `${neutral[97]}` }}
    >
      <h2 css={headingCss}>Editors</h2>
    </BoxContainer>
    <BoxContainer
      theme="light"
      background={{ backgroundColor: `${neutral[97]}` }}
    >
      <InnerText title="Guardian journalism" theme="light">
        <p>
          The Guardian's purposeful journalism spans several formats to serve
          our global audience, including print and digital products, multimedia
          journalism, email round-ups and a dedicated programme of live
          discussions, debates and interviews.
        </p>
      </InnerText>
    </BoxContainer>
    <BoxContainer
      theme="light"
      background={{ backgroundColor: `${neutral[97]}` }}
    >
      <h2 css={headingCss}>Editorial standards</h2>
    </BoxContainer>
    <BoxContainer
      theme="light"
      background={{ backgroundColor: `${neutral[97]}` }}
    >
      <InnerText title="Got a story?" theme="light">
        <p>
          The Guardian welcomes anonymous and confidential news tips to help
          inform our journalism. Find out how to get in touch with the Guardian
          to share a story or reach our editorial departments.
        </p>
      </InnerText>
    </BoxContainer>
  </>
);

export default JournalismPage;
