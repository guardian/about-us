/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import FullWidthText from "../../components/fullWidthText";
import Header from "../../components/header";
import { PageStyles } from "../../components/pageStyles";

const HomePage = () => (
  <>
    <PageStyles />
    <Header
      navSections={[
        {
          title: "About us",
          isSelected: false,
          link: "/",
        },
        {
          title: "Our organisation",
          isSelected: true,
          link: "/our-organisation",
        },
        {
          title: "Our history",
          isSelected: false,
          link: "/our-history",
        },
        {
          title: "Journalism",
          isSelected: false,
          link: "/journalism",
        },
      ]}
    />
    <FullWidthText theme="dark" title="Our organisation">
      <>
        <p>
          Guardian Media Group has only one shareholder - The Scott Trust. The
          Trust forms part of a unique ownership structure for the Guardian that
          ensures editorial interests remain free of commercial pressures.
        </p>
        <p>
          Today more than half of our revenue comes directly from our readers,
          helping to support Guardian journalism and keep it open for everyone.
        </p>
      </>
    </FullWidthText>
  </>
);

export default HomePage;
