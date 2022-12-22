/** @jsxRuntime classic /
/** @jsx jsx */
import { css, jsx, ThemeProvider } from "@emotion/react";
import { buttonReaderRevenue, LinkButton } from "@guardian/src-button";
import { neutral, space } from "@guardian/src-foundations";
import { from, until } from "@guardian/src-foundations/mq";
import { body, headline } from "@guardian/src-foundations/typography";
import { SvgArrowRightStraight } from "@guardian/src-icons";
import { useEffect, useState } from "react";
import { getCountryGroup } from "../../helpers/countryGroup";
import React from "react";

const aCss = css`
  text-decoration: none;
`;

const h3MobileCss = css`
  color: ${neutral[100]};
  ${body.medium({ fontWeight: "bold" })};
  font-size: 24px;
  margin: 0;

  &:before {
    content: "";
    border-top: 1px solid #90abc4;
    display: block;
  }

  ${from.mobileMedium} {
    border-top: 1px solid #90abc4;
    &:before {
      border-top: none;
      display: none;
    }
  }

  ${from.tablet} {
    display: none;
  }
`;

const h3DesktopCss = css`
  ${until.tablet} {
    display: none;
  }

  color: ${neutral[100]};
  ${body.medium({ fontWeight: "bold" })};
  font-size: 24px;
  margin: 0;
`;

const pCss = css`
  color: ${neutral[100]};
  ${headline.xxxsmall({ fontWeight: "regular" })};
  margin: ${space[1]}px 0 ${space[6]}px;
  max-width: 200px;

  ${from.mobileMedium} {
    max-width: 300px;
  }

  ${from.tablet} {
    max-width: initial;
  }

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
    padding-top: 30%;
  }
`;

const cardImageMobileCss = css`
  width: 40%;
  padding-top: 30%;
  align-self: flex-end;
  background-image: url("/about/images/support-the-guardian-mobile.png");
  height: 100%;
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
  margin-bottom: -41.5px;
  margin-top: ${space[3]}px;

  ${from.mobileLandscape} {
    background-image: url("/about/images/support-the-guardian-desktop.png");
  }

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
  ${from.tablet} {
    border-top: 1px solid #90abc4;
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
    <>
      <h3 css={h3MobileCss}>Show your support as often as you like</h3>
      <div css={mobileContainerCss}>
        <div css={desktopContainerCss}>
          <div
            css={css`
              max-width: 510px;
            `}
          >
            <a css={aCss} href="https://support.theguardian.com/contribute">
              <h3 css={h3DesktopCss}>Show your support as often as you like</h3>
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
    </>
  );
};

export default ReaderFundedContributeCard;
