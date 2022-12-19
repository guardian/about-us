/** @jsxRuntime classic /
/** @jsx jsx */
import { css, jsx, ThemeProvider } from "@emotion/react";
import { buttonReaderRevenue, LinkButton } from "@guardian/src-button";
import { neutral, space } from "@guardian/src-foundations";
import { from } from "@guardian/src-foundations/mq";
import { body, headline } from "@guardian/src-foundations/typography";
import { SvgArrowRightStraight } from "@guardian/src-icons";
import { useEffect, useState } from "react";
import { getCountryGroup } from "../../helpers/countryGroup";

const aCss = css`
  text-decoration: none;
`;

const h3Css = css`
  color: ${neutral[100]};
  ${body.medium({ fontWeight: "bold" })};
  font-size: 24px;
  margin: 0;

  ${from.tablet} {
    font-size: 24px;
  }
`;

const pCss = css`
  color: ${neutral[100]};
  ${headline.xxxsmall({ fontWeight: "regular" })};
  margin: ${space[1]}px 0 ${space[6]}px;

  ${from.tablet} {
    ${headline.xxsmall({ fontWeight: "regular" })};
  }
`;

const cardImageDesktopCss = css`
  display: none;
  ${from.tablet} {
    display: block;
    height: 100%;
    width: 60%;
    margin: -20px 0 -80px;
    padding-top: 35%;
    background-size: contain;
    background-position: center center;
    background-image: url("/about/images/support-the-guardian-desktop.png");
    background-repeat: no-repeat;
  }
  ${from.desktop} {
    margin: -50px 0 -50px;
    width: 50%;
    /* margin: -20px 0 -80px; */
    padding-top: 30%;
  }
`;

const cardImageMobileCss = css`
  width: 100%;
  padding-top: 50%;
  background-image: url("/about/images/support-the-guardian-desktop.png");
  height: 100%;
  margin: 11px -${space[3]}px auto auto;
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;

  ${from.tablet} {
    display: none;
  }
`;

const desktopContainerCss = css`
  display: flex;
  flex-direction: column;
  padding-right: ${space[3]}px;
  ${from.tablet} {
    padding-right: 0;
    flex-direction: row;
    width: 100%;
  }
`;

const mobileContainerCss = css`
  display: flex;
  border-top: 1px solid #90abc4;
  ${from.tablet} {
    display: block;
    border-top: none;
  }
`;

const ReaderFundedContributeCard = () => {
  const [currencyGlyph, setCurrencyGlyph] = useState("£");

  useEffect(() => {
    const currencyGlyph = getCountryGroup()?.currencyGlyph;

    currencyGlyph && setCurrencyGlyph(currencyGlyph);
  }, []);

  return (
    <div css={mobileContainerCss}>
      <div css={desktopContainerCss}>
        <div
          css={css`
            max-width: 510px;
          `}
        >
          <a css={aCss} href="https://support.theguardian.com/contribute">
            <h3 css={h3Css}>Show your support as often as you like</h3>
          </a>
          <p css={pCss}>
            Choose to give once from just {currencyGlyph}1, or set up a
            recurring amount to power our reporting every month or year.
          </p>
          <ThemeProvider theme={buttonReaderRevenue}>
            <LinkButton
              size="small"
              icon={<SvgArrowRightStraight />}
              iconSide="right"
              nudgeIcon={true}
              href="https://support.theguardian.com/contribute"
            >
              Support us
            </LinkButton>
          </ThemeProvider>
        </div>
        <div css={cardImageDesktopCss} />
      </div>
      <div css={cardImageMobileCss} />
    </div>
  );
};

export default ReaderFundedContributeCard;
