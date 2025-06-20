import { css, ThemeProvider } from "@emotion/react";
import {
  buttonThemeBrand,
  LinkButton,
  SvgArrowRightStraight,
} from "@guardian/source/react-components";
import { article15, headlineBold20, headlineBold24, palette, space } from "@guardian/source/foundations";
import { minWidth } from "../../styles/breakpoints";

interface PatronSupportSectionProps {
  title: string;
  bodyText: string;
  buttonText: string;
  buttonLink: string;
}

const sectionContainerCss = css`
  color: ${palette.neutral[100]};
  border-top: 1px solid #90abc4;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  ${minWidth.tablet} {
    width: calc(50% - 10px);
  }
`;

const h3Css = css`
  ${headlineBold20}
  margin: ${space[1]}px 0 0;
  ${minWidth.tablet} {
    ${headlineBold24}
  }
  ${minWidth.desktop} {
    margin: 6px 0 0;
  }
`;

const pCss = css`
  ${article15}
  margin-top: ${space[3]}px;
  margin-bottom: 22px;
`;

const linkButtonCss = css`
  width: fit-content;
`;

const PatronSupportSection = (props: PatronSupportSectionProps) => {
  return (
    <div css={sectionContainerCss} className="patronSupportSection">
      <div className={"text"}>
        <h3 css={h3Css}>{props.title}</h3>
        <p css={pCss}>{props.bodyText}</p>
      </div>
      <ThemeProvider theme={buttonThemeBrand}>
        <LinkButton
          size="small"
          icon={<SvgArrowRightStraight />}
          iconSide="right"
          nudgeIcon={true}
          href={props.buttonLink}
          priority="tertiary"
          className="button"
          cssOverrides={linkButtonCss}
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
  justify-content: space-between;
  margin-top: 41px;
  & .patronSupportSection + .patronSupportSection {
    margin-top: 41px;
  }
  ${minWidth.tablet} {
    flex-direction: row;
    & .patronSupportSection + .patronSupportSection {
      margin-top: 0;
    }
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
      buttonLink="https://www.theguardian.com/media/2021/apr/26/how-support-send-guardian-cheque-patrons-legacy-will-gift"
    />
  </div>
);

export default ReaderFundedPatronSupport;
