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
  color: ${neutral[100]};
  ${body.medium({ fontWeight: "bold" })};
  font-size: 24px;
  margin: 0;

  ${minWidth.tablet} {
    font-size: 24px;
  }
`;

const pCss = css`
  color: ${neutral[100]};
  ${body.small({ lineHeight: "loose" })}
`;

const cardImageDesktopCss = css`
  display: none;
  ${minWidth.tablet} {
    display: block;
    height: 80%;
    width: 50%;
    margin: auto -12px auto auto;
    padding-top: 20%;
    background-size: contain;
    background-position: right center;
    background-image: url("/about/images/front-page-10-desktop.png");
    background-repeat: no-repeat;
  }
  ${minWidth.desktop} {
    transform: translateY(-44px);
  }
`;

const cardImageMobileCss = css`
  width: 100%;
  padding-top: 50%;
  background-image: url("/about/images/front-page-10-mobile.png");
  height: 100%;
  margin: 11px -${space[3]}px auto auto;
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;

  ${minWidth.tablet} {
    display: none;
  }
`;

const innerContainerCss = css`
  display: flex;
  flex-direction: column;
  padding-right: ${space[3]}px;
  ${minWidth.tablet} {
    padding-right: 0;
    flex-direction: row;
    width: 100%;
  }
`;

const linkbuttonDesktop = css`
  display: none;

  ${minWidth.tablet} {
    display: inline-flex;
    width: max-content;
  }
`;

const linkbuttonMobile = css`
  display: inline-flex;
  ${minWidth.tablet} {
    display: none;
  }
`;

const outerContainerCss = css`
  display: flex;
  border-top: 1px solid #90abc4;
  ${minWidth.tablet} {
    display: block;
    border-top: none;
  }
`;

const ReaderFundedContributeCard = () => {
  return (
    <div css={outerContainerCss}>
      <div css={innerContainerCss}>
        <div>
          <a css={aCss} href="https://support.theguardian.com/contribute">
            <h3 css={h3Css}>Show your support as often as you like</h3>
          </a>
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
              css={linkbuttonDesktop}
            >
              Contribute
            </LinkButton>
          </ThemeProvider>
        </div>
        <ThemeProvider theme={buttonReaderRevenue}>
          <LinkButton
            size="small"
            icon={<SvgArrowRightStraight />}
            iconSide="right"
            nudgeIcon={true}
            href="https://support.theguardian.com/contribute"
            css={linkbuttonMobile}
          >
            Support us
          </LinkButton>
        </ThemeProvider>
        <div css={cardImageDesktopCss} />
      </div>
      <div css={cardImageMobileCss} />
    </div>
  );
};

export default ReaderFundedContributeCard;
