/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
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
  </>
);

export default HomePage;
