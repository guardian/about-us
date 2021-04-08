/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React from "react";
import { background } from "@guardian/src-foundations/palette";
import { GLogo } from "../../components/gLogo";
import { PageStyles } from "../../components/pageStyles";

const OurHistory = () => {
  const headerCss = css`
    background-color: ${background.ctaPrimary};
  `;
  return (
    <>
      <PageStyles />
      <header css={headerCss}>
        <GLogo width={295} />
      </header>
    </>
  );
};

export default OurHistory;
