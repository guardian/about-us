/** @jsxRuntime classic /
/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import { brand, neutral } from "@guardian/src-foundations/palette";
import { headline } from "@guardian/src-foundations/typography";
import { space } from "@guardian/src-foundations";
import { minWidth } from "../styles/breakpoints";
import { LinkButton } from "@guardian/src-button";
import { SvgArrowRightStraight } from "@guardian/src-icons";

interface ResponsiveCardVariant1Props {
  title: string;
  linkUrl?: string;
  linkText?: string;
}

const ResponsiveCardVariant1 = (props: ResponsiveCardVariant1Props) => {
  const articleCss = css`
    border: 1px solid ${neutral[86]};
    display: flex;
    background-color: ${neutral[100]};
    ${minWidth.tablet} {
      flex-direction: column;
    }
  `;

  const imageHolderCss = css`
    width: 40%;
    ${minWidth.tablet} {
      width: 100%;
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
      width: 100%;
      height: 100%;
      padding: ${space[3]}px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      & a:last-of-type {
        display: inline-flex;
        width: max-content;
        margin-top: ${space[6]}px;
      }
    }
  `;

  const titleLinkCss = css`
    text-decoration: none;
  `;

  const titleCss = css`
    ${headline.xxxsmall({ fontWeight: "bold" })};
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
        <img src="/images/responsive-card-bg.png" css={imageCss} />
      </div>
      <div css={titleAndLinkCss}>
        {props.linkUrl ? (
          <a href={props.linkUrl} css={titleLinkCss}>
            <h2 css={titleCss}>{props.title}</h2>
          </a>
        ) : (
          <h2 css={titleCss}>{props.title}</h2>
        )}
        {props.linkUrl && (
          <LinkButton
            priority="tertiary"
            size="default"
            icon={<SvgArrowRightStraight />}
            iconSide="right"
            href={props.linkUrl}
          >
            {props.linkText || "Read more"}
          </LinkButton>
        )}
      </div>
    </article>
  );
};

export default ResponsiveCardVariant1;
