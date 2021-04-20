/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { LinkButton } from "@guardian/src-button";
import { space } from "@guardian/src-foundations";
import { neutral, news } from "@guardian/src-foundations/palette";
import { headline, titlepiece } from "@guardian/src-foundations/typography";
import { SvgArrowRightStraight } from "@guardian/src-icons";
import { minWidth } from "../styles/breakpoints";

const containerCss = css`
  background-color: ${news[400]};
  padding: ${space[5]}px;

  ${minWidth.tablet} {
    padding: 35px 120px;
  }
  ${minWidth.desktop} {
    padding: 38px ${space[5]}px;
  }
  ${minWidth.wide} {
    padding: 48px ${space[5]}px;
  }
`;

const innerContainerCss = css`
  background: ${neutral[100]};
  margin: 0 auto;
  max-width: 1300px;
  padding: ${space[3]}px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & article {
    margin-bottom: ${space[6]}px;
  }

  & article h2 {
    ${titlepiece.small()};
    font-size: 32px;
    margin: 32px 0 0;
  }

  & article p {
    ${headline.xxxsmall({
      fontWeight: "regular",
      lineHeight: "loose",
    })};
    margin: ${space[9]}px 0;
    &:before {
      content: "";
      display: block;
      width: 50%;
      height: 1px;
      background-color: ${neutral[7]};
    }
  }

  ${minWidth.tablet} {
    & article {
      width: 50%;
    }
    & article h2 {
      font-size: 35px;
      margin: 0;
    }
    & article p {
      margin: ${space[6]}px 0 ${space[5]}px;
    }
  }
  ${minWidth.desktop} {
    & article {
      width: calc(50% - 77px);
    }
    & article p {
      margin: ${space[6]}px 0;
    }
    & article h2 {
      font-size: 50px;
    }
  }
  ${minWidth.wide} {
    & article {
      width: calc(50% - 82px);
      padding-right: 185px;
    }
  }
`;

const imageContainerCss = css`
  & img {
    width: 100%;
    height: auto;
  }
  ${minWidth.tablet} {
    width: calc(50% - 50px);
    max-width: 543px;
  }
  ${minWidth.wide} {
    width: calc(50% - 82px);
  }
`;

const LatestNews = () => (
  <div css={containerCss}>
    <div css={innerContainerCss}>
      <div css={imageContainerCss}>
        <img src="/images/front-page-13.png" />
      </div>
      <article>
        <h2>Latest News</h2>
        <p>
          Announcements and updates from the Guardian’s press office, including
          latest press releases and award wins.
        </p>
        <LinkButton
          priority="primary"
          size="default"
          icon={<SvgArrowRightStraight />}
          iconSide="right"
          href="https://www.theguardian.com/gnm-press-office"
        >
          Go to press office
        </LinkButton>
      </article>
    </div>
  </div>
);

export default LatestNews;
