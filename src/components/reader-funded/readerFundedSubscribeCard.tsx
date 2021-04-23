/** @jsxRuntime classic /
/** @jsx jsx */
import { css, jsx, ThemeProvider } from "@emotion/react";
import { buttonReaderRevenue, LinkButton } from "@guardian/src-button";
import { body, headline } from "@guardian/src-foundations/typography";
import { brandAlt, neutral } from "@guardian/src-foundations/palette";
import { SvgArrowRightStraight } from "@guardian/src-icons";
import { minWidth } from "../../styles/breakpoints";
import { space } from "@guardian/src-foundations";

interface ImagePath {
  mobile: string;
  tabletAndAbove: string;
}

interface ReaderFundedSubscribeCardProps {
  imagePath: ImagePath;
  title: string;
  bodyText: string;
  href: string;
}

const h3Css = css`
  color: ${brandAlt[400]};
  ${headline.xxsmall()}
  font-size: 22px;
  margin: 0;
  ${minWidth.tablet} {
    font-size: 20px;
  }
`;

const pCss = css`
  color: ${neutral[100]};
  ${body.small({ lineHeight: "loose" })}
`;

export const cardContainerCss = css`
  display: grid;
  grid-auto-columns: 1.8fr 1fr;
  grid-auto-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "text image";
  border-top: 1px solid #90abc4;
  ${minWidth.tablet} {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "."
      ".";
    border-top: none;
  }
`;

const textAndLinkButtonCss = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 0 0 60%;
  padding-right: ${space[3]}px;
  grid-area: text;
  ${minWidth.tablet} {
    padding-right: 0;
    border-top: none;
    grid-area: auto;
  }
`;

const aCss = css`
  text-decoration: none;
`;

const linkButtonCss = css`
  width: fit-content;
`;

const ReaderFundedSubscribeCard = (props: ReaderFundedSubscribeCardProps) => {
  const cardImageCss = css`
    width: 100%;
    padding-top: 47.25%;
    background-image: url(${props.imagePath.mobile});
    background-size: contain;
    background-position: right center;
    background-repeat: no-repeat;
    height: 100%;
    margin: auto;
    flex: 0 0 40%;
    ${minWidth.tablet} {
      padding-top: 56.25%;
      background-size: cover;
      background-image: url(${props.imagePath.tabletAndAbove});
    }
  `;

  return (
    <div css={cardContainerCss}>
      <div css={cardImageCss} />
      <div css={textAndLinkButtonCss}>
        <div>
          <a css={aCss} href={props.href}>
            <h3 css={h3Css}>{props.title}</h3>
          </a>
          <p css={pCss}>{props.bodyText}</p>
        </div>
        <ThemeProvider theme={buttonReaderRevenue}>
          <LinkButton
            size="small"
            icon={<SvgArrowRightStraight />}
            iconSide="right"
            nudgeIcon={true}
            href={props.href}
            css={linkButtonCss}
          >
            Read More
          </LinkButton>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default ReaderFundedSubscribeCard;
