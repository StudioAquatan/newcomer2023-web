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

const orgNameStyle = css`
  width: 100%;
  margin-bottom: 0.5em;
  font-size: 2rem;
  font-weight: 500;
`;

const descriptionContainerStyle = css`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  width: 100%;
  height: 100px;
`;

const logoStyle = (logoFocus: boolean) => css`
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
}: {
  org: OrganizationFull;
}) {
  return (
    <div css={orgPanelStyle}>
      <Link
        css={linkStyle}
        as={`/orgs/details/${id}`}
        href="/orgs/details/[orgId]"
      >
        <div css={orgNameStyle}>{fullName}</div>
        <div css={descriptionContainerStyle}>
          <Image
            css={logoStyle(logoFocus ?? false)}
            src={logo?.src ?? "/org_icons/default.png"}
            alt={fullName}
            width={100}
            height={100}
            loader={imgixLoader}
          />
          <div css={descriptionStyle}>{shortDescription}</div>
        </div>
      </Link>
    </div>
  );
}
