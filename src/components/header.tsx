import { css } from "@emotion/react";
import { GLogo } from "./gLogo";
import {
  space,
  headline,
  textSans,
  brand,
  brandAlt,
  neutral,
} from "@guardian/source-foundations";
import { minWidth } from "../styles/breakpoints";

interface NavSection {
  title: string;
  isSelected: boolean;
  link: string;
}

interface HeaderProps {
  navSections: NavSection[];
}

const cssTransitionFunc = "cubic-bezier(0.23, 1, 0.32, 1)";
const mobileOpenCloseBtnSize = 42;
const desktopMenuHighlightHeight = 4;

const headerStyles = css`
  background-color: ${brand[400]};
  padding: 0 57px 0 10px;
  text-align: right;
  position: relative;
  z-index: 10;
  border-bottom: 1px solid ${brand[600]};
  & .top-and-bottom-nav {
    position: fixed;
    top: 0;
    left: -100vw;
    width: 100vw;
    width: calc(100vw - 30px);
    height: 100vh;
    background-color: ${brand[400]};
    opacity: 0;
    transition: opacity 0.1s 0.4s ${cssTransitionFunc},
      left 0.4s ${cssTransitionFunc};
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 100%;
      width: 0;
      height: 100vh;
      background-color: black;
      overflow-x: hidden;
      opacity: 0;
      transition: opacity 0.1s ${cssTransitionFunc},
        width 0.4s ${cssTransitionFunc};
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 22px;
      right: -21px;
      width: ${mobileOpenCloseBtnSize}px;
      height: ${mobileOpenCloseBtnSize}px;
      background-image: url("/about/images/menu-opened.svg");
    }
  }

  & input:checked ~ .top-and-bottom-nav {
    left: 0;
    opacity: 1;
    transition: opacity 0.4s ${cssTransitionFunc},
      left 0.4s ${cssTransitionFunc};
  }

  & input:checked ~ .top-and-bottom-nav:before {
    opacity: 0.8;
    width: 100vw;
  }

  & nav {
    text-align: left;
  }

  & nav a {
    ${headline.xsmall({ fontWeight: "bold", lineHeight: "loose" })};
    padding-bottom: ${space[5]}px;
    border-bottom: 1px solid ${brand[600]};
    color: ${neutral[100]};
    display: block;
    text-decoration: none;
    margin-left: 50px;
  }
  & nav.main {
    margin-top: ${space[2]}px;
    order: 1;
  }
  & nav.top {
    order: 2;

    a {
      ${textSans.medium({ fontWeight: "regular" })};
    }
  }

  ${minWidth.headerTablet} {
    padding: 0;
    & .top-and-bottom-nav {
      position: static;
      background-color: transparent;
      transition: none;
      width: auto;
      height: auto;
      opacity: 1;
      padding-left: ${space[2]}px;
      &::before,
      &::after {
        display: none;
      }
    }
    & nav a {
      font-size: 20px;
      line-height: 1.25;
      display: inline-block;
      margin-left: 0;
      padding: ${space[2]}px ${space[5]}px ${space[2]}px ${space[2]}px;
      border-bottom: 0;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 0;
        background-color: ${brandAlt[400]};
        transition: height 0.3s ease-in-out;
      }
      &:hover::after,
      &:focus::after {
        height: ${desktopMenuHighlightHeight}px;
      }
      & + a::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 70%;
        border-left: 1px solid ${brand[600]};
      }
    }

    & nav a.selected-nav-item::after {
      height: ${desktopMenuHighlightHeight}px;
    }
    & nav.main {
      margin-top: 0;
      border-top: 1px solid ${brand[600]};
    }
    & nav.top {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      max-width: 680px;
      & a {
        padding: ${space[2]}px;
        border-bottom: 0;
        transition: color 250ms ease-out;
        &:hover,
        &:focus {
          color: ${brandAlt[400]};
        }
      }
    }
  }
  ${minWidth.desktop} {
    & .top-and-bottom-nav {
      max-width: 980px;
      margin: 0 auto;
      padding-left: 0;
    }

    & nav.main {
      border-left: 1px solid ${brand[600]};
      border-right: 1px solid ${brand[600]};
    }

    & nav.main a:first-of-type {
      padding-left: ${space[5]}px;
    }
    & nav.top {
      left: 50%;
      transform: translateX(-490px);
      & a {
        padding: ${space[2]}px ${space[5]}px ${space[2]}px ${space[2]}px;
      }
      & a::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 70%;
        border-left: 1px solid ${brand[600]};
      }
    }
  }
  ${minWidth.wide} {
    & .top-and-bottom-nav {
      max-width: 1300px;
    }
    & nav.top {
      transform: translateX(-650px);
    }
  }
`;

const logoHolderStyle = css`
  position: relative;
  &::after {
    content: "";
    display: block;
    width: ${mobileOpenCloseBtnSize}px;
    height: ${mobileOpenCloseBtnSize}px;
    background-image: url("/about/images/menu-closed.svg");
    position: absolute;
    top: 22px;
    right: -48px;
  }

  ${minWidth.headerTablet} {
    &::after {
      display: none;
    }
  }
  ${minWidth.desktop} {
    max-width: 980px;
    margin: 0 auto;
  }
  ${minWidth.wide} {
    max-width: 1300px;
  }
`;

const hiddenCheckboxStyle = css`
  opacity: 0;
  width: ${mobileOpenCloseBtnSize}px;
  height: ${mobileOpenCloseBtnSize}px;
  position: absolute;
  right: 6px;
  bottom: 2px;
  z-index: 10;
  &:checked {
    position: fixed;
    right: 6px;
    top: 19px;
    bottom: auto;
  }
  ${minWidth.headerTablet} {
    display: none;
  }
`;

const mobileNavYOverflow = css`
  display: flex;
  flex-flow: column;

  height: 100vh;
  overflow-y: auto;
  ${minWidth.headerTablet} {
    height: auto;
  }
`;

const Header = (props: HeaderProps) => (
  <header css={headerStyles}>
    <input type="checkbox" css={hiddenCheckboxStyle} />
    <div css={logoHolderStyle}>
      <GLogo />
    </div>
    <div className="top-and-bottom-nav">
      <div css={mobileNavYOverflow}>
        <nav className="top">
          <a href="https://www.theguardian.com/gnm-press-office">
            Guardian press office
          </a>
          <a href="https://www.theguardianfoundation.org">
            Guardian foundation
          </a>
          <a href="https://workforus.theguardian.com/">Work for us</a>
          <a href="https://www.theguardian.com/help/contact-us">Contact us</a>
        </nav>
        <nav className="main">
          {props.navSections.map((navItem, navItemIndex) => (
            <a
              href={navItem.link}
              {...(navItem.isSelected
                ? { className: "selected-nav-item" }
                : {})}
              key={`nav-${navItemIndex}`}
            >
              {navItem.title}
            </a>
          ))}
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
