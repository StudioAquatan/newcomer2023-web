import { css } from "@emotion/react";
import parse from "html-react-parser";
import { OrganizationFull } from "../../api-client/@types";

export type Image = {
  src: string;
  width: number;
  height: number;
};

export type OrgDetailsProps = {
  org: OrganizationFull;
};

const container = css`
  display: flex;
  flex-direction: column;
`;

const logoContainer = css`
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
`;

const logo = css`
  width: min(50%, 50vh);
`;

const itemTitle = css`
  padding: 0;
  padding-bottom: 1rem;
  margin: 0;
  font-size: 2.4rem;
`;

const itemValue = css`
  & > p {
    padding: 0;
    padding-bottom: 1.5rem;
    margin: 0;
    font-size: 1.6rem;
  }
`;

function Item({ title, value }: { title: string; value: string }) {
  return (
    <div>
      <p css={itemTitle}>{title}</p>
      <div css={itemValue}>{parse(value)}</div>
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

export default function OrgDetails({ org }: OrgDetailsProps) {
  return (
    <div css={container}>
      <div css={logoContainer}>
        <img src={org.logo?.src} alt={org.shortName} css={logo} />
      </div>
      <Item title={org.fullName} value={org.description} />
      <Item
        title="活動場所"
        value={
          "<p>" + org.location ?? org.fullName + "に問い合わせてください</p>"
        }
      />
      <Item
        title="部費/サークル費"
        value={"<p>" + org.fees ?? org.fullName + "に問い合わせてください</p>"}
      />
      <Item
        title="活動日"
        value={
          "<p>" + org.activeDays ?? org.fullName + "に問い合わせてください</p>"
        }
      />
      <ItemLinks links={org.links ?? []} />
    </div>
  );
}
