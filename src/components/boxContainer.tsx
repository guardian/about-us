/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React from "react";
import { minWidth, namedBreakpoints } from "../styles/breakpoints";
import { ReactElement } from "react";
import { neutral, space, sport } from "@guardian/src-foundations";

type Theme = "light" | "dark";

interface Background {
  backgroundColor?: string;
  mobile?: string;
  tablet?: string;
  desktop?: string;
  wide?: string;
}
interface BoxContainerProps {
  overlapTop?: boolean;
  children: ReactElement;
  background: Background;
  theme: Theme;
  paddingBottom?: boolean;
}

export const boxContainerPadding = {
  mobile: `${space[5]}px`,
  tablet: `${space[9]}px`,
  wide: `${space[12]}px`,
};

const BoxContainer = (props: BoxContainerProps) => {
  const containerCss = css`
    background: ${props.background.backgroundColor
      ? props.background.backgroundColor
      : props.background.mobile};
    padding-top: ${boxContainerPadding.mobile};
    padding-bottom: ${props.paddingBottom ? boxContainerPadding.mobile : "0"};
    ${minWidth.tablet} {
      padding-top: ${boxContainerPadding.tablet};
      padding-bottom: ${props.paddingBottom ? boxContainerPadding.tablet : "0"};
      background: ${props.background.backgroundColor
        ? props.background.backgroundColor
        : props.background.tablet};
    }
    ${minWidth.desktop} {
      background: ${props.background.backgroundColor
        ? props.background.backgroundColor
        : props.background.desktop};
    }
    ${minWidth.wide} {
      padding-top: ${boxContainerPadding.wide};
      padding-bottom: ${props.paddingBottom ? boxContainerPadding.wide : "0"};
      background: ${props.background.backgroundColor
        ? props.background.backgroundColor
        : props.background.wide};
    }
  `;

  const boxContainerCss = css`
    max-width: 1300px;
    margin: ${props.overlapTop ? "-55px" : 0} auto 0;
    padding: 0 ${space[3]}px;
    ${minWidth.tablet} {
      margin: ${props.overlapTop ? "-81px" : 0} auto 0;
      width: ${namedBreakpoints.tablet}px;
      padding: 0;
    }
    ${minWidth.desktop} {
      padding: 0;
      margin: ${props.overlapTop ? "-92px" : 0} auto 0;
      width: ${namedBreakpoints.desktop}px;
    }
    ${minWidth.wide} {
      margin: ${props.overlapTop ? "-105px" : 0} auto 0;
      width: ${namedBreakpoints.wide}px;
    }
  `;

  const boxContentsCss = css`
    padding: ${space[1]}px ${space[3]}px 41px ${space[3]}px;
    background: ${props.theme === "light" ? neutral[100] : sport[300]};
    border: ${props.theme === "light" ? `1px solid ${neutral[86]}` : "none"};
    ${minWidth.tablet} {
      padding: ${space[1]}px ${space[5]}px ${space[12]}px ${space[5]}px;
    }
    ${minWidth.desktop} {
      padding: ${space[2]}px 80px 57px 80px;
    }
    ${minWidth.wide} {
      padding: ${space[2]}px 72px 57px 239px;
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
