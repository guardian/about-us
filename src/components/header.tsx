/** @jsxRuntime classic /
/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import { GLogo } from "./gLogo";
import { brand, brandAlt } from "@guardian/src-foundations/palette";
import { headline, textSans } from "@guardian/src-foundations/typography";
import { space } from "@guardian/src-foundations";
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
  & .top-and-bottom-nav {
    position: fixed;
    top: 0;
    left: -100vw;
    width: 100vw;
    width: calc(100vw - 30px);
    height: 100vh;
    background-color: ${brand[400]};
    transition: left 0.4s ${cssTransitionFunc};
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 22px;
      right: -21px;
      width: ${mobileOpenCloseBtnSize}px;
      height: ${mobileOpenCloseBtnSize}px;
      background-image: url("/images/menu-opened.svg");
    }
  }

  & input:checked ~ .top-and-bottom-nav {
    left: 0;
  }
  & .top-and-bottom-nav:before {
    content: "";
    position: absolute;
    top: 0;
    left: 100%;
    width: 100vw;
    height: 100vh;
    background-color: black;
    overflow-x: hidden;
    opacity: 0;
    transition: opacity 0.4s ${cssTransitionFunc};
  }
  & input:checked ~ .top-and-bottom-nav:before {
    opacity: 0.8;
  }
  & .nav-button {
    width: ${mobileOpenCloseBtnSize}px;
    height: ${mobileOpenCloseBtnSize}px;
    position: absolute;
    right: 10px;
    bottom: 5px;
    z-index: 9;
    background-image: url(/images/menu-closed.svg);
  }
  & input:checked ~ .nav-button {
    background-image: url(/images/menu-opened.svg);
  }

  & nav {
    text-align: left;
  }

  & nav a {
    ${headline.xsmall({fontWeight: "bold", lineHeight: "loose" })};
    padding-bottom: ${space[5]}px;
    border-bottom: 1px solid ${brand[600]};
    color: white;
    display: block;
    text-decoration: none;
    margin-left: 50px;
  }
  & nav:nth-of-type(2) a {
    ${textSans.medium({ fontWeight: "regular" })};
  }

  ${minWidth.headerTablet} {
    padding: 0;
    border-bottom: 1px solid ${brand[600]};
    & .top-and-bottom-nav {
      position: static;
      background-color: transparent;
      transition: unset;
      width: unset;
      height: unset;
      padding-left: ${space[2]}px;
      border-top: 1px solid ${brand[600]};
      &: before, &: after {
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
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 0;
        background-color: ${brandAlt[400]};
        transition: height .3s ease-in-out;
      }
      &:hover:after {
        height: ${desktopMenuHighlightHeight}px;
      }
      & + a:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 70%;
        border-left: 1px solid ${brand[600]};
      }
    }
    & nav a.selected-nav-item: after {
      height: ${desktopMenuHighlightHeight}px;
    }
    & nav:nth-of-type(2) {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      max-width: 680px;
      & a {
        ${textSans.small({ fontWeight: "regular" })};
        padding: ${space[2]}px;
        border-bottom: 0;
        transition: color 250ms ease-out;
        &:after {
          display: none;
        }
        &:hover {
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
      border-left: 1px solid ${brand[600]};
      border-right: 1px solid ${brand[600]};
    }
    & nav:first-of-type a:first-of-type {
      padding-left: ${space[5]}px;
    }
    & nav:nth-of-type(2) {
      left: 50%;
      transform: translateX(-490px);
      & a {
        padding: ${space[2]}px ${space[5]}px ${space[2]}px ${space[2]}px;
      }
      & a:before {
        content: '';
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
    & nav:nth-of-type(2) {
      transform: translateX(-650px);
    }
  }
`;

const logoHolderStyle = css`
  &:after {
    content: "";
    display: block;
    width: ${mobileOpenCloseBtnSize}px;
    height: ${mobileOpenCloseBtnSize}px;
    background-image: url("/images/menu-closed.svg");
    position: absolute;
    top: 22px;
    right: 10px;
  }

  ${minWidth.headerTablet} {
    &:after {
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
  right: 10px;
  bottom: 5px;
  z-index: 10;
  ${minWidth.headerTablet} {
    display: none;
  }
`;

const Header = (props: HeaderProps) => (
  <>
    <header css={headerStyles}>
      <div css={logoHolderStyle}>
        <GLogo />
      </div>
      <input type="checkbox" css={hiddenCheckboxStyle} />
      <div className="top-and-bottom-nav">
        <nav>
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
        <nav>
          <a href="https://www.theguardian.com/gnm-press-office">
            Guardian press office
          </a>
          <a href="https://www.theguardian.com/the-guardian-foundation">
            Guardian foundation
          </a>
          <a href="https://workforus.theguardian.com/">Work for us</a>
          <a href="https://www.theguardian.com/help/contact-us">Contact us</a>
        </nav>
      </div>
    </header>
  </>
);

export default Header;
