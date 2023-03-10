/** @jsxRuntime classic /
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { brand, neutral } from "@guardian/src-foundations/palette";
import { headline } from "@guardian/src-foundations/typography";
import { space } from "@guardian/src-foundations";
import { minWidth } from "../styles/breakpoints";
import { LinkButton } from "@guardian/src-button";
import { SvgArrowRightStraight } from "@guardian/src-icons";

interface ResponsiveCardVariant1Props {
  title: string;
  imagePath: string;
  linkUrl: string;
  linkText?: string;
  alwaysImgOnLeft?: boolean;
}

const ResponsiveCardVariant1 = (props: ResponsiveCardVariant1Props) => {
  const articleCss = css`
    border: 1px solid ${neutral[86]};
    display: flex;
    background-color: ${neutral[100]};
    ${minWidth.tablet} {
      flex-direction: ${props.alwaysImgOnLeft ? "row" : "column"};
    }
  `;

  const imageHolderCss = css`
    width: 40%;
    ${minWidth.tablet} {
      width: ${props.alwaysImgOnLeft ? "66%" : "100%"};
    }
  `;

  const imageCss = css`
    width: 100%;
    height: auto;
    display: block;
  `;

  const titleAndLinkCss = css`
    width: 60%;
    padding: ${space[1]}px 7px;
    & a:last-of-type {
      display: none;
    }
    ${minWidth.tablet} {
      ${props.alwaysImgOnLeft
        ? `
        width: 33%;
        `
        : `
          width: 100%;

          `}
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      padding: ${space[3]}px;
      & a:last-of-type {
        display: inline-flex;
        width: max-content;
        margin-top: ${space[6]}px;
      }
    }
    ${minWidth.desktop} {
      padding: ${space[3]}px ${space[3]}px ${space[4]}px;
    }
  `;

  const titleLinkCss = css`
    text-decoration: none;
  `;

  const titleCss = css`
    ${headline.xxxsmall({ fontWeight: "bold" })};
    font-size: 16px;
    color: ${brand[400]};
    margin: 0;
    min-height: 3em;
    ${minWidth.tablet} {
      font-size: 18px;
    }
    ${minWidth.desktop} {
      font-size: 24px;
    }
  `;

  return (
    <article css={articleCss}>
      <div css={imageHolderCss}>
        <img src={props.imagePath} css={imageCss} loading="lazy" />
      </div>
      <div css={titleAndLinkCss}>
        <a href={props.linkUrl} css={titleLinkCss}>
          <h2 css={titleCss}>{props.title}</h2>
        </a>
        <LinkButton
          priority="tertiary"
          size="default"
          icon={<SvgArrowRightStraight />}
          iconSide="right"
          nudgeIcon={true}
          href={props.linkUrl}
        >
          {props.linkText || "Read more"}
        </LinkButton>
      </div>
    </article>
  );
};

export default ResponsiveCardVariant1;
