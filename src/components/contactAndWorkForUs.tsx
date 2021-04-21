/** @jsxRuntime classic /
/** @jsx jsx */
import { background, brand, neutral, space } from "@guardian/src-foundations";
import { body, headline } from "@guardian/src-foundations/typography";
import { LinkButton } from "@guardian/src-button";
import { SvgArrowRightStraight } from "@guardian/src-icons";
import { css, jsx } from "@emotion/react";
import { minWidth } from "../styles/breakpoints";

const divCss = css`
  width: 100%;
  border-top: 1px solid ${neutral[86]};
  margin-bottom: ${space[9]}px;
  ${minWidth.tablet} {
    width: 220px;
    margin-right: ${space[5]}px;
  }
`;

const h3Css = css`
  color: ${brand[400]};
  ${headline.xsmall({ fontWeight: "bold" })};
  margin: 0;
`;

const pCss = css`
  ${body.medium({ fontWeight: "regular" })}
  color: ${neutral[7]};
`;

interface ContactSectionProps {
  title: string;
  body: string;
  href: string;
}

const ContactSection = (props: ContactSectionProps) => (
  <div css={divCss}>
    <h3 css={h3Css}>{props.title}</h3>
    <p css={pCss}>{props.body}</p>
    <LinkButton
      priority="tertiary"
      size="small"
      icon={<SvgArrowRightStraight />}
      iconSide="right"
      nudgeIcon={true}
      href={props.href}
    >
      {props.title}
    </LinkButton>
  </div>
);

const containerCss = css`
  background-color: ${background.primary};
`;

const contactAndWorkForUsCss = css`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  margin: 0 auto;
  padding: 46px ${space[5]}px ${space[6]}px;
  ${minWidth.tablet} {
    flex-direction: row;
    padding: ${space[12]}px 140px 34px;
  }
  ${minWidth.desktop} {
    padding: 58px 100px 74px;
  }
  ${minWidth.wide} {
    padding: 72px 259px ${space[24]}px;
  }
`;

const ContactAndWorkForUs = () => {
  return (
    <div css={containerCss}>
      <div css={contactAndWorkForUsCss}>
        <ContactSection
          title="Contact us"
          body="Find out how to get in touch with The Guardian."
          href="https://www.theguardian.com/help/contact-us"
        />
        <ContactSection
          title="Work for us"
          body="Search for jobs at The Guardian and apply. "
          href="https://workforus.theguardian.com/"
        />
      </div>
    </div>
  );
};

export default ContactAndWorkForUs;
