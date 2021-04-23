/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { neutral } from "@guardian/src-foundations/palette";
import { minWidth } from "../styles/breakpoints";

interface FullWidthImageProps {
  smallImageUrl: string;
  largeImageUrl: string;
  smallImageAspectRatio?: number;
  largeImageAspectRatio?: number;
  // aspect ratio is height percentage of width eg (height / width) * 100
}

const FullWidthImage = ({
  smallImageUrl,
  largeImageUrl,
  smallImageAspectRatio = 60,
  largeImageAspectRatio = 46,
}: FullWidthImageProps) => {
  const imageHolderCss = css`
    max-width: 1440px;
    margin: 0 auto;
  `;

  const imageCss = css`
    width: 100%;
    padding-top: ${smallImageAspectRatio}%;
    background-image: url("${smallImageUrl}");
    background-repeat: no-repeat;
    background-size: 100% 100%;

    ${minWidth.tablet} {
      padding-top: ${largeImageAspectRatio}%;
      background-image: url("${largeImageUrl}");
    }
  `;

  return (
    <div css={css`background-color: ${neutral[86]};`} aria-hidden="true">
      <div css={imageHolderCss}>
        <div css={imageCss}></div>
      </div>
    </div>
  );
};

export default FullWidthImage;
