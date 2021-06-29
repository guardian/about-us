/** @jsxRuntime classic /
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { brand, neutral, space } from "@guardian/src-foundations";
import { body, headline } from "@guardian/src-foundations/typography";
import { minWidth } from "../styles/breakpoints";

interface LeadershipProfileProps {
  title: {
    name: string;
    job: String;
    organisation: string;
  };
  imageUrl: string;
  bodyCopy: string;
}

export const leadershipProfilesHolder = css`
  display: flex;
  flex-direction: column;
  & figure + figure {
    margin-top: ${space[6]}px;
  }
  ${minWidth.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: ${space[6]}px;
    & figure {
      width: 50%;
      width: calc(50% - 10px);
    }
    & figure + figure {
      margin-top: 0;
    }
  }
  ${minWidth.wide} {
    & figure {
      width: calc(50% - 29px);
    }
  }
`;

export const LeadershipProfile = (props: LeadershipProfileProps) => {
  const containerCss = css`
    margin: 0;
  `;
  const profileImgCss = css`
    display: inline-block;
    vertical-align: top;
    width: 94px;
    height: 94px;
    ${minWidth.wide} {
      width: 135px;
      height: 135px;
    }
    border-radius: 50%;
    margin-right: ${space[5]}px;
  `;
  const titleCss = css`
    ${headline.xxxsmall()};
    font-size: 16px;
    ${minWidth.tablet} {
      font-size: 18px;
    }
    ${minWidth.wide} {
      font-size: 24px;
    }
    color: ${brand[400]};
    border-top: 1px solid ${neutral[86]};
    display: inline-block;
    vertical-align: top;
    width: calc(100% - 114px);
    ${minWidth.wide} {
      width: calc(100% - 165px);
    }
    padding-top: ${space[1]}px;
    margin: ${space[5]}px 0 0 auto;
  `;
  const bodyCopyCss = css`
    width: 100%;
    border-top: 1px solid ${neutral[86]};
    padding-top: ${space[1]}px;
    margin: ${space[3]}px 0 0;
    ${body.medium({ lineHeight: "loose", fontWeight: "regular" })}
    ${minWidth.tablet} {
      font-size: 17px;
    }
  `;
  return (
    <figure css={containerCss}>
      <img src={props.imageUrl} css={profileImgCss} />
      <figcaption css={titleCss}>
        <strong>{props.title.name},</strong><br />
        {props.title.job},<br />
        {props.title.organisation}
      </figcaption>
      <p css={bodyCopyCss}>{props.bodyCopy}</p>
    </figure>
  );
};
