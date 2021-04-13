/** @jsxRuntime classic /
/** @jsx jsx */
import React from "react";
import { css, Global, jsx } from "@emotion/react";
import { GLogo } from "./gLogo";
import { brand } from "@guardian/src-foundations/palette";
import { headline, textSans } from "@guardian/src-foundations/typography";
import {space} from "@guardian/src-foundations";

interface NavSection {
  title: string;
  isSelected: boolean;
  link: string;
}

interface HeaderProps {
  navSections: NavSection[];
}

const HeaderStyles = () => (
  <Global
    styles={css`
      header {
        background-color: ${brand[400]};
        padding: 0 57px 0 10px;
        text-align: right;
        position: relative;
      }
      header .top-and-bottom-nav {
        position: fixed;
        top: 0;
        left: -100vw;
        width: 100vw;
        width: calc(100vw - 30px);
        height: 100vh;
        background-color: ${brand[400]};
        transition: left 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        &:after {
          content: "";
          display: block;
          position: absolute;
          top: 22px;
          right: -21px;
          width: 42px;
          height: 42px;
          background-image: url("/images/menu-opened.svg");
        }
      }
      header input:checked ~ .top-and-bottom-nav {
        left: 0;
      }
      header .top-and-bottom-nav:before {
        content: '';
        position: absolute;
        top: 0;
        left: 100%;
        width: 100vw;
        height: 100vh;
        background-color: black;
        overflow-X: hidden;
        opacity: 0;
        transition: opacity 0.4s cubic-bezier(0.23, 1, 0.32, 1);
      }
      header input:checked ~ .top-and-bottom-nav:before {
        opacity: 0.8;
      }
      header .nav-button {
        width: 42px;
        height: 42px;
        position: absolute;
        right: 10px;
        bottom: 5px;
        z-index: 9;
        background-image: url(/images/menu-closed.svg);
      }
      header input:checked ~ .nav-button {
        background-image: url(/images/menu-opened.svg);
      }

      header nav {
        text-align: left;
      }

      header nav a {
        ${headline.xsmall({ fontWeight: "bold" })};
        line-height: 1.5;
        padding-bottom: ${space[5]}px;
        border-bottom: 1px solid ${brand[600]};
        color: white;
        display: block;
        text-decoration: none;
        margin-left: 50px;
      }
      header nav:nth-child(2) a {
        ${textSans.medium({ fontWeight: "bold" })};
      }
    `}
  />
);

const Header = (props: HeaderProps) => (
  <>
    <HeaderStyles />
    <header>
      <div
        css={css`
          &:after {
            content: "";
            display: block;
            width: 42px;
            height: 42px;
            background-image: url("/images/menu-closed.svg");
            position: absolute;
            top: 22px;
            right: 10px;
          }
        `}
      >
        <GLogo />
      </div>
      <input
        type="checkbox"
        css={css`
          opacity: 0;
          width: 42px;
          height: 42px;
          position: absolute;
          right: 10px;
          bottom: 5px;
          z-index: 10;
        `}
      />
      <div className="top-and-bottom-nav">
        <nav>
          {props.navSections.map((navItem, navItemIndex) => (
            <a href={navItem.link} key={`nav-${navItemIndex}`}>
              {navItem.title}
            </a>
          ))}
        </nav>
        <nav>
          <a href="https://theguardian.com">Guardian press office</a>
          <a href="https://theguardian.com">Work for us</a>
          <a href="https://theguardian.com">Contact us</a>
        </nav>
      </div>
    </header>
  </>
);

export default Header;
