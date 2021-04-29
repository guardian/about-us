/** @jsxRuntime classic /
/** @jsx jsx */
import { css, jsx, ThemeProvider } from "@emotion/react";
import { buttonBrand, LinkButton } from "@guardian/src-button";
import { neutral, space } from "@guardian/src-foundations";
import { body, headline } from "@guardian/src-foundations/typography";
import { SvgArrowRightStraight } from "@guardian/src-icons";
import { minWidth } from "../../styles/breakpoints";

interface PatronSupportSectionProps {
  title: string;
  bodyText: string;
  buttonText: string;
  buttonLink: string;
}

const sectionContainerCss = css`
  color: ${neutral[100]};
  border-top: 1px solid #90abc4;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
`;

const h3Css = css`
  ${headline.xxsmall()}
  margin: 0;
  ${minWidth.tablet} {
    ${headline.xsmall()}
  }
`;

const pCss = css`
  ${body.small({ lineHeight: "loose" })}
  margin: 15px 0 21px 0;
`;

const linkButtonCss = css`
  width: fit-content;
`;

const PatronSupportSection = (props: PatronSupportSectionProps) => {
  return (
    <div css={sectionContainerCss}>
      <div className={"text"}>
        <h3 css={h3Css}>{props.title}</h3>
        <p css={pCss}>{props.bodyText}</p>
      </div>
      <ThemeProvider theme={buttonBrand}>
        <LinkButton
          size="small"
          icon={<SvgArrowRightStraight />}
          iconSide="right"
          nudgeIcon={true}
          href={props.buttonLink}
          priority="tertiary"
          className="button"
          css={linkButtonCss}
        >
          {props.buttonText}
        </LinkButton>
      </ThemeProvider>
    </div>
  );
};

const containerCss = css`
  display: flex;
  flex-direction: column;
  margin-top: 41px;
  gap: 41px;
  ${minWidth.tablet} {
    flex-direction: row;
    gap: ${space[5]}px;
    margin-top: 49px;
  }
  ${minWidth.desktop} {
    margin-top: ${space[3]}px;
  }
  ${minWidth.wide} {
    margin-top: 0;
  }
`;

const ReaderFundedPatronSupport = () => (
  <div css={containerCss}>
    <PatronSupportSection
      title="Join as a Guardian Patron"
      bodyText="To show your support at a higher level, discover our Patrons programme."
      buttonText="Discover"
      buttonLink="https://patrons.theguardian.com/"
    />
    <PatronSupportSection
      title="Support another way"
      bodyText="Read more about how to leave a legacy gift for the Guardian, and how
        to write us a cheque."
      buttonText="Read more"
      buttonLink="tbc"
    />
  </div>
);

export default ReaderFundedPatronSupport;
