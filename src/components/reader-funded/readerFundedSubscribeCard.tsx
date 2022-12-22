/** @jsxRuntime classic /
/** @jsx jsx */
import { css, jsx, ThemeProvider } from "@emotion/react";
import { buttonBrand, LinkButton } from "@guardian/src-button";
import { body, headline } from "@guardian/src-foundations/typography";
import { neutral } from "@guardian/src-foundations/palette";
import { SvgArrowRightStraight } from "@guardian/src-icons";
import { space } from "@guardian/src-foundations";
import { between, from } from "@guardian/src-foundations/mq";

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
  color: ${neutral[100]};
  ${headline.xxsmall()};
  font-weight: normal;
  font-size: 22px;
  margin: 0;
  ${from.tablet} {
    font-size: 20px;
    margin-top: ${space[1]}px;
  }
  ${from.desktop} {
    font-size: 24px;
    margin-top: 6px;
  }
`;

const pCss = css`
  color: ${neutral[100]};
  ${body.small({ lineHeight: "loose" })}
  margin-top: ${space[3]}px;
  margin-bottom: 22px;
`;

const cardContainerCss = css`
  display: flex;
  flex-direction: row-reverse;
  border-top: 1px solid #90abc4;
  ${from.tablet} {
    flex-direction: column;
    border-top: none;
  }
`;

const textAndLinkButtonCss = css`
  display: grid;
  grid-template-rows: 1fr min-content;
  padding-right: ${space[3]}px;
  max-width: 200px;

  ${from.mobileMedium} {
    max-width: 250px;
  }

  ${from.mobileMedium} {
    max-width: initial;
  }

  ${from.tablet} {
    padding-right: 0;
    border-top: none;
  }

  ${between.desktop.and.wide} {
    grid-template-rows: min(155px) min-content;
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
    padding-top: 50%;
    background-image: url(${props.imagePath.mobile});
    background-size: contain;
    background-position: right top;
    background-repeat: no-repeat;
    margin: 10.5px -${space[3]}px auto auto;
    ${from.tablet} {
      margin: 0 auto;
      padding-top: 31%;
      background-size: contain;
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
        <ThemeProvider theme={buttonBrand}>
          <LinkButton
            size="small"
            icon={<SvgArrowRightStraight />}
            iconSide="right"
            nudgeIcon={true}
            href={props.href}
            css={linkButtonCss}
            priority="tertiary"
          >
            Read more
          </LinkButton>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default ReaderFundedSubscribeCard;
