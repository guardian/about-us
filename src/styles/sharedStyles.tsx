import { css } from "@emotion/react";
import { neutral } from "@guardian/src-foundations";
import { titlepiece } from "@guardian/src-foundations/typography";
import { minWidth } from "./breakpoints";

export const containerCss = (backgroundColor: string) => css`
  background-color: ${backgroundColor};
`;

export const headingCss = css`
  ${titlepiece.small()};
  max-width: 608px;
  font-size: 32px;
  line-height: 1.15;
  margin: 3px 0 18px 0;
  color: ${neutral[7]};
  ${minWidth.tablet} {
    font-size: 42px;
  }
  ${minWidth.desktop} {
    font-size: 50px;
    margin: 8px 0 27px 0;
  }
`;
