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
    text-decoration: none;
    transition: background-color 0.3s ease-in;
    &:hover {
      background-color: #eee;
    }
  `;

  const imageCss = css`
    width: 100%;
    height: auto;
    display: block;
  `;

  const titleCss = css`
    ${headline.xxxsmall({ fontWeight: "bold" })};
    font-size: 16px;
    color: ${brand[400]};
    margin: 0;
    min-height: 4em;
    padding: ${space[2]}px;
    ${minWidth.tablet} {
      font-size: 18px;
      padding: ${space[3]}px;
    }
    ${minWidth.desktop} {
      font-size: 24px;
    }
  `;

  return (
    <a href={props.href} css={containerCss}>
      <img src={props.imageUrl} css={imageCss} />
      <h2 css={titleCss}>{props.title}</h2>
    </a>
  );
};

export default ResponsiveCardVariant2;
