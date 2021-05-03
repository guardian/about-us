/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import {
  background,
  brandAlt,
  neutral,
  space,
} from "@guardian/src-foundations";
import { headline, titlepiece } from "@guardian/src-foundations/typography";
import { minWidth, namedBreakpoints } from "../styles/breakpoints";
import { containerCss } from "../styles/sharedStyles";

interface HeaderQuoteProps {
  quote: string;
  author: string;
}

const headerQuoteCss = css`
  color: ${neutral[100]};
  max-width: 1300px;
  margin: 0 auto;
`;

const triangleCss = css`
  position: absolute;
  top: 100%;
  left: ${space[6]}px;
  border-style: solid;
  border-color: transparent ${background.ctaPrimary} transparent transparent;
  border-width: 0 42.3px 37.14px 0;
  ${minWidth.tablet} {
    border-width: 0 64px 56.14px 0;
    left: ${space[5]}px;
  }
  ${minWidth.desktop} {
    border-width: 0 80px 75.14px 0;
    left: 80px;
  }
  ${minWidth.wide} {
    left: 239px;
  }
`;

const blockquoteCss = css`
  display: inline;
  margin: 0;
  ${titlepiece.small()};
  font-size: 36px;
  line-height: 1.15;
  ${minWidth.tablet} {
    font-size: 55px;
  }
  ${minWidth.desktop} {
    font-size: 72px;
  }
  ${minWidth.wide} {
    font-size: 73px;
  }
`;

const quotationMarkCss = css`
  height: 26px;
  width: 39px;
  margin-right: 6px;
  ${minWidth.tablet} {
    height: 40px;
    width: 60px;
    margin-right: ${space[2]}px;
  }
  ${minWidth.desktop} {
    height: 52px;
    width: 78px;
    margin-right: 10px;
  }
  ${minWidth.wide} {
    height: 55px;
    width: 83px;
    position: absolute;
    left: 140px;
    top: 110px;
  }
`;

const quoteDivCss = css`
  padding: 27px ${space[6]}px;
  position: relative;
  ${minWidth.tablet} {
    padding: 45px ${space[5]}px;
    margin: 0 auto;
    width: ${namedBreakpoints.tablet}px;
  }
  ${minWidth.desktop} {
    padding: 95px 80px;
    width: ${namedBreakpoints.desktop}px;
  }
  ${minWidth.wide} {
    padding: 95px 72px 95px 239px;
    width: ${namedBreakpoints.wide}px;
  }
`;

const citeCss = css`
  display: block;
  margin-top: ${space[2]}px;
  ${headline.xxsmall({
    lineHeight: "tight",
    fontWeight: "regular",
  })}
  ${minWidth.tablet} {
    font-size: 30px;
    margin-top: ${space[3]}px;
  }
  ${minWidth.desktop} {
    font-size: 35px;
    margin-top: ${space[5]}px;
  }
`;

const HeaderQuote = (props: HeaderQuoteProps) => (
  <div css={containerCss(background.ctaPrimary)}>
    <div css={headerQuoteCss}>
      <div css={quoteDivCss}>
        <svg
          css={quotationMarkCss}
          width="81"
          height="54"
          viewBox="0 0 81 54"
          fill="none"
        >
          <path
            d="M80.6 0.205997C79.6013 8.766 78.6027 17.3973 77.604 26.1C76.748 34.66 76.106 43.648 75.678 53.064H42.722C44.862 43.9333 47.858 35.0167 51.71 26.314C55.7047 17.4687 61.126 8.766 67.974 0.205997H80.6ZM38.87 0.205997C37.8713 8.766 36.8727 17.3973 35.874 26.1C35.018 34.66 34.376 43.648 33.948 53.064H0.992C2.84667 43.9333 5.77133 35.0167 9.766 26.314C13.9033 17.4687 19.396 8.766 26.244 0.205997H38.87Z"
            fill={brandAlt[400]}
          />
        </svg>
        <blockquote css={blockquoteCss}>{props.quote}</blockquote>
        <cite css={citeCss}>{props.author}</cite>
        <div css={triangleCss} />
      </div>
    </div>
  </div>
);

export default HeaderQuote;
