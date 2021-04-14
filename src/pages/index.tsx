/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React from "react";
import FullWidthText, { highlightedCss } from "../components/fullWidthText";
import HeaderQuote from "../components/headerQuote";
import { PageStyles } from "../components/pageStyles";
import Header from "../components/header";

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
        giving a voice to the powerless and holding power to account. Our
        independent ownership structure means we are entirely free from
        political and commercial influence.{" "}
        <span css={highlightedCss}>
          Only our values determine the stories we choose to cover
        </span>{" "}
        – relentlessly and courageously.
      </p>
    </FullWidthText>
  </>
);

export default HomePage;
