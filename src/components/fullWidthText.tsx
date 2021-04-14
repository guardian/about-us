/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { brandAlt, neutral, space } from "@guardian/src-foundations";
import { headline } from "@guardian/src-foundations/typography";
import { ReactNode } from "react";

interface FullWidthTextProps {
  theme: string;
  children: ReactNode;
}

export const highlightedCss = css`
  background-color: ${brandAlt[400]};
`;

const FullWidthText = (props: FullWidthTextProps) => {
  const fullWidthTextCss = css`
    background-color: ${props.theme === "light" ? neutral[100] : brandAlt[400]};
    color: ${props.theme === "light" ? neutral[7] : neutral[100]};
    display: block;
    overflow: hidden;
    p {
      margin: 42px ${space[6]}px;
      ${headline.xxsmall({
        fontWeight: "regular",
        lineHeight: "loose",
      })};
    }
    // update breakpoints
    @media only screen and (min-width: 740px) {
      p {
        margin: 70px 140px;
        ${headline.small({
          fontWeight: "regular",
          lineHeight: "loose",
        })};
      }
    }
    @media only screen and (min-width: 980px) {
      p {
        margin: 95px 100px;
        ${headline.medium({
          fontWeight: "regular",
          lineHeight: "loose",
        })};
      }
    }
    @media only screen and (min-width: 1300px) {
      p {
        margin: 85px 170px 85px 330px;
      }
    }
  `;

  return <div css={fullWidthTextCss}>{props.children}</div>;
};

export default FullWidthText;
