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
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 2fr 12px 1fr;
  grid-template-columns: 2fr 12px 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
  & :nth-child(1) {
    -ms-grid-row: 1;
    grid-row: 1;
    -ms-grid-column: 1;
    grid-column: 1;
  }
  & :nth-child(2) {
    -ms-grid-row: 1;
    grid-row: 1;
    -ms-grid-column: 2;
    grid-column: 2;
  }
  & :nth-child(2) {
    -ms-grid-row: 1;
    grid-row: 1;
    -ms-grid-column: 3;
    grid-column: 3;
  }
  border-top: 1px solid #90abc4;
  & .gridItem2 {
    grid-row: 2;
    grid-column: 1;
    -ms-grid-row: 1;
    -ms-grid-row-span: 1;
    -ms-grid-column: 2;
    -ms-grid-column-span: 1;
  }
  & .gridItem3 {
    display: none;
  }
  & .gridItem4 {
    grid-row: 1/4;
    grid-column: 3;
    -ms-grid-row: 1;
    -ms-grid-row-span: 4;
    -ms-grid-column: 3;
    -ms-grid-column-span: 1;
  }
  ${minWidth.tablet} {
    -ms-grid-columns: 1fr 20px 1fr 20px 1fr;
    -ms-grid-rows: 1fr;
    grid-template-columns: 1fr 20px 1fr 20px 1fr;
    grid-template-rows: 1fr;
    border-top: none;

    & .gridItem2 {
      -ms-grid-row: 1;
      grid-row: 1;
      -ms-grid-row-span: 1;
      -ms-grid-column: 3;
      grid-column: 3;
      -ms-grid-column-span: 1;
    }
    & .gridItem4 {
      -ms-grid-row: 1;
      grid-row: 1;
      -ms-grid-row-span: 1;
      -ms-grid-column: 5;
      grid-column: 5;
      -ms-grid-column-span: 1;
      height: 100%;
      ${minWidth.desktop} {
        transform: translateY(-44px);
      }
    }
    & .gridItem5 {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      -ms-grid-row: 1;
      grid-row: 1;
      -ms-grid-row-span: 2;
      -ms-grid-column: 1;
      grid-column: 1;
      -ms-grid-column-span: 1;
      ${minWidth.tablet} {
        justify-content: normal;
      }
    }
    & .gridItem6 {
      display: none;
    }
    & .gridItem3 {
      display: -webkit-inline-box;
      display: -ms-inline-flexbox;
      display: inline-flex;
      width: -webkit-max-content;
      width: -moz-max-content;
      width: max-content;
    }
  }
`;

const ReaderFundedContributeCard = () => {
  return (
    <div css={containerCss}>
      <div className="gridItem5">
        <a css={aCss} href="https://support.theguardian.com/contribute">
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
      <div className="gridItem2">
        <p css={pCss}>
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
      </div>
      <div css={cardImageCss} className="gridItem4" />
    </div>
  );
};

export default ReaderFundedContributeCard;
