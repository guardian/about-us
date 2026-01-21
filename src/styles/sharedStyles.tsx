import { css } from "@emotion/react";
import {
  headlineBold24,
  headlineBold28,
  palette,
  space,
  textSans17,
  titlepiece42,
} from "@guardian/source/foundations";
import { minWidth } from "./breakpoints";

export const headingCss = css`
  ${titlepiece42}
  font-size: 32px;
  line-height: 1.15;
  margin: 3px 0 18px 0;
  color: ${palette.neutral[7]};
  ${minWidth.tablet} {
    font-size: 42px;
  }
  ${minWidth.desktop} {
    font-size: 50px;
    margin: 0 0 27px;
  }
`;

export const skipToContentStyles = css`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  ${textSans17}
  &:active,
  &:focus {
    clip: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    position: static;
    white-space: normal;
    width: auto;
  }
`;

export const twoColumnResponsiveCardHolder = css`
  border-top: 1px solid ${palette.neutral[86]};
  margin: 40px 0 0;
  display: flex;
  flex-direction: column;
  & > * {
    margin-top: ${space[3]}px;
  }
  & > h3 {
    ${headlineBold28}
    width: 100%;
    margin: ${space[1]}px 0 ${space[2]}px;
  }
  ${minWidth.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    & > * {
      width: 50%;
      width: calc(50% - 10px);
      margin-top: ${space[5]}px;
    }
  }
`;

export const twoThenOneColumnResponsiveCardHolder = css`
  border-top: 1px solid ${palette.neutral[86]};
  margin: 40px 0 0;
  display: flex;
  flex-direction: column;
  & > * {
    margin-top: ${space[3]}px;
  }
  & > h3 {
    ${headlineBold28}
    width: 100%;
    margin: ${space[1]}px 0 ${space[2]}px;
  }
  ${minWidth.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    & > * {
      width: 50%;
      width: calc(50% - 10px);
      margin-top: ${space[5]}px;
      &:last-of-type {
        width: 100%;
      }
    }
  }
`;

export const threeColumnResponsiveCardHolder = css`
  border-top: 1px solid ${palette.neutral[86]};
  margin: 40px 0 0;
  display: flex;
  flex-direction: column;
  & > * {
    margin-top: ${space[3]}px;
  }
  ${minWidth.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    & > * {
      width: 33.3%;
      width: calc(33.3% - 13px);
      margin-top: ${space[5]}px;
    }
  }
`;

export const oneThenTwoColumnResponsiveCardHolder = css`
  border-top: 1px solid ${palette.neutral[86]};
  margin: 40px 0 0;
  display: flex;
  flex-direction: column;
  & > * {
    margin-top: ${space[3]}px;
  }
  ${minWidth.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    & > * {
      width: 50%;
      width: calc(50% - 13px);
      margin-top: ${space[5]}px;
      &:first-of-type {
        width: 100%;
      }
    }
  }
`;

export const threeThenOneColumnResponsiveCardHolder = css`
  border-top: 1px solid ${palette.neutral[86]};
  margin: 40px 0 0;
  display: flex;
  flex-direction: column;
  & > * {
    margin-top: ${space[3]}px;
  }
  ${minWidth.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    & > * {
      width: 33.3%;
      width: calc(33.3% - 13px);
      margin-top: ${space[5]}px;
      &:last-of-type {
        width: 100%;
      }
    }
  }
`;

export const threeThenTwoColumnResponsiveCardHolder = css`
  border-top: 1px solid ${palette.neutral[86]};
  margin: 40px 0 0;
  display: flex;
  flex-direction: column;
  & > * {
    margin-top: ${space[3]}px;
  }
  & > h3 {
    ${headlineBold28}
    width: 100%;
    margin: ${space[1]}px 0 ${space[2]}px;
  }
  ${minWidth.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 13px;
    & > * {
      width: 33.3%;
      width: calc(33.3% - 13px);
      margin-top: ${space[5]}px;
    }
  }
`;

export const singleColumnResponsiveCardHolder = css`
  border-top: 1px solid ${palette.neutral[86]};
  margin: 40px 0 0;
  display: flex;
  & > * {
    margin-top: ${space[3]}px;
    width: 100%;
  }
  & > h3 {
    ${headlineBold28}
    width: 100%;
    margin: ${space[1]}px 0 ${space[2]}px;
  }
  ${minWidth.tablet} {
    & > * {
      margin-top: ${space[5]}px;
    }
  }
`;

export const readerFundedSubscribeCardHolderCss = css`
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 41px;
  }
  ${minWidth.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    & > * {
      width: 50%;
      width: calc(50% - 13px);
      margin-bottom: 0;
    }
  }
`;

export const readerFundedHeadingCss = css`
  color: ${palette.neutral[100]};
  ${headlineBold24}
  border-top: 1px solid #90ABC4;
  margin: 41.5px 0 30px 0;

  ${minWidth.tablet} {
    margin: 49px 0 ${space[5]}px 0;
    font-size: 34px;
  }
`;

export const printReaderFundedHeadingCss = css`
  font-size: 20px;

  ${minWidth.tablet} {
    font-size: 24px;
    margin-bottom: 2px;
  }
`;

export const supportReaderFundedHeadingCss = css`
  font-size: 32px;
  color: ${palette.brandAlt[400]};
  padding-top: ${space[2]}px;

  ${minWidth.tablet} {
    margin-bottom: ${space[3]}px;
    font-size: 42px;
  }
`;

export const responsiveCardV2Holder = css`
  border-top: 1px solid ${palette.neutral[86]};
  margin: 40px 0 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  & > * {
    margin-top: ${space[3]}px;
    width: calc(50% - 6px);
  }
  ${minWidth.tablet} {
    & > * {
      width: calc(33.3% - 13px);
      margin-top: ${space[5]}px;
    }
  }
`;

export const oneTopTwoBottomCardHolder = css`
  border-top: 1px solid ${palette.neutral[86]};
  margin: 40px 0 0;
  display: flex;
  flex-direction: column;
  & > * {
    margin-top: ${space[3]}px;
  }
  ${minWidth.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    & > * {
      width: 50%;
      width: calc(50% - 10px);
      margin-top: ${space[5]}px;
      &:first-child {
        width: 100%;
        margin-bottom: ${space[3]}px;
      }
    }
  }
`;
