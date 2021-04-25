/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { space } from "@guardian/src-foundations";
import { brand, neutral } from "@guardian/src-foundations/palette";
import { headline } from "@guardian/src-foundations/typography";
import { minWidth } from "../styles/breakpoints";

interface ResponsiveCardVariant2Props {
  href: string;
  title: string;
  imageUrl: string;
}

const ResponsiveCardVariant2 = (props: ResponsiveCardVariant2Props) => {
  const containerCss = css`
    border: 1px solid ${neutral[86]};
  `;

  const imageCss = css`
    width: 100%;
    height: auto;
  `;

  const linkCss = css`
    text-decoration: none;
    display: block;
    width: 100%;
    padding: ${space[2]}px;
    ${minWidth.tablet} {
      padding: ${space[3]}px;
    }
  `;
  const titleCss = css`
    ${headline.xxxsmall({ fontWeight: "bold" })};
    font-size: 16px;
    color: ${brand[400]};
    margin: 0;
    height: 3em;
    ${minWidth.tablet} {
      font-size: 18px;
    }
    ${minWidth.desktop} {
      font-size: 24px;
    }
  `;

  return (
    <div css={containerCss}>
      <img src={props.imageUrl} css={imageCss} />
      <a href={props.href} css={linkCss}>
        <h2 css={titleCss}>{props.title}</h2>
      </a>
    </div>
  );
};

export default ResponsiveCardVariant2;
