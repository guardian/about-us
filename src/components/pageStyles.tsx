import React from "react";
import { css, Global } from "@emotion/react";
import { fonts } from "../styles/fonts";
import { resets } from "@guardian/src-foundations/utils";

export const PageStyles = () => (
  <Global
    styles={css`
      ${fonts};
      ${resets.defaults};
      body {
        margin: 0;
        padding: 0;
      }
    `}
  />
);
