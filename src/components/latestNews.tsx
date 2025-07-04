import { css } from "@emotion/react";
import {
  LinkButton,
  SvgArrowRightStraight,
} from "@guardian/source/react-components";
import {
  headlineMedium17,
  palette,
  space,
  titlepiece42,
} from "@guardian/source/foundations";
import { minWidth, namedBreakpoints } from "../styles/breakpoints";

const containerCss = css`
  background-color: ${palette.news[400]};
  padding: ${space[5]}px ${space[3]}px;

  ${minWidth.tablet} {
    padding: 35px ${space[3]}px;
  }
  ${minWidth.desktop} {
    padding: 38px ${space[5]}px;
  }
  ${minWidth.wide} {
    padding: 48px ${space[5]}px;
  }
`;

const innerContainerCss = css`
  background: ${palette.neutral[100]};
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
    ${titlepiece42}
    font-size: 32px;
    margin: 32px 0 0;
  }

  & article p {
    ${headlineMedium17}
    font-weight: 400;
    line-height: 1.4;
    margin: ${space[6]}px 0;
    &:before {
      content: "";
      display: block;
      width: 30%;
      height: 1px;
      margin-bottom: ${space[1]}px;
      background-color: ${palette.neutral[7]};
    }
  }

  ${minWidth.tablet} {
    max-width: ${namedBreakpoints.tablet}px;
    & article {
      width: 40%;
      margin-top: 10px;
      margin-bottom: ${space[3]}px;
    }
    & article h2 {
      font-size: 35px;
      margin: 0;
    }
    & article p {
      font-size: 15px;
      margin: ${space[6]}px 0 ${space[5]}px;
    }
  }
  ${minWidth.desktop} {
    max-width: ${namedBreakpoints.desktop}px;
    & article {
      width: calc(50% - 77px);
      padding-right: 75px;
      margin-top: 0;
    }
    & article p {
      margin: ${space[6]}px 0;
      font-size: 17px;
    }
    & article h2 {
      font-size: 50px;
    }
  }
  ${minWidth.wide} {
    max-width: ${namedBreakpoints.wide}px;
    & article {
      width: calc(50% - 82px);
      padding-right: 185px;
      margin-top: ${space[9]}px;
    }
  }
`;

const imageContainerCss = css`
  & img {
    width: 100%;
    height: auto;
  }
  ${minWidth.tablet} {
    width: calc(60% - 40px);
    max-width: 543px;
    & img {
      height: 100%;
    }
  }
  ${minWidth.desktop} {
    width: calc(50% - 40px);
  }
  ${minWidth.wide} {
    width: calc(50% - 82px);
  }
`;

const LatestNews = () => (
  <div css={containerCss}>
    <div css={innerContainerCss}>
      <div css={imageContainerCss}>
        <img src="/about/images/front-page-3.jpg" loading="lazy" />
      </div>
      <article>
        <h2>Latest news</h2>
        <p>
          Announcements and updates from the Guardian’s press office, including
          latest press releases and award wins.
        </p>
        <LinkButton
          priority="primary"
          size="default"
          icon={<SvgArrowRightStraight />}
          iconSide="right"
          nudgeIcon={true}
          href="https://www.theguardian.com/gnm-press-office"
        >
          Go to press office
        </LinkButton>
      </article>
    </div>
  </div>
);

export default LatestNews;
