interface FooterLink {
  title: string;
  titleUSA?: string;
  link?: string;
  privacyCmp?: boolean;
}

const domain = "theguardian.com";

export const footerLinks: FooterLink[][] = [
  [
    {
      title: "About us",
      link: `https://${domain}/about`,
    },
    {
      title: "Contact us",
      link: `https://${domain}/help/contact-us`,
    },
    {
      title: "Complaints & corrections",
      link: `https://${domain}/info/complaints-and-corrections`,
    },
    {
      title: "Secure Drop",
      link: `https://${domain}/securedrop`,
    },
    {
      title: "Work for us",
      link: `https://workforus.${domain}`,
    },
    {
      title: "Privacy settings",
      titleUSA: "California resident – Do Not Sell",
      privacyCmp: true,
    },
    {
      title: "Privacy policy",
      link: `https://${domain}/info/privacy`,
    },
    {
      title: "Cookie policy",
      link: `https://${domain}/info/cookies`,
    },
    {
      title: "Terms & conditions",
      link: `https://www.${domain}/help/terms-of-service`,
    },
    {
      title: "Help",
      link: `https://www.${domain}/help`,
    },
  ],
  [
    {
      title: "All topics",
      link: `https://${domain}/index/subjects/a`,
    },
    {
      title: "All writers",
      link: `https://${domain}/index/contributors`,
    },
    {
      title: "Modern Slavery Act",
      link: `https://uploads.guim.co.uk/2022/07/20/STL_Modern_Slavery_Statement_2022.pdf`,
    },
    {
      title: "Digital newspaper archive",
      link: `https://theguardian.newspapers.com/`,
    },
    {
      title: "Facebook",
      link: `https://www.facebook.com/theguardian`,
    },
    {
      title: "YouTube",
      link: `https://www.youtube.com/user/TheGuardian`,
    },
    {
      title: "Instagram",
      link: `https://www.instagram.com/guardian`,
    },
    {
      title: "LinkedIn",
      link: `https://www.linkedin.com/company/theguardian`,
    },
    {
      title: "Twitter",
      link: `https://twitter.com/guardian`,
    },
    {
      title: "Newsletters",
      link: `https://www.theguardian.com/email-newsletters?INTCMP=DOTCOM_FOOTER_NEWSLETTER_UK`,
    },
  ],
  [
    {
      title: "Advertise with us",
      link: `https://advertising.${domain}`,
    },
    {
      title: "Guardian Labs",
      link: `https://${domain}/guardian-labs`,
    },
    {
      title: "Search jobs",
      link: `https://jobs.${domain}/?INTCMP=NGW_FOOTER_UK_GU_JOBS`,
    },
    {
      title: "Patrons",
      link: `https://patrons.${domain}/?INTCMP=footer_patrons`,
    },
  ],
];
