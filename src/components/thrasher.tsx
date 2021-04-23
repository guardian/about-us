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
    border-bottom: 1px solid black;
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
          transparent 50%
        ),
        url("/images/thrasher-paper-bg-tablet.png");
      background-size: 100% 100%;
    }
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
      url("/images/thrasher-paper-bg-mobile.png");
    background-size: 100% 100%;
    ${minWidth.tablet} {
      display: none;
    }
  }
  ${minWidth.tablet} {
    display: flex;
    margin: 0 auto;
    border-left: 1px solid black;
    border-right: 1px solid black;
    width: ${namedBreakpoints.tablet}px;
  }
`;

const birthdayCopyHolderCss = css`
  background: linear-gradient(
    to bottom,
    transparent,
    transparent 20.2%,
    black calc(20.2% + 1px),
    transparent calc(20.2% + 2px),
    transparent 44.6%,
    black calc(44.6% + 1px),
    transparent calc(44.6% + 2px),
    transparent 69%,
    black calc(69% + 1px),
    transparent calc(69% + 2px),
    transparent 93.4%,
    black calc(93.4% + 1px),
    transparent calc(93.4% + 2px)
  );
  padding: 0 ${space[6]}px;
  height: max-content;
`;

const pAndLinkButtonHolderCss = css`
  margin: 16px ${space[6]}px 0;
  &:after {
    content: "";
    display: block;
    width: 146px;
    height: 50px;
    background: url("/images/thrasher-logo.svg");
    background-size: 100% 100%;
    ${minWidth.tablet} {
      display: none;
    }
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

const Thrasher = () => (
  <div css={containerCss}>
    <div css={innerContainerCss}>
      <div css={birthdayCopyHolderCss}>
        <img src="/images/thrasher-birthday-copy.svg" />
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
          href="https://www.theguardian.com/uk"
        >
          More on the Guardian 200
        </LinkButton>
      </div>
    </div>
  </div>
);

export default Thrasher;
