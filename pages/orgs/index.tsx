import { css } from "@emotion/react";
import { OrganizationFull } from "../../api/@types";
import { apiClient } from "../../api/apiClient";

type OrgListPageProps = {
  organizations: OrganizationFull[];
};

const headerStyle = (width: number) => css`
  width: ${width}%;
`;

const tableStyle = css`
  width: 100%;
  font-size: 1.8rem;
  border-collapse: collapse;
  border: 1px solid #ddd;

  & th,
  & td {
    padding: 12px;
    text-align: left;
  }

  & tr {
    border-bottom: 1px solid #ddd;
  }

  & tr.header,
  & tr:hover {
    background-color: #f1f1f1;
  }
`;

const logoStyle = css`
  max-width: 5rem;
  max-height: 5rem;
`;

export default function OrgListPage({ organizations }: OrgListPageProps) {
  return (
    <div>
      <input type="text" placeholder="団体名を入力してください" />
      <table css={tableStyle}>
        <tr>
          <th css={headerStyle(20)}>団体ロゴ</th>
          <th css={headerStyle(30)}>団体名</th>
          <th css={headerStyle(50)}>団体紹介</th>
        </tr>
        {organizations.map((org, index) => {
          return (
            <tr key={index}>
              <td>
                <img
                  src={org.logo?.src ?? "/org_icons/default.png"}
                  alt="org logo"
                  css={logoStyle}
                />
              </td>
              <td>{org.fullName}</td>
              <td>{org.shortDescription}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export async function getStaticProps() {
  // 全団体詳細ページの初期データを取得
  // 全団体のデータを返すAPIしかないので、団体数回、全団体のデータを取得するAPIリクエストが発生してしまう
  const orgs = await apiClient.orgs
    .$get()
    .then((res) => {
      return res;
    })
    .catch((error) => {
      throw Error(error);
    });

  return {
    props: {
      organizations: orgs,
    },
  };
}
