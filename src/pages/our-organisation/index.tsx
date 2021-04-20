/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { neutral } from "@guardian/src-foundations";
import React from "react";
import BoxContainer from "../../components/boxContainer";
import FullWidthText from "../../components/fullWidthText";
import Header from "../../components/header";
import InnerText from "../../components/innerText";
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
    <BoxContainer theme="light" background={`${neutral[97]}`} overlapTop={true}>
      <InnerText title="Our structure" theme="light">
        <>
          <p>
            Guardian Media Group (GMG) owns Guardian News &amp; Media (GNM) -
            the publisher of the Guardian and Observer newspapers in the UK,
            theguardian.com and Guardian US and Australia.
          </p>
          <p>
            The Scott Trust, named after our longest serving editor, CP Scott,
            exists to secure the financial and editorial independence of the
            Guardian in perpetuity.
          </p>
        </>
      </InnerText>
    </BoxContainer>
    <BoxContainer theme="light" background={`${neutral[97]}`}>
      <InnerText title="Sustainability" theme="light">
        <>
          <p>
            As an organisation we recognise that the escalating climate crisis
            is the defining issue of our times.
          </p>
          <p>
            In 2019, we became the first major news organisation to certify as a
            B Corporation, and made a climate pledge to our readers committing
            to reach net zero carbon emissions by 2030.
          </p>
        </>
      </InnerText>
    </BoxContainer>
    <BoxContainer theme="light" background={`${neutral[97]}`}>
      <InnerText title="Our people" theme="light">
        <p>
          The majority of our staff, around 90% of our workforce, are employed
          in the UK, and we have growing operations in the US and Australia. We
          value and respect all differences in all people, seen and unseen, and
          aspire to an open, supportive and inclusive culture which makes the
          Guardian a good place to work for everyone.
        </p>
      </InnerText>
    </BoxContainer>
    <BoxContainer theme="light" background={`${neutral[97]}`}>
      <InnerText title="Commercial" theme="light">
        <p>
          GMG operates a diverse revenue model including reader revenues,
          advertising, jobs advertising, licencing and philanthropic funding.
          Revenue from readers now accounts for over 50% of GMG's annual
          revenues.
        </p>
      </InnerText>
    </BoxContainer>
    <BoxContainer theme="light" background={`${neutral[97]}`}>
      <InnerText title="Guardian Foundation" theme="light">
        <p>
          Through the Scott Trust, our independent charity the Guardian
          Foundation supports media under threat, promotes diversity in the
          media and empowers children and young people to engage with the news.
          The charity envisions a world in which all people can tell their
          stories, access the truth and hold power to account.
        </p>
      </InnerText>
    </BoxContainer>
  </>
);

export default HomePage;
