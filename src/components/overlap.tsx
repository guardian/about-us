/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { space } from "@guardian/src-foundations";
import { ReactElement } from "react";
import { minWidth } from "../styles/breakpoints";

interface OverlapProps {
  backgroundColour?: string;
  overlapBackgroundTop?: boolean;
  overlapBackgroundBottom?: boolean;
  overlapContentTop?: boolean;
  overlapContentBottom?: boolean;
  children: ReactElement;
}

const Overlap = (props: OverlapProps) => {
  const containerCss = css`
    background-color: ${props.backgroundColour || "#CDCDCD"};
    position: relative;
    padding-left: ${space[3]}px;
    padding-right: ${space[3]}px;
    padding-bottom: ${props.overlapContentTop ? 0 : `${space[3]}px`};

    ${props.overlapContentBottom
      ? `
      padding-bottom: 0;
      transform: translateY(-${space[3]}px);
      `
      : ``}

    ${props.overlapBackgroundTop
      ? `
      &:before {
        content: '';
        position: absolute;
        top: -${space[3] * 2}px;
        left: 0;
        width: 100%;
        height: ${space[3] * 2}px;
        background-color: ${props.backgroundColour};
        z-index: 2;
        ${minWidth.tablet} {
          top: -70px;
          height: 70px;

        }
        ${minWidth.desktop} {
          top: -76px;
          height: 76px;

        }
        ${minWidth.wide} {
          top: -96px;
          height: 96px;

        }
      }
      `
      : ``};
    ${props.overlapBackgroundBottom
      ? `
      &:after {
        content: '';
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: ${space[3] * 2}px;
        background-color: ${props.backgroundColour};
        z-index: 2;
        ${minWidth.tablet} {
          height: 35px;
        }
        ${minWidth.desktop} {
          height: 38px;
        }
        ${minWidth.wide} {
          height: 48px;
        }
      }
      `
      : ``};
    ${minWidth.tablet} {
      padding-left: 120px;
      padding-right: 120px;
      padding-bottom: 35px;
      padding-bottom: ${props.overlapContentTop ? 0 : "35px"};
      ${props.overlapContentBottom
        ? `
                transform: translateY(-35px);
                padding-bottom: 0;
                `
        : ``}
    }

    ${minWidth.desktop} {
      padding-left: ${space[5]}px;
      padding-right: ${space[5]}px;
      padding-bottom: ${props.overlapContentTop ? 0 : "38px"};
      ${props.overlapContentBottom
        ? `
                transform: translateY(-38px);
                padding-bottom: 0;
                `
        : ``}
    }

    ${minWidth.wide} {
      padding-bottom: ${props.overlapContentTop ? 0 : "48px"};
      ${props.overlapContentBottom
        ? `
                transform: translateY(-48px);
                padding-bottom: 0;
                `
        : ``}
    }
  `;

  const overlapInnercontainerCss = css`
    background-color: white;
    border: 1px solid black;
    margin-left: auto;
    margin-right: auto;
    max-width: 1300px;
    position: relative;
    z-index: 3;
    transform: translateY(
      ${props.overlapContentTop
        ? `-${space[3]}px`
        : props.overlapContentBottom
        ? `${space[3]}px`
        : "0"}
    );

    ${minWidth.tablet} {
      transform: translateY(
        ${props.overlapContentTop
          ? "-35px"
          : props.overlapContentBottom
          ? "35px"
          : "0"}
      );
    }
    ${minWidth.desktop} {
      transform: translateY(
        ${props.overlapContentTop
          ? "-38px"
          : props.overlapContentBottom
          ? "38px"
          : "0"}
      );
    }
    ${minWidth.wide} {
      transform: translateY(
        ${props.overlapContentTop
          ? "-48px"
          : props.overlapContentBottom
          ? "48px"
          : "0"}
      );
    }
  `;

  return (
    <div css={containerCss}>
      <div css={overlapInnercontainerCss}>{props.children}</div>
    </div>
  );
};

export default Overlap;
