/** @jsxRuntime classic /
/** @jsx jsx */
import { css, jsx, SerializedStyles } from "@emotion/react";
import { LinkButton } from "@guardian/src-button";
import { brand, neutral, space } from "@guardian/src-foundations";
import { from } from "@guardian/src-foundations/mq";
import { body, headline } from "@guardian/src-foundations/typography";
import { SvgArrowRightStraight } from "@guardian/src-icons";

interface DetailsAndImageProps {
  title: string;
  bodyCopy: string;
  readMoreUrl: string;
  imageUrl: string;
  readMoreBtnCopy?: string;
}

const containerCss = css`
  margin: 40px 0 0;
  padding-top: ${space[3]}px;
  border-top: 1px solid ${neutral[86]};
  ${from.tablet} {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
  }
`;

const profileImgCss = (sectionTitle: string) => css`
  display: block;
  width: 100%;
  height: auto;
  ${from.tablet} {
    width: 50%;
    width: calc(50% - 10px);
  }
  ${from.wide} {
    width: calc(50% - 29px);
  }

  ${sectionTitle === "Reader funding" &&
  `
    width: 70%;
    margin: auto;

    ${from.tablet} {
      margin-bottom: -43px;
    }

    ${from.wide} {
      width: calc(50% - 29px);
    }    
  `}
`;

const figcationCss = css`
  display: block;
  width: 100%;
  margin: ${space[2]}px 0 0;
  ${from.tablet} {
    width: 50%;
    width: calc(50% - 10px);
    margin: 0;
  }
  ${from.wide} {
    width: calc(50% - 29px);
  }
`;

const titleCss = css`
  ${headline.xxxsmall({ fontWeight: "bold" })};
  color: ${brand[400]};
  margin: 0 0 ${space[3]}px;
  font-size: 16px;
  ${from.tablet} {
    font-size: 18px;
  }
  ${from.desktop} {
    font-size: 24px;
  }
`;

const bodyCopyCss = css`
  ${body.medium({ lineHeight: "loose", fontWeight: "regular" })}
  margin: ${space[3]}px 0 ${space[5]}px;
  ${from.tablet} {
    font-size: 17px;
  }
`;

export const DetailsAndImage = (props: DetailsAndImageProps) => {
  return (
    <figure css={containerCss}>
      <img
        src={props.imageUrl}
        css={profileImgCss(props.title)}
        loading="lazy"
      />
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
