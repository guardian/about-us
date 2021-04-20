/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { minWidth } from "../styles/breakpoints";
import { ReactElement } from "react";
import { neutral, space, sport } from "@guardian/src-foundations";

type Theme = "light" | "dark";

interface Background {
  color?: string;
  mobile?: string;
  tablet?: string;
  wide?: string;
}
interface BoxContainerProps {
  overlapTop?: boolean;
  children: ReactElement;
  background: Background;
  theme: Theme;
}

export const boxContainerPadding = {
  mobile: `${space[5]}px`,
  tablet: `${space[9]}px`,
  wide: `${space[12]}px`,
};

const BoxContainer = (props: BoxContainerProps) => {
  const containerCss = css`
    background: ${props.background.color
      ? props.background.color
      : props.background.mobile};
    padding-top: ${boxContainerPadding.mobile};
    ${minWidth.tablet} {
      padding-top: ${boxContainerPadding.tablet};
      background: ${props.background.color
        ? props.background.color
        : props.background.tablet};
    }
    ${minWidth.wide} {
      padding-top: ${boxContainerPadding.wide};
      background: ${props.background.color
        ? props.background.color
        : props.background.wide};
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
      margin: ${props.overlapTop ? "-62px" : 0} auto 0;
    }
    ${minWidth.wide} {
      margin: ${props.overlapTop ? -space[5] : 0}px auto 0;
      margin: ${props.overlapTop ? "-84px" : 0} auto 0;
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
