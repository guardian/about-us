/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import { PageStyles } from "../../components/pageStyles";
import Header from "../../components/header";
import FullWidthText from "../../components/fullWidthText";
import BoxContainer from "../../components/boxContainer";
import { neutral } from "@guardian/src-foundations/palette";
import { headingCss } from "../../styles/sharedStyles";

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
    <BoxContainer theme="light" background={{ color: `${neutral[97]}` }}>
      <h2 css={headingCss}>Read more</h2>
    </BoxContainer>
    <BoxContainer theme="light" background={{ color: `${neutral[97]}` }}>
      <h2 css={headingCss}>The Scott Trust</h2>
    </BoxContainer>
  </>
);

export default OurHistory;
