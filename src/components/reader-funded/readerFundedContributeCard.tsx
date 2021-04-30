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
  ${headline.xxsmall({ fontWeight: "bold" })}
  font-size: 22px;
  margin: 0;
  ${minWidth.tablet} {
    margin-bottom: 22px;
    font-size: 20px;
  }
  ${minWidth.wide} {
    font-size: 24px;
    margin-bottom: ${space[9]}px;
    margin-right: ${space[5]}px;
  }
`;

const pCss = css`
  color: ${neutral[100]};
  ${body.small({ lineHeight: "loose" })}
  ${minWidth.tablet} {
    margin: 0;
  }
`;

const cardImageCss = css`
  width: 100%;
  padding-top: 140.54%;
  background-image: url("./images/front-page-10-mobile.png");
  flex: 0 0 40%;
  height: 100%;
  margin: 10.5px -${space[3]}px auto auto;
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
  ${minWidth.tablet} {
    height: 80%;
    margin: auto -12px auto auto;
    padding-top: 47.25%;
    background-position: right center;
    background-image: url("./images/front-page-10-desktop.png");
    background-repeat: no-repeat;
  }
  ${minWidth.desktop} {
    background-size: cover;
    padding-top: 57.68%;
  }
`;

const containerCss = css`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
  gap: 0 12px;
  border-top: 1px solid #90abc4;
  & .gridItem1 {
    grid-area: 1 / 1 / span 1 / span 1;
  }
  & .gridItem2 {
    grid-area: 2 / 1 / span 1 / span 1;
  }
  & .gridItem3 {
    display: none;
  }
  & .gridItem4 {
    grid-area: 1 / 2 / span 4 / span 1;
  }
  & .gridItem6 {
    display: inline-flex;
    width: max-content;
  }
  ${minWidth.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 0 20px;
    border-top: none;
    & .gridItem2 {
      grid-area: 1 / 2 / span 2 / span 1;
    }
    & .gridItem4 {
      grid-area: 1 / 3 / span 1 / span 1;
      height: 100%;
      ${minWidth.desktop} {
        transform: translateY(-44px);
      }
    }
    & .gridItem5 {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      grid-area: 1 / 1 / span 2 / span 1;
      ${minWidth.tablet} {
        justify-content: normal;
      }
    }
    & .gridItem6 {
      display: none;
    }
    & .gridItem3 {
      display: inline-flex;
      width: max-content;
    }
  }
`;

const ReaderFundedContributeCard = () => {
  return (
    <div css={containerCss}>
      <div className="gridItem5">
        <a
          className="gridItem1"
          css={aCss}
          href="https://support.theguardian.com/contribute"
        >
          <h3 css={h3Css}>Show your support as often as you like</h3>
        </a>
        <ThemeProvider theme={buttonReaderRevenue}>
          <LinkButton
            size="small"
            icon={<SvgArrowRightStraight />}
            iconSide="right"
            nudgeIcon={true}
            href="https://support.theguardian.com/contribute"
            className="gridItem3"
          >
            Contribute
          </LinkButton>
        </ThemeProvider>
      </div>
      <p className="gridItem2" css={pCss}>
        Choose to give once from $1, £1 or €1, or set up a recurring
        contribution to support us each month or year.
      </p>
      <ThemeProvider theme={buttonReaderRevenue}>
        <LinkButton
          size="small"
          icon={<SvgArrowRightStraight />}
          iconSide="right"
          nudgeIcon={true}
          href="https://support.theguardian.com/contribute"
          className="gridItem6"
        >
          Contribute
        </LinkButton>
      </ThemeProvider>
      <div css={cardImageCss} className="gridItem4" />
    </div>
  );
};

export default ReaderFundedContributeCard;
