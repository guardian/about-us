/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React from "react";
import FullWidthText, { highlightedCss } from "../components/fullWidthText";
import HeaderQuote from "../components/headerQuote";
import { PageStyles } from "../components/pageStyles";
import Header from "../components/header";
import Overlap from "../components/overlap";

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
    <Overlap overlapContentTop={true}>
      <>
        <h2>test content</h2>
        <p>
          Guardian Media Group (GMG) owns Guardian News & Media (GNM) - the
          publisher of the Guardian and Observer newspapers in the UK,
          theguardian.com and Guardian US and Australia.
        </p>
        <p>
          The Scott Trust, named after our longest serving editor, CP Scott,
          exists to secure the financial and editorial independence of the
          Guardian in perpetuity.
        </p>
      </>
    </Overlap>
    <Overlap
      overlapBackgroundTop={true}
      overlapBackgroundBottom={true}
      backgroundColour="blue"
    >
      <>
        <h2>test content</h2>
        <p>
          Guardian Media Group (GMG) owns Guardian News & Media (GNM) - the
          publisher of the Guardian and Observer newspapers in the UK,
          theguardian.com and Guardian US and Australia.
        </p>
        <p>
          The Scott Trust, named after our longest serving editor, CP Scott,
          exists to secure the financial and editorial independence of the
          Guardian in perpetuity.
        </p>
      </>
    </Overlap>
    <Overlap>
      <>
        <h2>test content</h2>
        <p>
          Guardian Media Group (GMG) owns Guardian News & Media (GNM) - the
          publisher of the Guardian and Observer newspapers in the UK,
          theguardian.com and Guardian US and Australia.
        </p>
        <p>
          The Scott Trust, named after our longest serving editor, CP Scott,
          exists to secure the financial and editorial independence of the
          Guardian in perpetuity.
        </p>
      </>
    </Overlap>
    <Overlap>
      <>
        <h2>test content</h2>
        <p>
          Guardian Media Group (GMG) owns Guardian News & Media (GNM) - the
          publisher of the Guardian and Observer newspapers in the UK,
          theguardian.com and Guardian US and Australia.
        </p>
        <p>
          The Scott Trust, named after our longest serving editor, CP Scott,
          exists to secure the financial and editorial independence of the
          Guardian in perpetuity.
        </p>
      </>
    </Overlap>
    <Overlap>
      <>
        <h2>test content</h2>
        <p>
          Guardian Media Group (GMG) owns Guardian News & Media (GNM) - the
          publisher of the Guardian and Observer newspapers in the UK,
          theguardian.com and Guardian US and Australia.
        </p>
        <p>
          The Scott Trust, named after our longest serving editor, CP Scott,
          exists to secure the financial and editorial independence of the
          Guardian in perpetuity.
        </p>
      </>
    </Overlap>
    <Overlap overlapContentBottom={true}>
      <>
        <h2>test content</h2>
        <p>
          Guardian Media Group (GMG) owns Guardian News & Media (GNM) - the
          publisher of the Guardian and Observer newspapers in the UK,
          theguardian.com and Guardian US and Australia.
        </p>
        <p>
          The Scott Trust, named after our longest serving editor, CP Scott,
          exists to secure the financial and editorial independence of the
          Guardian in perpetuity.
        </p>
      </>
    </Overlap>
    <p
      css={css`
        min-height: 500px;
        padding-top: 60px;
        margin : 0 auto;
        max-width: 800px;
      `}
    >
      This is some content that sits at the bottom of the page to demonstrate the bottom content overflow of the previous component.
    </p>
  </>
);

export default HomePage;
