/** @jsxRuntime classic /
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { LinkButton } from "@guardian/src-button";
import { brand, neutral, space } from "@guardian/src-foundations";
import { body, headline } from "@guardian/src-foundations/typography";
import { SvgArrowRightStraight } from "@guardian/src-icons";
import { minWidth } from "../styles/breakpoints";

interface DetailsAndImageProps {
  title: string;
  bodyCopy: string;
  readMoreUrl: string;
  imageUrl: string;
  readMoreBtnCopy?: string;
}

export const DetailsAndImage = (props: DetailsAndImageProps) => {
  const containerCss = css`
    margin: 40px 0 0;
    padding-top: ${space[3]}px;
    border-top: 1px solid ${neutral[86]};
    ${minWidth.tablet} {
      display: flex;
      justify-content: space-between;
      flex-direction: row-reverse;
    }
  `;
  const profileImgCss = css`
    display: block;
    width: 100%;
    height: auto;
    ${minWidth.tablet} {
      width: 50%;
      width: calc(50% - 10px);
    }
    ${minWidth.wide} {
      width: calc(50% - 29px);
    }
  `;
  const figcationCss = css`
    display: block;
    width: 100%;
    margin: ${space[2]}px 0 0;
    ${minWidth.tablet} {
      width: 50%;
      width: calc(50% - 10px);
      margin: 0;
    }
    ${minWidth.wide} {
      width: calc(50% - 29px);
    }
  `;
  const titleCss = css`
    ${headline.xxxsmall({ fontWeight: "bold" })};
    color: ${brand[400]};
    margin: 0 0 ${space[3]}px;
    font-size: 16px;
    ${minWidth.tablet} {
      font-size: 18px;
    }
    ${minWidth.desktop} {
      font-size: 24px;
    }
  `;
  const bodyCopyCss = css`
    ${body.medium({ lineHeight: "loose", fontWeight: "regular" })}
    margin: ${space[3]}px 0 ${space[5]}px;
    ${minWidth.tablet} {
      font-size: 17px;
    }
  `;

  return (
    <figure css={containerCss}>
      <img src={props.imageUrl} css={profileImgCss} loading="lazy" />
      <figcaption css={figcationCss}>
        <h2 css={titleCss}>{props.title}</h2>
        <p css={bodyCopyCss}>{props.bodyCopy}</p>
        <LinkButton
          priority="tertiary"
          size="default"
          icon={<SvgArrowRightStraight />}
          iconSide="right"
          nudgeIcon={true}
          href={props.readMoreUrl}
        >
          {props.readMoreBtnCopy || "Read more"}
        </LinkButton>
      </figcaption>
    </figure>
  );
};
