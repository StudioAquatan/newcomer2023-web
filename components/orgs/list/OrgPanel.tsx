import { css } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import { OrganizationFull } from "../../../api-client/@types";
import imgixLoader from "../../../image-loader";

const linkStyle = css`
  color: inherit;
  text-decoration: inherit;

  &:hover {
    color: #1174ff;
  }
`;

const orgPanelStyle = css`
  width: 100%;
`;

const orgNameStyle = (name: string) => css`
  width: 100%;
  height: 40px;
  font-size: ${name.length > 17 ? 1.6 : 1.9}rem;
  font-weight: 500;
  line-height: 40px;
`;

const descriptionContainerStyle = css`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  width: 100%;
  height: 100px;
`;

const logoContainerStyle = css`
  position: relative;
  width: 100px;
  height: 100px;
`;

const logoVisitedStyle = css`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.1rem 0;
  font-size: 1.5rem;
  color: #fff;
  text-align: center;
  background-color: rgb(0 0 0 / 40%);
  border-radius: 0 0 10px 10px;
`;

const logoImageStyle = (logoFocus: boolean) => css`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 10px;
  object-fit: ${logoFocus ? "cover" : "contain"};
`;

const descriptionStyle = css`
  flex: 1;
  font-size: 2em;
`;

export default function OrgPanel({
  org: { id, fullName, shortDescription, logo, logoFocus },
  isVisited,
}: {
  org: OrganizationFull;
  isVisited: boolean;
}) {
  return (
    <div css={orgPanelStyle}>
      <Link
        css={linkStyle}
        as={`/orgs/details/${id}`}
        href="/orgs/details/[orgId]"
      >
        <div css={orgNameStyle(fullName)}>{fullName}</div>
        <div css={descriptionContainerStyle}>
          <div css={logoContainerStyle}>
            <Image
              css={logoImageStyle(logoFocus ?? false)}
              src={logo?.src ?? "/org_icons/default.png"}
              alt={fullName}
              width={100}
              height={100}
              loader={imgixLoader}
            />
            {isVisited && <span css={logoVisitedStyle}>訪問済</span>}
          </div>
          <div css={descriptionStyle}>{shortDescription}</div>
        </div>
      </Link>
    </div>
  );
}
