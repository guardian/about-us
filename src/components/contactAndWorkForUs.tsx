/** @jsxRuntime classic /
/** @jsx jsx */
import { background, brand, neutral, space } from "@guardian/src-foundations";
import { body, headline } from "@guardian/src-foundations/typography";
import { containerCss } from "../styles/sharedStyles";
import { css, jsx } from "@emotion/react";
import { LinkButton } from "@guardian/src-button";
import { minWidth, namedBreakpoints } from "../styles/breakpoints";
import { SvgArrowRightStraight } from "@guardian/src-icons";

const contactSectionItemCss = css`
  width: 100%;
  border-top: 1px solid ${neutral[86]};
  margin-bottom: ${space[9]}px;
  ${minWidth.tablet} {
    width: 220px;
    margin-right: ${space[5]}px;
  }
`;

const contactSectionItemH3Css = css`
  color: ${brand[400]};
  ${headline.xsmall({ fontWeight: "bold" })};
  margin: 0;
`;

const contactSectionItemPCss = css`
  ${body.medium({ fontWeight: "regular" })};
  color: ${neutral[7]};
`;

interface ContactSectionItemProps {
  title: string;
  body: string;
  href: string;
}

const ContactSectionItem = (props: ContactSectionItemProps) => (
  <div css={contactSectionItemCss}>
    <h3 css={contactSectionItemH3Css}>{props.title}</h3>
    <p css={contactSectionItemPCss}>{props.body}</p>
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

const contactAndWorkForUsCss = css`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  margin: 0 auto;
  padding: 46px ${space[5]}px ${space[6]}px;
  ${minWidth.tablet} {
    flex-direction: row;
    padding: ${space[12]}px ${space[5]}px 34px;
    width: ${namedBreakpoints.tablet}px;
  }
  ${minWidth.desktop} {
    padding: 58px 80px 74px;
    width: ${namedBreakpoints.desktop}px;
  }
  ${minWidth.wide} {
    padding: 72px 239px ${space[24]}px;
    width: ${namedBreakpoints.wide}px;
  }
`;

const ContactAndWorkForUs = () => {
  return (
    <div css={containerCss(background.primary)}>
      <div css={contactAndWorkForUsCss}>
        <ContactSectionItem
          title="Contact us"
          body="Find out how to get in touch with The Guardian."
          href="https://www.theguardian.com/help/contact-us"
        />
        <ContactSectionItem
          title="Work for us"
          body="Search for jobs at The Guardian and apply. "
          href="https://workforus.theguardian.com/"
        />
      </div>
    </div>
  );
};

export default ContactAndWorkForUs;
