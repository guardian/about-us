/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import {
  background,
  brandAlt,
  neutral,
  space,
} from "@guardian/src-foundations";
import { headline, titlepiece } from "@guardian/src-foundations/typography";
import { ReactElement } from "react";
import { minWidth, namedBreakpoints } from "../styles/breakpoints";

type Theme = "light" | "dark";

interface FullWidthTextProps {
  theme: Theme;
  children: ReactElement;
  title?: string;
}

export const highlightedCss = css`
  background-color: ${brandAlt[400]};
`;

const FullWidthText = (props: FullWidthTextProps) => {
  const containerCss = css`
    background-color: ${props.theme === "light"
      ? background.primary
      : background.ctaPrimary};
  `;

  const fullWidthTextCss = css`
    background-color: ${props.theme === "light"
      ? background.primary
      : background.ctaPrimary};
    color: ${props.theme === "light" ? neutral[7] : neutral[100]};
    display: block;
    max-width: 1300px;
    margin: 0 auto;
    padding-top: ${props.title ? space[5] : "39"}px;
    padding-bottom: ${props.title ? "53" : "39"}px;
    padding-left: ${space[6]}px;
    padding-right: ${space[6]}px;
    p {
      ${headline.xxsmall({
        fontWeight: "regular",
        lineHeight: "loose",
      })};
      margin: 0;
    }
    p + p {
      margin-top: 0.75em;
    }
    h2 {
      ${titlepiece.small({ fontWeight: "regular" })};
      margin: 0 0 0.5em;
      line-height: 1;
    }
    ${minWidth.tablet} {
      padding-top: ${props.title ? space[5] : "70"}px;
      padding-bottom: ${props.title ? "65" : "70"}px;
      padding-left: ${space[5]}px;
      padding-right: ${space[5]}px;
      width: ${namedBreakpoints.tablet}px;
      p {
        ${headline.small({
          fontWeight: "regular",
          lineHeight: "loose",
        })};
      }
      h2 {
        ${titlepiece.medium({ fontWeight: "regular" })};
        line-height: 1;
      }
    }
    ${minWidth.desktop} {
      padding-top: ${props.title ? "45" : "95"}px;
      padding-bottom: ${props.title ? "112" : "95"}px;
      padding-left: 80px;
      padding-right: 80px;
      width: ${namedBreakpoints.desktop}px;
      p {
        font-size: 35px;
      }
      h2 {
        ${titlepiece.large({ fontWeight: "regular" })};
        line-height: 1;
      }
    }
    ${minWidth.wide} {
      padding-top: ${props.title ? "45" : "85"}px;
      padding-bottom: ${props.title ? "93" : "85"}px;
      padding-left: 239px;
      padding-right: 72px;
      width: ${namedBreakpoints.wide}px;
    }
  `;

  return (
    <div css={containerCss}>
      <div css={fullWidthTextCss}>
        {props.title && <h2>{props.title}</h2>}
        {props.children}
      </div>
    </div>
  );
};

export default FullWidthText;
