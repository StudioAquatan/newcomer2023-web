import { css } from "@emotion/react";
import Image from "next/image";
import { OrganizationFull } from "../../../api/@types";

export type Image = {
  src: string;
  width: number;
  height: number;
};

export type OrgDetailsProps = {
  org: OrganizationFull;
  type: "summary" | "misc";
};

const outer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100% - 30px);
  padding: 30px 0;
`;

const container = css`
  width: min(600px, 90vw);
`;

const logoContainer = css`
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 1rem 0;
`;

const logo = css`
  width: 8vh;
  height: 8vh;
  border-radius: 100%;
  box-shadow: 2px 2px 10px rgb(255 255 255 / 50%);
`;

const orgName = css`
  margin-left: 1rem;
  font-size: 2.5rem;
  font-weight: 500;
`;

const orgDescription = css`
  font-size: 1.8rem;
`;

const itemTitle = css`
  padding: 0;
  padding-bottom: 1rem;
  margin: 0;
  font-size: 2rem;
`;

const itemValue = css`
  padding: 0;
  padding-bottom: 1.5rem;
  margin: 0;
  font-size: 1.6rem;
`;

function Item({ title, value }: { title: string; value: string }) {
  return (
    <div>
      <p css={itemTitle}>{title}</p>
      <div css={itemValue} dangerouslySetInnerHTML={{ __html: value }}></div>
    </div>
  );
}

const linkListStyle = css`
  padding: 0;
  margin: 0;
  font-size: 1.6rem;
  list-style: none;
`;

const linkStyle = css`
  margin-bottom: 1rem;
`;

function ItemLinks({ links }: { links: Array<string> }) {
  return (
    <div>
      <p css={itemTitle}>リンク</p>
      <ul css={linkListStyle}>
        {links.map((link, index) => (
          <li key={index} css={linkStyle}>
            <a href={link}>{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function OrgDetailsText({ org, type }: OrgDetailsProps) {
  return (
    <div css={outer}>
      <div css={container}>
        <div css={logoContainer}>
          {org.logo && (
            <Image
              src={org.logo.src}
              alt={org.shortName}
              css={logo}
              width={256}
              height={256}
            />
          )}
          <span css={orgName}>{org.fullName}</span>
        </div>

        {type === "summary" && (
          <>
            <div
              css={orgDescription}
              dangerouslySetInnerHTML={{ __html: org.description }}
            />
            <Item
              title="活動場所"
              value={org.location ?? org.fullName + "に問い合わせてください"}
            />
          </>
        )}

        {type === "misc" && (
          <>
            <Item
              title="活動日"
              value={org.activeDays ?? org.fullName + "に問い合わせてください"}
            />
            <Item
              title="部費/サークル費"
              value={org.fees ?? org.fullName + "に問い合わせてください"}
            />
            <ItemLinks links={org.links ?? []} />
          </>
        )}
      </div>
    </div>
  );
}
