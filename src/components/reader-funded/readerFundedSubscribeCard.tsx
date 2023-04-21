import { css, ThemeProvider } from "@emotion/react";
import {
  buttonThemeBrand,
  LinkButton,
  SvgArrowRightStraight,
} from "@guardian/source-react-components";
import {
  between,
  body,
  from,
  headline,
  neutral,
  space,
  until,
} from "@guardian/source-foundations";

interface ReaderFundedSubscribeCardProps {
  imagePath: string;
  title: string;
  bodyText: string;
  href: string;
}

const title = css`
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

const bodyCopy = css`
  color: ${neutral[100]};
  ${body.small({ lineHeight: "loose" })}
  margin-top: ${space[3]}px;
  margin-bottom: 22px;
`;

const container = css`
  display: flex;
  flex-direction: row-reverse;
  border-top: 1px solid #90abc4;
  ${from.tablet} {
    flex-direction: column;
    border-top: none;
  }
`;

const copyContainer = css`
  display: grid;
  grid-template-rows: 1fr min-content;
  padding-right: ${space[3]}px;

  ${from.tablet} {
    padding-right: 0;
    border-top: none;
  }

  ${between.desktop.and.wide} {
    grid-template-rows: min(155px) min-content;
  }
`;

const link = css`
  text-decoration: none;
`;

const linkButtonCss = css`
  width: fit-content;
`;

const ReaderFundedSubscribeCard = (props: ReaderFundedSubscribeCardProps) => {
  const image = css`
    ${until.tablet} {
      display: none;
    }

    ${from.tablet} {
      object-fit: contain;
      max-height: 120px;
    }

    ${from.desktop} {
      max-height: 130px;
    }
  `;

  return (
    <div css={container}>
      <img src={props.imagePath} css={image} alt="" />
      <div css={copyContainer}>
        <div>
          <a css={link} href={props.href}>
            <h3 css={title}>{props.title}</h3>
          </a>
          <p css={bodyCopy}>{props.bodyText}</p>
        </div>
        <ThemeProvider theme={buttonThemeBrand}>
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
