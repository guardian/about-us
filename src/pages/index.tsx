/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React from "react";
import { background } from "@guardian/src-foundations/palette";
import { GLogo } from "../components/gLogo";
import { PageStyles } from "../components/pageStyles";
import Header from "../components/header";

const HomePage = () => {
  const headerCss = css`
    background-color: ${background.ctaPrimary};
  `;
  return (
    <>
      <PageStyles />
      <Header
        navSections={[
          {
            title: "About us",
            isSelected: true,
            link: "https://theguardian.com",
          },
          {
            title: "Our organisation",
            isSelected: false,
            link: "https://theguardian.com",
          },
          {
            title: "Our history",
            isSelected: false,
            link: "https://theguardian.com",
          },
          {
            title: "Our history",
            isSelected: false,
            link: "https://theguardian.com",
          },
        ]}
      />
    </>
  );
};

export default HomePage;
