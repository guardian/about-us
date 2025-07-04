import { css } from "@emotion/react";
import {
  headlineMedium20,
  headlineMedium28,
  palette,
  space,
  titlepiece42,
  titlepiece50,
  titlepiece70,
} from "@guardian/source/foundations";
import { ReactElement } from "react";
import { minWidth, namedBreakpoints } from "../styles/breakpoints";

type Theme = "light" | "dark";

interface FullWidthTextProps {
  theme: Theme;
  children: ReactElement;
  title?: string;
}

export const highlightedCss = css`
  background-color: ${palette.brandAlt[400]};
  padding-bottom: 2px;
`;

const FullWidthText = (props: FullWidthTextProps) => {
  const containerCss = css`
    background-color: ${props.theme === "light"
      ? palette.neutral[100]
      : palette.brand[400]};
  `;

  const fullWidthTextCss = css`
    background-color: ${props.theme === "light"
      ? palette.neutral[100]
      : palette.brand[400]};
    color: ${props.theme === "light" ? palette.neutral[7] : palette.neutral[100]};
    display: block;
    max-width: 1300px;
    margin: 0 auto;
    padding-top: ${props.title ? space[5] : "39"}px;
    padding-bottom: ${props.title ? "53" : "39"}px;
    padding-left: ${space[6]}px;
    padding-right: ${space[6]}px;
    p {
      ${headlineMedium20}
      font-weight: 400;
      line-height: 1.4;
      margin: 0;
    }
    p + p {
      margin-top: 0.75em;
    }
    h1 {
      ${titlepiece42}
      font-weight: 400;
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
        ${headlineMedium28}
        font-weight: 400;
        line-height: 1.4;
      }
      h1 {
        ${titlepiece50}
        font-weight: 400;
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
      h1 {
        ${titlepiece70}
        font-weight: 400;
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
        {props.title && <h1>{props.title}</h1>}
        {props.children}
      </div>
    </div>
  );
};

export default FullWidthText;
