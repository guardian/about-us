import { css } from "@emotion/react";
import { minWidth } from "../styles/breakpoints";
import { ReactElement } from "react";
import { article17, palette, titlepiece42 } from "@guardian/source/foundations";
import { serif } from "../styles/fonts";

type Theme = "light" | "dark";

interface InnerTextProps {
  title: string;
  children: ReactElement;
  theme: Theme;
}

const InnerText = (props: InnerTextProps) => {
  const innerTextCss = css`
    color: ${props.theme === "light" ? palette.neutral[7] : palette.neutral[100]};
    p,
    li {
      margin: 0;
      font-family: ${serif};
      ${article17}
      ${minWidth.tablet} {
        font-size: 20px;
      }
      ${minWidth.desktop} {
        font-size: 24px;
      }
    }
    p + p {
      margin-top: 0.75em;
    }
  `;

  const h2Css = css`
    ${titlepiece42}
    max-width: 608px;
    font-size: 32px;
    line-height: 1.15;
    margin: 10px 0 18px 0;
    color: ${props.theme == "dark" ? palette.neutral[100] : "inherit"};
    ${minWidth.tablet} {
      font-size: 42px;
    }
    ${minWidth.desktop} {
      font-size: 50px;
      margin: 20px 0 27px 0;
    }
  `;

  return (
    <div css={innerTextCss}>
      <h2 css={h2Css}>{props.title}</h2>
      {props.children}
    </div>
  );
};

export default InnerText;
