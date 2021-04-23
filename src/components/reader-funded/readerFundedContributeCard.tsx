/** @jsxRuntime classic /
/** @jsx jsx */
import { css, jsx, ThemeProvider } from "@emotion/react";
import { buttonReaderRevenue, LinkButton } from "@guardian/src-button";
import { brandAlt, neutral, space } from "@guardian/src-foundations";
import { body, headline } from "@guardian/src-foundations/typography";
import { SvgArrowRightStraight } from "@guardian/src-icons";
import { minWidth } from "../../styles/breakpoints";

const aCss = css`
  text-decoration: none;
`;

const h3Css = css`
  color: ${brandAlt[400]};
  ${headline.xxsmall()}
  margin: 0;
  ${minWidth.tablet} {
    ${headline.xsmall()}
  }
  ${minWidth.wide} {
    padding-right: ${space[9]}px;
  }
`;

const pCss = css`
  color: ${neutral[100]};
  text-decoration: none;
  ${body.small({ lineHeight: "loose" })}
`;

const cardImageCss = css`
  width: 100%;
  padding-top: 47.25%;
  background-image: url("/images/front-page-10-mobile.png");
  background-size: cover;
  flex: 0 0 40%;
  height: 100%;
  margin: auto;
  background-size: contain;
  background-position: right center;
  background-repeat: no-repeat;
  ${minWidth.tablet} {
    height: 80%;
    background-image: url("/images/front-page-10-desktop.png");
    background-size: contain;
    background-repeat: no-repeat;
  }
  ${minWidth.desktop} {
    background-size: cover;
    background-image: url("/images/front-page-10-desktop.png");
    padding-top: 56.25%;
  }
`;

const containerCss = css`
  display: grid;
  grid-template-columns: 1.8fr 1fr;
  grid-template-rows: 1fr;
  gap: 0 12px;
  & .item1 {
    grid-area: 1 / 1 / span 1 / span 1;
  }
  & .item2 {
    grid-area: 2 / 1 / span 1 / span 1;
  }
  & .item3 {
    display: none;
  }
  & .item4 {
    grid-area: 1 / 2 / span 3 / span 1;
  }
  & .item6 {
    display: inline-flex;
    width: max-content;
  }
  ${minWidth.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 0 20px;
    & .item2 {
      grid-area: 1 / 2 / span 2 / span 1;
    }
    & .item4 {
      grid-area: 1 / 3 / span 1 / span 1;
      height: 100%;
    }
    & .item5 {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      grid-area: 1 / 1 / span 2 / span 1;
    }
    & .item6 {
      display: none;
    }
    & .item3 {
      display: inline-flex;
      width: max-content;
    }
  }
`;

const ReaderFundedContributeCard = () => {
  return (
    <div css={containerCss}>
      <div className="item5">
        <a
          className="item1"
          css={aCss}
          href="https://support.theguardian.com/uk/contribute"
        >
          <h3 css={h3Css}>Show your support as often as you like</h3>
        </a>
        <ThemeProvider theme={buttonReaderRevenue}>
          <LinkButton
            size="small"
            icon={<SvgArrowRightStraight />}
            iconSide="right"
            nudgeIcon={true}
            href="https://support.theguardian.com/uk/contribute"
            className="item3"
          >
            Contribute
          </LinkButton>
        </ThemeProvider>
      </div>
      <p className="item2" css={pCss}>
        Choose to give once from as little as $1, or set up a recurring
        contribution to support us each month or year.
      </p>
      <ThemeProvider theme={buttonReaderRevenue}>
        <LinkButton
          size="small"
          icon={<SvgArrowRightStraight />}
          iconSide="right"
          nudgeIcon={true}
          href="https://support.theguardian.com/uk/contribute"
          className="item6"
        >
          Contribute
        </LinkButton>
      </ThemeProvider>
      <div css={cardImageCss} className="item4" />
    </div>
  );
};

export default ReaderFundedContributeCard;
