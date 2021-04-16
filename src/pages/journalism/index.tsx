/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
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
  </>
);

export default JournalismPage;
