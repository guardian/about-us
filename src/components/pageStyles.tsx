import React from "react";
import { css, Global } from "@emotion/react";
import { fonts } from "../styles/fonts";

export const PageStyles = () => (
  <Global
    styles={css`
      ${fonts};
      body {
        margin: 0;
        padding: 0;
      }
    `}
  />
);
