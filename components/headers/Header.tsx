import { css, Theme } from "@emotion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

type LinkData = {
  href: string;
  external?: boolean;
};

type HeaderData = {
  label: string;
  targetDevice?: "mobile" | "desktop";
  link?: LinkData;
};

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

const siteNameStyle = (theme: Theme) => css`
  padding: 0;
  margin: 0;
  font-size: 2rem;

  a {
    color: ${theme.colors.normalTextColor};
    text-decoration: none;
  }
`;

const navMenuItemsStyle = (theme: Theme) => css`
  margin: 0 0 0 auto;

  ul {
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
    display: inline;
    margin: 0 0 0 3rem;
    font-size: 1.6rem;
  }

  a {
    color: ${theme.colors.normalTextColor};
    text-decoration: none;
  }

  p {
    padding: 0;
    margin: 0;
  }
`;

export type HeaderProps = {
  isMobile: boolean;
};

export default function Header({ isMobile }: HeaderProps) {
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

  const SiteName = () => {
    return (
      <h1 css={siteNameStyle}>
        <Link href="/">京都工芸繊維大学 新歓サイト</Link>
      </h1>
    );
  };

  const LinkItem = ({ label, targetDevice, link }: HeaderData) => {
    if (targetDevice === "mobile" && !isMobile) {
      return null;
    }
    if (targetDevice === "desktop" && isMobile) {
      return null;
    }

    return (
      <li key={label}>
        {link ? (
          link.external ? (
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          ) : (
            <Link href={link.href}>{label}</Link>
          )
        ) : (
          // リンク先がない場合は、pタグでラベルを表示する
          <p>{label}</p>
        )}
      </li>
    );
  };

  const MenuButtons = () => {
    return (
      <nav css={navMenuItemsStyle}>
        <ul>
          {headersData.map((data, index) => {
            return <LinkItem key={index} {...data} />;
          })}
        </ul>
      </nav>
    );
  };

  const displayDesktop = () => {
    return (
      <div css={container}>
        <SiteName />
        <MenuButtons />
      </div>
    );
  };

  const displayMobile = () => {
    return (
      <>
        <SiteName />
        <MenuButtons />
      </>
    );
  };

  return <header>{mobileView ? displayMobile() : displayDesktop()}</header>;
}
