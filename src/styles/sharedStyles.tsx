import { css } from "@emotion/react";
import { neutral, space } from "@guardian/src-foundations";
import { headline, titlepiece } from "@guardian/src-foundations/typography";
import { minWidth } from "./breakpoints";

export const containerCss = (backgroundColor: string) => css`
  background-color: ${backgroundColor};
`;

export const headingCss = css`
  ${titlepiece.small()};
  max-width: 608px;
  font-size: 32px;
  line-height: 1.15;
  margin: 3px 0 18px 0;
  color: ${neutral[7]};
  ${minWidth.tablet} {
    font-size: 42px;
  }
  ${minWidth.desktop} {
    font-size: 50px;
    margin: 8px 0 27px 0;
  }
`;

export const twoColumnResponsiveCardHolder = css`
  border-top: 1px solid ${neutral[86]};
  margin: 40px 0 0;
  display: flex;
  flex-direction: column;
  & > * {
    margin-top: ${space[3]}px;
  }
  & > h3 {
    ${headline.small({ fontWeight: "bold" })};
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
  border-top: 1px solid ${neutral[86]};
  margin: 40px 0 0;
  display: flex;
  flex-direction: column;
  & > * {
    margin-top: ${space[3]}px;
  }
  & > h3 {
    ${headline.small({ fontWeight: "bold" })};
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
  border-top: 1px solid ${neutral[86]};
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

export const oneThenThreeColumnResponsiveCardHolder = css`
  border-top: 1px solid ${neutral[86]};
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
      &:first-of-type {
        width: 100%;
      }
    }
  }
`;

export const threeThenOneColumnResponsiveCardHolder = css`
  border-top: 1px solid ${neutral[86]};
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

export const singleColumnResponsiveCardHolder = css`
  border-top: 1px solid ${neutral[86]};
  margin: 40px 0 0;
  display: flex;
  & > * {
    margin-top: ${space[3]}px;
    width: 100%;
  }
  & > h3 {
    ${headline.small({ fontWeight: "bold" })};
    width: 100%;
    margin: ${space[1]}px 0 ${space[2]}px;
  }
  ${minWidth.tablet} {
    & > * {
      margin-top: ${space[5]}px;
    }
  }
`;

/////
export const x = css`
  border-top: 1px solid ${neutral[86]};
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

export const readerFundedSubscribeCardHolderCss = css`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 41px;
  grid-template-areas:
    "."
    "."
    ".";
  ${minWidth.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 20px;
    grid-template-areas: ". . .";
  }
`;

export const readerFundedSubscribeHeadingCss = css`
  color: ${neutral[100]};
  ${headline.small({ fontWeight: "bold" })}
  border-top: 1px solid #90ABC4;
  margin: 41.5px 0 30px 0;
  ${minWidth.tablet} {
    margin: 49px 0 21px 0;
  }
`;
