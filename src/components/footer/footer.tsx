/** @jsxRuntime classic /
/** @jsx jsx */
import { brand, brandAlt, neutral } from "@guardian/src-foundations";
import React from "react";
import { footerLinks } from "./footerlinks";
import { from } from "@guardian/src-foundations/mq";
import { headline, textSans } from "@guardian/src-foundations/typography";
import { LinkButton, buttonReaderRevenue } from "@guardian/src-button";
import { SvgArrowRightStraight } from "@guardian/src-icons";
import { SyntheticEvent } from "react";
import { ThemeProvider, css, jsx } from "@emotion/react";
import { cmp } from "@guardian/consent-management-platform";
import { getGeoLocation } from "./getLocationCookie";
import "ophan-tracker-js";

const TODAY = new Date();

const footerColourStyles = css`
  background-color: ${brand[400]};
  color: ${neutral[100]};
`;

const footerSizeStyles = css`
  max-width: 1300px;
  margin: auto;
`;

const footerContentStyles = css`
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 0;

  ${from.desktop} {
    padding: 0 20px;
    margin: 0 20px;
  }

  ${from.leftCol} {
    display: flex;
  }
`;

const emailSignUpStyles = css`
  padding: 0;
  border: 0;
  width: 100%;
  margin: 0;
  ${from.leftCol} {
    width: 340px;
  }
  ${from.wide} {
    width: 460px;
  }
`;

const emailSignUpIframeStyles = css`
  min-height: 150px;
`;

const footerMenuStyles = css`
  font-feature-settings: kern;
  font-size: 16px;
  line-height: 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  ${from.wide} {
    border-top: 0;
  }
`;

const footerMenuUlStyles = css`
  line-height: 19.2px;
  width: calc(50% - 1.25rem - 1px);
  list-style: none;
  position: relative;
  padding: 0 10px;
  margin: 0;

  &:nth-of-type(even) {
    border-left: 1px solid rgba(255, 255, 255, 0.3);
  }

  ${from.tablet} {
    &:not(:first-of-type) {
      border-left: 1px solid rgba(255, 255, 255, 0.3);
    }

    width: 161px;
    flex: 1 0 0;
  }

  ${from.desktop} {
    border-left: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

const footerMenuLiStyles = css`
  list-style: none;
`;

const footerLinkStyles = css`
  display: inline-block;
  padding: 6px 0;
  color: ${neutral[100]};
  ${textSans.medium()};
  font-size: 16px;
  line-height: 19.2px;
  text-decoration: none;
  :hover {
    color: ${brandAlt[400]};
    cursor: pointer;
  }
`;

const supportStyles = css`
  width: 50%;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  padding-left: 10px;
  ${from.phablet} {
    width: 300px;
  }
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  ${from.tablet} {
    border-top: 0;
  }
`;

const supportTitleStyles = css`
  color: ${brandAlt[400]};
  ${headline.xsmall({ fontWeight: "bold" })};
  line-height: 24px;
  margin-top: 3px;
  margin-bottom: 12px;
  ${from.phablet} {
    font-size: 32px;
    line-height: 32px;
  }
`;

const supportButtonContainerStyles = css`
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 6px;
`;

const copyrightStyles = css`
  padding-bottom: 24px;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
`;

const backToTopLinkStyles = css`
  font-size: 16px;
  color: ${neutral[100]};
  font-weight: bold;
  padding: 0 5px;
  background-color: ${brand[400]};
  :hover {
    color: ${brandAlt[400]};
  }
  position: absolute;
  right: 20px;
  transform: translateY(-50%);
`;

const backToTopLabelStyles = css`
  ${textSans.small({ fontWeight: "bold" })};
  font-size: 16px;
  display: inline-block;
  padding-right: 5px;
  padding-top: 9px;
`;

const backToTopButtonOutterContainerStyles = css`
  position: relative;
  float: right;
  background-color: currentColor;
  border-radius: 100%;
  height: 42px;
  width: 42px;
