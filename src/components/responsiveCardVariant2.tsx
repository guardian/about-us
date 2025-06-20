import { css } from "@emotion/react";
import { headlineBold17, palette, space } from "@guardian/source/foundations";
import { minWidth } from "../styles/breakpoints";

interface ResponsiveCardVariant2Props {
  href: string;
  title: string;
  imageUrl: string;
}

const ResponsiveCardVariant2 = (props: ResponsiveCardVariant2Props) => {
  const containerCss = css`
    border: 1px solid ${palette.neutral[86]};
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
    ${headlineBold17}
    font-size: 16px;
    color: ${palette.brand[400]};
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
      <img src={props.imageUrl} css={imageCss} loading="lazy" />
      <h2 css={titleCss}>{props.title}</h2>
    </a>
  );
};

export default ResponsiveCardVariant2;
