
import { css } from "@emotion/react";
import {
  LinkButton,
  SvgArrowRightStraight,
} from "@guardian/source/react-components";
import {
  space,
  from,
  article17,
  headlineBold17,
  palette,
} from "@guardian/source/foundations";

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
  border-top: 1px solid ${palette.neutral[86]};
  ${from.tablet} {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
  }
`;

const readerFundingContainerCss = css`
  border-top: none;

  ${from.tablet} {
    border-top: 1px solid ${palette.neutral[86]};
  }
`;

const profileImgCss = css`
  display: block;
  width: 100%;
  height: auto;
  ${from.tablet} {
    width: calc(50% - 10px);
  }
  ${from.wide} {
    width: calc(50% - 29px);
  }
`;

const readerFundingProfileImgCss = css`
  width: 70%;
  margin: auto;

  ${from.tablet} {
    margin-bottom: -38px;
  }

  ${from.desktop} {
    margin-bottom: -44px;
  }

  ${from.wide} {
    width: calc(50% - 29px);
    margin-bottom: -51px;
  }
`;

const figcaptionCss = css`
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
  ${headlineBold17}
  color: ${palette.brand[400]};
  margin: 0 0 ${space[3]}px;
  font-size: 16px;
  ${from.tablet} {
    font-size: 18px;
  }
  ${from.desktop} {
    font-size: 24px;
  }
`;

const readerFundingTitleCss = css`
  font-size: 24px;

  ${from.tablet} {
    font-size: 24px;
  }

  ${from.wide} {
    font-size: 24px;
  }
`;

const bodyCopyCss = css`
  ${article17}
  margin: ${space[3]}px 0 ${space[5]}px;
  ${from.tablet} {
    font-size: 17px;
  }
`;

export const DetailsAndImage = (props: DetailsAndImageProps) => {
  const isReaderFunding = props.title === "Reader funding";

  return (
    <figure css={[containerCss, isReaderFunding && readerFundingContainerCss]}>
      <img
        src={props.imageUrl}
        css={[profileImgCss, isReaderFunding && readerFundingProfileImgCss]}
        loading="lazy"
      />
      <figcaption css={figcaptionCss}>
        <h2 css={[titleCss, isReaderFunding && readerFundingTitleCss]}>
          {props.title}
        </h2>
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
