/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { minWidth } from "../styles/breakpoints";
import { ReactElement } from "react";
import { neutral, space, sport } from "@guardian/src-foundations";

type Theme = "light" | "dark";

interface BoxContainerProps {
  overlap?: boolean;
  children: ReactElement;
  background: string;
  theme: Theme;
}

const BoxContainer = (props: BoxContainerProps) => {
  const containerCss = css`
    background-color: ${props.background};
    padding-top: 20px;
    ${minWidth.tablet} {
      padding-top: 36px;
    }
    ${minWidth.wide} {
      padding-top: 48px;
    }
  `;

  const boxContainerCss = css`
    max-width: 1300px;
    margin: ${props.overlap ? "-40px" : 0} auto 0 auto;
    padding: 0px ${space[3]}px;
    ${minWidth.tablet} {
      margin: ${props.overlap ? "-62px" : 0} auto 0 auto;
      padding: 0px 120px;
    }
    ${minWidth.desktop} {
      padding: 0px 20px;
    }
    ${minWidth.wide} {
      margin: ${props.overlap ? "-96px" : 0} auto 0 auto;
    }
  `;

  const boxContentsCss = css`
    padding: 0px ${space[3]}px;
    background: ${props.theme == "light" ? neutral[100] : sport[300]};
    border: 1px solid ${props.theme == "light" ? neutral[86] : sport[300]};
    color: ${props.theme == "light" ? neutral[7] : neutral[100]};
    ${minWidth.tablet} {
      padding: 0px ${space[5]}px;
    }
    ${minWidth.desktop} {
      padding: 0px 80px;
    }
    ${minWidth.wide} {
      padding: 0px 95px 0px 259px;
    }
  `;

  return (
    <div css={containerCss}>
      <div css={boxContainerCss}>
        <div css={boxContentsCss}>{props.children}</div>
      </div>
    </div>
  );
};

export default BoxContainer;
