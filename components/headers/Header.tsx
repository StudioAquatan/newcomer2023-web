import { css, Theme } from "@emotion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useIntersection } from "use-intersection";
import { useRecommendation } from "../../hooks/recommendation";
import Hamburger from "../buttons/Hamburger";
import { ColumnMenuButtons, HeaderData, MenuButtons } from "./Navigation";

const getHeaderData = (hasStampCard: boolean) => {
  const commons: HeaderData[] = [
    {
      label: "トップページ",
      link: {
        href: "/",
      },
    },
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
    // {
    //   label: "スマホからアクセスして診断を始めてみよう！",
    //   targetDevice: "desktop",
    // },
  ];

  if (hasStampCard) {
    commons.push({
      label: "スタンプカード",
      targetDevice: "mobile",
      link: {
        href: "/stampcard",
      },
    });
  } else {
    commons.push({
      label: "診断を始める",
      targetDevice: "mobile",
      link: {
        href: "/diagnose",
      },
    });
  }

  return commons;
};

const targetIntersectionPosition = css`
  position: absolute;
  top: 0;
`;

const headerStyle = (isScroll: boolean) => {
  // console.log(isScroll);
  const scroll = css`
    background-color: #f7fff5;
    box-shadow: 0 5px 5px rgb(0 0 0 / 10%);
  `;
  return css`
    /* スクロールに追従したい場合は fixed にする */
    position: fixed;

    /* 追従しない場合は absolute にする */

    /* position: absolute; */
    top: 0;
    right: 0;
    left: 0;
    z-index: 3;
    background-color: transparent;
    transition: all 0.5s ease-out;
    ${isScroll ? scroll : ""}
  `;
};

const desktopContainer = (theme: Theme) => css`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  color: ${theme.colors.normalTextColor};
  background-color: transparent;

  /* スマホで見た時に、表示が崩れているのをこれで隠す */
  @media screen and (max-width: 799px) {
    display: none;
  }
`;

const mobileContainer = (theme: Theme) => css`
  display: flex;
  align-items: center;
  padding: 1rem;
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
      word-break: keep-all;
      overflow-wrap: anywhere;
    }
  `;

  return (
    <h1 css={siteNameStyle}>
      <Link href="/">
        京都工芸繊維大学
        <wbr /> 新歓サイト
      </Link>
    </h1>
  );
};

const Mask = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  const opened = css`
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100vh;
    visibility: visible;
    background-color: rgb(0 0 0 / 50%);
  `;

  const container = css`
    visibility: hidden;
    transition: all 0.5s ease-out;
    ${isOpen ? opened : ""}
  `;

  return <div css={container} onClick={onClick} />;
};

const drawerBase = (isOpen: boolean) => {
  return css`
    position: fixed;
    top: 0;
    left: ${isOpen ? "0" : "-100%"};
    width: 70%;
    height: 100vh;
    overflow-x: hidden;

    /* background-color: rgb(0 0 0 / 50%); */
    background-color: transparent;
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 300px) {
      width: 100%;
    }
  `;
};

const Drawer = ({
  isOpen,
  onClick,
  children,
}: {
  isOpen: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}) => {
  return (
    <div css={[drawerBase(isOpen)]} onClick={onClick}>
      {children}
    </div>
  );
};

const DrawerContent = ({
  headersData,
  isMobile,
  onClick,
}: {
  headersData: HeaderData[];
  isMobile: boolean;
  onClick?: () => void;
}) => {
  const container = css`
    height: 100%;
    padding: 0 1rem;
    background-color: white;
  `;

  const contents = css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 1rem;
  `;

  const siteNamePadding = css`
    margin: 0 3rem;
  `;

  return (
    <div css={container}>
      <div css={contents}>
        <div>
          <Hamburger isOpen={true} onClick={onClick} />
        </div>
        <div css={siteNamePadding}>
          <SiteName />
        </div>
        <ColumnMenuButtons headersData={headersData} isMobile={isMobile} />
      </div>
    </div>
  );
};

export default function Header({ isMobile }: { isMobile: boolean }) {
  const { data: recommendation } = useRecommendation();
  const targetIntersecting = useRef<HTMLDivElement>(null);
  const intersecting = useIntersection(targetIntersecting);

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const { mobileView, drawerOpen } = state;

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
      <div css={desktopContainer}>
        <SiteName />
        <MenuButtons
          headersData={getHeaderData(typeof recommendation === "object")}
          isMobile={isMobile}
        />
      </div>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    return (
      <div css={mobileContainer}>
        <Hamburger onClick={handleDrawerOpen} />
        <Mask isOpen={drawerOpen} onClick={handleDrawerClose} />
        <Drawer isOpen={drawerOpen}>
          <DrawerContent
            headersData={getHeaderData(typeof recommendation === "object")}
            isMobile={isMobile}
            onClick={handleDrawerClose}
          />
        </Drawer>
      </div>
    );
  };

  return (
    <>
      <div css={targetIntersectionPosition} ref={targetIntersecting} />
      <header
        // 初回マウント時はDOMへのRefがnullのためアニメーションが入ってしまうのを防ぐ
        css={headerStyle(targetIntersecting.current ? !intersecting : false)}
      >
        {mobileView ? displayMobile() : displayDesktop()}
      </header>
    </>
  );
}