`;

const backToTopButtonInnerContainerStyles = css`
  position: absolute;
  fill: ${brand[400]};
  top: 9px;
  left: 9px;
`;

const copyrightTextStyles = css`
  ${textSans.xsmall()};

  ${from.tablet} {
    padding-top: 6px;
  }
  padding-top: 26px;
  font-size: 12px;
`;

const privacyButtonCss = css`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  display: inline-block;
  padding: 6px 0;
  color: ${neutral[100]};
  ${textSans.medium()};
  font-size: 16px;
  line-height: 19.2px;
  text-decoration: none;
  :hover {
    color: ${brandAlt[400]};
    cursor: pointer;
  }
`;

const fillEmailSignup = (_: SyntheticEvent<HTMLIFrameElement>) => {
  // Placeholder method to autofill user email when the iframe is hosted on the same hostname
  return;
};

const privacySettingsClickHandler = () => {
  if (cmp.hasInitialised()) {
    cmp.showPrivacyManager();
  }
};

const countryCode = getGeoLocation() ?? "GB";
cmp.init({ country: countryCode });

const Footer = () => (
  <footer>
    <div>
      <div css={footerColourStyles}>
        <div css={footerSizeStyles}>
          <div css={footerContentStyles}>
            <div css={emailSignUpStyles}>
              <iframe
                title="Guardian Email Sign-up Form"
                src={`https://www.theguardian.com/email/form/footer/today-uk`}
                scrolling="no"
                seamless={false}
                frameBorder="0"
                data-form-success-desc="We will send you our picks of the most important headlines tomorrow morning."
                data-node-uid="2"
                height="86px"
                onLoad={(emailForm) => fillEmailSignup(emailForm)}
                css={emailSignUpIframeStyles}
              />
            </div>

            <div css={footerMenuStyles}>
              {footerLinks.map((linkList, i) => (
                <ul key={i} css={footerMenuUlStyles}>
                  {linkList.map(({ title, link, titleUSA, privacyCmp }) => (
                    <li key={title} css={footerMenuLiStyles}>
                      {privacyCmp ? (
                        <button
                          css={privacyButtonCss}
                          onClick={privacySettingsClickHandler}
                        >
                          {countryCode === "US" ? titleUSA : title}
                        </button>
                      ) : (
                        <a href={link} css={footerLinkStyles}>
                          {title}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              ))}

              <div css={supportStyles}>
                <div css={supportTitleStyles}>Support The&nbsp;Guardian</div>
                <ThemeProvider theme={buttonReaderRevenue}>
                  <div css={supportButtonContainerStyles}>
                    <LinkButton
                      iconSide="right"
                      icon={<SvgArrowRightStraight />}
                      nudgeIcon={true}
                      size="small"
                      css={css`
                        padding: 0 14px;
                      `}
                      href="https://support.theguardian.com/uk/contribute"
                    >
                      Contribute
                    </LinkButton>
                  </div>
                  <LinkButton
                    iconSide="right"
                    icon={<SvgArrowRightStraight />}
                    nudgeIcon={true}
                    size="small"
                    css={css`
                      padding: 0 14px;
                    `}
                    href="https://support.theguardian.com/uk/subscribe"
                  >
                    Subscribe
                  </LinkButton>
                </ThemeProvider>
              </div>
            </div>
          </div>

          <div css={copyrightStyles}>
            <a href="#top" css={backToTopLinkStyles}>
              <span css={backToTopLabelStyles}>Back to top</span>
              <span css={backToTopButtonOutterContainerStyles}>
                <span css={backToTopButtonInnerContainerStyles}>
                  <svg width="24" height="18" viewBox="0 0 24 18">
                    <path d="M.4 15.3l10.5-8.4L12 6l1.1.9 10.5 8.4-.5.7L12 9.7.9 16l-.5-.7z" />
                  </svg>
                </span>
              </span>
            </a>
            <div css={copyrightTextStyles}>
              © {TODAY.getFullYear()} Guardian News and Media Limited or its
              affiliated companies. All&nbsp;rights&nbsp;reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
