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
    display: block;
  `;

  const linkCss = css`
    text-decoration: none;
    display: block;
    width: 100%;
    ${minWidth.tablet} {
    }
  `;
  const titleCss = css`
    ${headline.xxxsmall({ fontWeight: "bold" })};
    font-size: 16px;
    color: ${brand[400]};
    margin: 0;
    height: calc(3em + ${space[2]}px);
    padding: ${space[2]}px;
    ${minWidth.tablet} {
      font-size: 18px;
      padding: ${space[3]}px;
      height: calc(3em + ${space[3]}px);
    }
    ${minWidth.desktop} {
      font-size: 24px;
    }
  `;

  return (
    <div css={containerCss}>
      <a href={props.href} css={linkCss}>
        <img src={props.imageUrl} css={imageCss} />
        <h2 css={titleCss}>{props.title}</h2>
      </a>
    </div>
  );
};

export default ResponsiveCardVariant2;
