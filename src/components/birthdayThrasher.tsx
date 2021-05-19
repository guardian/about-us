/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { space } from "@guardian/src-foundations";
import { body } from "@guardian/src-foundations/typography";
import { brandAlt, news } from "@guardian/src-foundations/palette";
import { minWidth, namedBreakpoints } from "../styles/breakpoints";
import { LinkButton } from "@guardian/src-button";
import { SvgArrowRightStraight } from "@guardian/src-icons";

const containerCss = css`
  background-color: ${brandAlt[400]};

  ${minWidth.tablet} {
    position: relative;
    &:before {
      content: "";
      position: absolute;
      top: 36px;
      left: 0;
      width: 100%;
      border-top: 1px solid black;
    }
    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 0;
      padding-top: 32.14%;
      background-image: linear-gradient(
          to bottom,
          ${brandAlt[400]},
          ${brandAlt[400]} 10%,
          ${brandAlt[400]} 12.44%,
          black calc(12.44% + 1px),
          ${brandAlt[400]} calc(12.44% + 2px),
          transparent 50%
        ),
        url("/about/images/thrasher-paper-bg-tablet.jpg");
      background-size: 100% 100%;
      margin-top: -4%;
    }
  }
  ${minWidth.desktop} {
    padding-bottom: 36px;
    background-image: linear-gradient(
        to right,
        ${brandAlt[400]},
        ${brandAlt[400]} calc(50% - 375px),
        transparent calc(50% - 100px),
        transparent
      ),
      url("/about/images/thrasher-paper-bg-desktop.jpg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left calc(50% + 520px) top;
    &:before {
      top: 0;
      height: 100%;
      border-top: none;
      background-image: linear-gradient(
        to bottom,
        transparent,
        transparent 35px,
        black 36px,
        transparent 37px,
        transparent 395px,
        black 396px,
        transparent 397px
      );
    }
    &:after {
      display: none;
    }
  }
  ${minWidth.wide} {
    background-position: left calc(50% + 450px) top;
  }
`;

const innerContainerCss = css`
  padding: ${space[6]}px 0 0;
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 0;
    padding-top: 96%;
    background-image: linear-gradient(
        to bottom,
        ${brandAlt[400]},
        ${brandAlt[400]} 10%,
        transparent 50%
      ),
      url("/about/images/thrasher-paper-bg-mobile.jpg");
    background-size: 100% 100%;
  }
  ${minWidth.tablet} {
    display: flex;
    margin: 0 auto;
    padding: 36px 0 0;
    width: ${namedBreakpoints.tablet}px;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      top: 36px;
      left: 0;
      height: calc(100% - 36px);
      border-left: 1px solid black;
    }
    &:after {
      display: none;
    }
  }
  ${minWidth.desktop} {
    width: ${namedBreakpoints.desktop}px;
  }
  ${minWidth.wide} {
    width: ${namedBreakpoints.wide}px;
  }
`;

const birthdayCopyHolderCss = css`
  background: linear-gradient(
    to bottom,
    transparent,
    transparent 47px,
    black 48px,
    transparent 49px,
    transparent 104px,
    black 105px,
    transparent 106px,
    transparent 161px,
    black 162px,
    transparent 163px,
    transparent 218px,
    black 219px,
    transparent 220px
  );
  padding: 0 ${space[3]}px;
  height: max-content;
  ${minWidth.tablet} {
    margin-top: ${space[3]}px;
    padding: 0 ${space[3]}px;
    &:after {
      content: "";
      position: absolute;
      bottom: ${space[2]}px;
      left: ${space[3]}px;
      width: 146px;
      height: 50px;
      background: url("/about/images/thrasher-logo.svg");
      background-size: 100% 100%;
    }
  }
`;

const pAndLinkButtonHolderCss = css`
  margin: 16px ${space[3]}px 0;
  &:after {
    content: "";
    display: block;
    width: 146px;
    height: 50px;
    background: url("/about/images/thrasher-logo.svg");
    background-size: 100% 100%;
  }
  ${minWidth.tablet} {
    padding: ${space[3]}px ${space[5]}px ${space[5]}px;
    margin: 0;
    border-left: 1px solid black;
    border-right: 1px solid black;
    &:after {
      display: none;
    }
  }
  ${minWidth.desktop} {
    max-width: 342px;
    border-right: none;
  }
`;

const pCss = css`
  ${body.medium()};
  margin: 0 0 32px;
`;

const linkButtonCssOverides = css`
  background-color: ${news[400]};
  margin-bottom: 32px;
  &:hover {
    background-color: #be4043;
  }
`;

const BirthdayThrasher = () => (
  <div css={containerCss}>
    <div css={innerContainerCss}>
      <div css={birthdayCopyHolderCss}>
        <img src="/about/images/thrasher-birthday-copy.svg" />
      </div>
      <div css={pAndLinkButtonHolderCss}>
        <p css={pCss}>
          <strong>200 years young!</strong> The Guardian marks its bicentenary
          in May 2021 with live events, birthday messages from well-wishers, new
          strands of journalism, and a ‘Big 200’ list of its most powerful
          journalism of all time. Readers can send in their messages and get a
          pleasant surprise from us in return. Join the celebration:{" "}
        </p>
        <LinkButton
          priority="primary"
          size="small"
          icon={<SvgArrowRightStraight />}
          iconSide="right"
          nudgeIcon={true}
          cssOverrides={linkButtonCssOverides}
          href="https://www.theguardian.com/p/h883d"
        >
          Read more
        </LinkButton>
      </div>
    </div>
  </div>
);

export default BirthdayThrasher;
