/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React from "react";
import { background } from "@guardian/src-foundations/palette";
import { GLogo } from "../components/gLogo";
import HeaderQuote from "../components/headerQuote";
import { PageStyles } from "../components/pageStyles";

const HomePage = () => {
  const headerCss = css`
    background-color: ${background.ctaPrimary};
  `;

  return (
    <>
      <PageStyles />
      <header css={headerCss}>
        <GLogo width={295} />
      </header>
      <HeaderQuote
        quote="Since 1821 the mission of The Guardian has been to use clarity and imagination to build hope."
        author="Katharine Viner, editor-in-chief"
      />
    </>
  );
};

export default HomePage;
