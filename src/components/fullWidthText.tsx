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
import { minWidth } from "../styles/breakpoints";

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
    padding: 42px ${space[6]}px;
    p {
      ${headline.xxsmall({
        fontWeight: "regular",
        lineHeight: "loose",
      })};
      margin: 0;
    }
    h2 {
      ${titlepiece.small({ fontWeight: "regular", lineHeight: "loose" })};
      margin: 0;
    }
    ${minWidth.tablet} {
      padding: 70px 140px;
      p {
        ${headline.small({
          fontWeight: "regular",
          lineHeight: "loose",
        })};
      }
      h2 {
        ${titlepiece.medium({ fontWeight: "regular", lineHeight: "loose" })};
      }
    }
    ${minWidth.desktop} {
      padding: 95px 100px;
      p {
        ${headline.medium({
          fontWeight: "regular",
          lineHeight: "loose",
        })};
        font-size: 35px;
      }
      h2 {
        ${titlepiece.large({ fontWeight: "regular", lineHeight: "loose" })};
      }
    }
    ${minWidth.wide} {
      padding: 85px 91px 85px 259px;
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
