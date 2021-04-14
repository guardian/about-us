/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import FullWidthText from "../../components/fullWidthText";
import { PageStyles } from "../../components/pageStyles";
import Header from "../../components/header";

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
  </>
);

export default JournalismPage;
