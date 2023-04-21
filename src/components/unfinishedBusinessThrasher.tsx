import { jsx, css, keyframes } from "@emotion/react";
import {
  brand,
  headline,
  lifestyle,
  neutral,
  news,
  opinion,
  space,
  sport,
} from "@guardian/source-foundations";

import { minWidth } from "../styles/breakpoints";
import {
  LinkButton,
  SvgArrowRightStraight,
} from "@guardian/source-react-components";

const UnfinishedBusinessThrasher = () => {
  const containerCss = css`
    background-color: #f2ece3;
    ${minWidth.tablet} {
      padding: 35px 0;
      background: linear-gradient(
          to bottom,
          transparent,
          transparent 35px,
          black 36px,
          transparent 37px
        ),
        linear-gradient(
          to top,
          transparent,
          transparent 35px,
          black 36px,
          transparent 37px
        ),
        #f2ece3;
    }
  `;
  const innerContainerCss = css`
    margin: 0 auto;
    ${minWidth.tablet} {
      display: flex;
      width: calc(100vw - 40px);
      max-width: 740px;
      border-left: 1px solid black;
      border-right: 1px solid black;
    }
    ${minWidth.desktop} {
      max-width: 980px;
    }
    ${minWidth.wide} {
      max-width: 1300px;
    }
  `;
  const copyHolderCss = css`
    padding: ${space[3]}px ${space[3]}px 0;
    background: linear-gradient(
      to bottom,
      transparent,
      transparent 57px,
      ${neutral[7]} 58px,
      transparent 59px,
      transparent 114px,
      ${neutral[7]} 115px,
      transparent 116px,
      transparent 170px,
      ${neutral[7]} 171px,
      transparent 172px
    );
    ${minWidth.tablet} {
      width: 57%;
      padding: ${space[3]}px ${space[3]}px ${space[9]}px;
      border-right: 1px solid black;
      background: linear-gradient(
        to bottom,
        transparent,
        transparent 49px,
        ${neutral[7]} 50px,
        transparent 51px,
        transparent 99px,
        ${neutral[7]} 100px,
        transparent 101px
      );
    }
    ${minWidth.desktop} {
      background: linear-gradient(
        to bottom,
        transparent,
        transparent 60px,
        ${neutral[7]} 61px,
        transparent 62px,
        transparent 120px,
        ${neutral[7]} 121px,
        transparent 122px
      );
    }
    ${minWidth.wide} {
      background: linear-gradient(
        to bottom,
        transparent,
        transparent 78px,
        ${neutral[7]} 79px,
        transparent 80px,
        transparent 159px,
        ${neutral[7]} 160px,
        transparent 161px
      );
    }
  `;
  const pCss = css`
    ${headline.xxxsmall({ fontWeight: "bold" })};
    line-height: 1.4;
    margin: ${space[6]}px 0;
    padding: 0;
    max-width: 492px;
    ${minWidth.wide} {
      font-size: 20px;
      max-width: 545px;
    }
  `;
  const bounce = (targetColor: string) => keyframes`
    0% {
      color: #D7CFC3;
    }

    10% {
      color: ${targetColor};
    }

    40% {
      color: #D7CFC3;
    }
  `;

  const animationCss = css`
    list-style: none;
    padding: ${space[12]}px ${space[3]}px;
    margin: 0;
    ${headline.xsmall({ fontWeight: "bold" })};
    font-size: 26px;
    line-height: 30px;
    position: relative;
    & li:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 1px;
      background-color: ${neutral[7]};
    }
    & li {
      color: #d7cfc3;
      white-space: nowrap;
    }
    & li + li {
      margin-top: ${space[2]}px;
      ${minWidth.desktop} {
        margin-top: ${space[3]}px;
      }
      ${minWidth.wide} {
        margin-top: 20px;
      }
    }
    & li:nth-of-type(1) {
      animation: ${bounce(brand[400])} 9.1s ease infinite;
      animation-delay: 0.1s;
      &:before {
        left: ${space[3] + 4}px;
        height: calc(100% - 68px);
        ${minWidth.tablet} {
          left: ${space[3]}px;
        }
        ${minWidth.desktop} {
          left: 13px;
          height: calc(100% - 65px);
        }
        ${minWidth.wide} {
          height: calc(100% - 84px);
          left: 14px;
        }
      }
    }
    & li:nth-of-type(2) {
      animation: ${bounce(news[400])} 9.1s ease infinite;
      animation-delay: 1.5s;
      margin-left: ${space[3]}px;
      &:before {
        left: ${space[3] * 2 + 4}px;
        height: calc(100% - 106px);
        ${minWidth.tablet} {
          left: ${space[3] * 2}px;
        }
        ${minWidth.desktop} {
          left: 25px;
          height: calc(100% - 107px);
        }
        ${minWidth.wide} {
          left: 26px;
          height: calc(100% - 134px);
        }
      }
    }
    & li:nth-of-type(3) {
      animation: ${bounce(lifestyle[300])} 9.1s ease infinite;
      animation-delay: 3s;
      margin-left: ${space[3] * 2}px;
      &:before {
        left: ${space[3] * 3 + 4}px;
        height: calc(100% - 144px);
        ${minWidth.tablet} {
          left: ${space[3] * 3}px;
        }
        ${minWidth.desktop} {
          left: 37px;
          height: calc(100% - 149px);
        }
        ${minWidth.wide} {
          left: 38px;
          height: calc(100% - 185px);
        }
      }
    }
    & li:nth-of-type(4) {
      animation: ${bounce("#539832")} 9.1s ease infinite;
      animation-delay: 4.5s;
      margin-left: ${space[3] * 3}px;
      &:before {
        left: ${space[3] * 4 + 4}px;
        height: calc(100% - 182px);
        ${minWidth.tablet} {
          left: ${space[3] * 4}px;
        }
        ${minWidth.desktop} {
          left: 49px;
          height: calc(100% - 192px);
        }
        ${minWidth.wide} {
          left: 50px;
          height: calc(100% - 235px);
        }
      }
    }
    & li:nth-of-type(5) {
      animation: ${bounce(sport[500])} 9.1s ease infinite;
      animation-delay: 6s;
      margin-left: ${space[3] * 4}px;
      &:before {
        left: ${space[3] * 5 + 4}px;
        height: calc(100% - 220px);
        ${minWidth.tablet} {
          left: ${space[3] * 5}px;
        }
        ${minWidth.desktop} {
          left: 61px;
          height: calc(100% - 233px);
        }
        ${minWidth.wide} {
          left: 62px;
          height: calc(100% - 285px);
        }
      }
    }
    & li:nth-of-type(6) {
      animation: ${bounce(opinion[400])} 9.1s ease infinite;
      animation-delay: 7.5s;
      margin-left: ${space[3] * 5}px;
      &:before {
        left: ${space[3] * 6 + 4}px;
        height: calc(100% - 258px);
        ${minWidth.tablet} {
          left: ${space[3] * 6}px;
        }
        ${minWidth.desktop} {
          left: 73px;
          height: calc(100% - 275px);
        }
        ${minWidth.wide} {
          left: 74px;
          height: calc(100% - 335px);
        }
      }
    }
    ${minWidth.tablet} {
      width: 43%;
      padding: ${space[12]}px ${space[3]}px ${space[12]}px 8px;
    }
    ${minWidth.desktop} {
      font-size: 31px;
      padding: 44px ${space[3]}px ${space[5]}px 8px;
    }
    ${minWidth.wide} {
      font-size: 37px;
      padding: 62px ${space[3]}px ${space[5]}px 8px;
    }
  `;

  const titlePart1Css = css`
    display: block;
    width: 252px;
    height: 63px;
    ${minWidth.tablet} {
      width: 210px;
      height: 53px;
      display: inline-block;
      vertical-align: top;
      margin-right: 11px;
    }
    ${minWidth.desktop} {
      width: 274px;
      height: 69px;
      margin-right: 14px;
    }
    ${minWidth.wide} {
      width: 374px;
      height: 93px;
      margin-right: 19px;
    }
  `;
  const titlePart2Css = css`
    display: block;
    width: 181px;
    height: 45px;
    margin-top: -5px;
    ${minWidth.tablet} {
      width: 150px;
      height: 38px;
      display: inline-block;
      margin-top: 0;
      vertical-align: top;
    }
    ${minWidth.desktop} {
      width: 197px;
      height: 49px;
    }
    ${minWidth.wide} {
      width: 267px;
      height: 67px;
    }
  `;
  const titlePart3Css = css`
    display: block;
    width: 217px;
    height: 37px;
    margin-top: 20px;
    ${minWidth.tablet} {
      width: 190px;
      height: 33px;
      margin-top: 2px;
    }
    ${minWidth.desktop} {
      width: 243px;
      height: 41px;
      margin-top: 0;
    }
    ${minWidth.wide} {
      width: 343px;
      height: 60px;
      margin-top: -3px;
    }
  `;

  return (
    <div css={containerCss}>
      <div css={innerContainerCss}>
        <div css={copyHolderCss}>
          <img
            src="/about/images/unfinished-business-part1.svg"
            css={titlePart1Css}
            loading="lazy"
          />
          <img
            src="/about/images/unfinished-business-part2.svg"
            css={titlePart2Css}
            loading="lazy"
          />
          <img
            src="/about/images/unfinished-business-part3.svg"
            css={titlePart3Css}
            loading="lazy"
          />
          <p css={pCss}>
            From a regional weekly that sold 1,000 copies to a global media
            organisation that pulls in millions of readers every day, the
            Guardian has come a long way since 1821.
          </p>
          <LinkButton
            priority="primary"
            size="small"
            icon={<SvgArrowRightStraight />}
            iconSide="right"
            nudgeIcon={true}
            href="https://www.theguardian.com/media/ng-interactive/2021/may/05/guardian-200-timelines"
          >
            View the Guardian timeline
          </LinkButton>
        </div>
        <ul css={animationCss}>
          <li>• The Guardian History</li>
          <li>• Women</li>
          <li>• Society</li>
          <li>• Environment</li>
          <li>• World</li>
          <li>• Cartoons</li>
        </ul>
      </div>
    </div>
  );
};

export default UnfinishedBusinessThrasher;
