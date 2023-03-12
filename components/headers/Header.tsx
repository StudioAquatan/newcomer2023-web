import { css, Theme } from "@emotion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HeaderData, MenuButtons } from "./Navigation";

const headersData: HeaderData[] = [
  {
    label: "新歓について",
    link: {
      href: "",
      external: true,
    },
  },
  {
    label: "団体一覧",
    link: {
      href: "/orgs",
    },
  },
  {
    label: "スタンプカード",
    targetDevice: "mobile",
    link: {
      href: "/stampcard",
    },
  },
  {
    label: "診断を始める",
    targetDevice: "mobile",
    link: {
      href: "/diagnose",
    },
  },
  // {
  //   label: "スマホからアクセスして診断を始めてみよう！",
  //   targetDevice: "desktop",
  // },
];

const container = (theme: Theme) => css`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  color: ${theme.colors.normalTextColor};
  background-color: transparent;
`;

const SiteName = () => {
  const siteNameStyle = (theme: Theme) => css`
    padding: 0;
    margin: 0;
    font-size: 2rem;

    a {
      color: ${theme.colors.normalTextColor};
      text-decoration: none;
    }
  `;

  return (
    <h1 css={siteNameStyle}>
      <Link href="/">京都工芸繊維大学 新歓サイト</Link>
    </h1>
  );
};

export default function Header() {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  // TODO: drawerOpen を使う
  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 800
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <div css={container}>
        <SiteName />
        <MenuButtons headersData={headersData} />
      </div>
    );
  };

  const displayMobile = () => {
    return (
      <>
        <SiteName />
        <MenuButtons headersData={headersData} />
      </>
    );
  };

  return <header>{mobileView ? displayMobile() : displayDesktop()}</header>;
}
