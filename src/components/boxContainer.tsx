/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { minWidth } from "../styles/breakpoints";
import { ReactElement } from "react";
import { neutral, space, sport } from "@guardian/src-foundations";

type Theme = "light" | "dark";

interface BoxContainerProps {
  overlapTop?: boolean;
  children: ReactElement;
  background: string;
  theme: Theme;
}

const BoxContainer = (props: BoxContainerProps) => {
  const containerCss = css`
    background: ${props.background};
    padding-top: ${space[5]}px;
    ${minWidth.tablet} {
      padding-top: ${space[9]}px;
    }
    ${minWidth.wide} {
      padding-top: ${space[12]}px;
    }
  `;

  const boxContainerCss = css`
    max-width: 1300px;
    margin: ${props.overlapTop ? "-40px" : 0} auto 0;
    padding: 0px ${space[3]}px;
    ${minWidth.tablet} {
      margin: ${props.overlapTop ? "-62px" : 0} auto 0;
      padding: 0px 120px;
    }
    ${minWidth.desktop} {
      padding: 0px ${space[5]}px;
    }
    ${minWidth.wide} {
      margin: ${props.overlapTop ? -space[5] : 0}px auto 0;
    }
  `;

  const boxContentsCss = css`
    padding: ${space[1]}px ${space[3]}px 41px ${space[3]}px;
    background: ${props.theme === "light" ? neutral[100] : sport[300]};
    border: 1px solid ${props.theme === "light" ? neutral[86] : sport[300]};
    ${minWidth.tablet} {
      padding: ${space[1]}px ${space[5]}px ${space[12]}px ${space[5]}px;
    }
    ${minWidth.desktop} {
      padding: ${space[2]}px 80px 57px 80px;
    }
    ${minWidth.wide} {
      padding: ${space[2]}px 95px 57px 259px;
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
