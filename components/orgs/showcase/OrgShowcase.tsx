import { css } from "@emotion/react";
import { OrganizationFull } from "../../../api-client/@types";
import OrgRow from "./OrgRow";

export type OrgShowcaseProps = {
  orgs: OrganizationFull[];
};

const base = css`
  display: grid;
  margin: 1.6rem 0;
`;

export default function OrgShowcase({ orgs }: OrgShowcaseProps) {
  const maxOrgCount = 30 > orgs.length ? orgs.length : 30;
  const slicedOrgs = orgs.slice(0, maxOrgCount);
  const orgsPerRow = Math.ceil(slicedOrgs.length / 3);
  const rows = [
    { cards: slicedOrgs.slice(0, orgsPerRow), inverse: false },
    { cards: slicedOrgs.slice(orgsPerRow, orgsPerRow * 2), inverse: true },
    {
      cards: slicedOrgs.slice(orgsPerRow * 2, orgsPerRow * 3),
      inverse: false,
    },
  ];
  return (
    <div css={base}>
      {rows.map((row, index) => {
        return <OrgRow key={index} {...row} />;
      })}
    </div>
  );
}
