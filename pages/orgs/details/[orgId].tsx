import Head from "next/head";
import React from "react";
import { OrganizationFull } from "../../../api/@types";
import { apiClient } from "../../../api/apiClient";
import FullscreenPager from "../../../components/orgs/FullscreenPager";
import ProgressPagination from "../../../components/orgs/ProgressPagination";
import OrgDetailsText from "../../../components/orgs/details/OrgDetailsText";
import OrgPicture from "../../../components/orgs/details/OrgPicture";
import StoryLikeContainer, {
  ContentContainer,
  ContentPager,
  PaddedContainer,
  ProgressContainer,
} from "../../../components/orgs/details/StoryLikeContainer";

const resourceRoot =
  process.env.NEXT_PUBLIC_RESOURCE_URL ?? "http://localhost:3333";

type Props = {
  org: OrganizationFull;
  orgImage: Array<{
    isMovie: boolean;
    name: string;
    width: number;
    height: number;
  }>;
};
export default function OrgDetail({ org, orgImage }: Props) {
  const totalPages = orgImage.length + 2;
  const [pageId, setPageId] = React.useState(0);

  const handleLeftClick = () => {
    setPageId((page) => page - 1);
  };

  const handleRightClick = () => {
    setPageId((page) => page + 1);
  };

  return (
    <>
      <Head>
        <title>{org.fullName}</title>
      </Head>
      <StoryLikeContainer>
        <ProgressContainer>
          <ProgressPagination
            currentPage={pageId}
            pageProgress={0.5}
            numPages={totalPages}
          />
        </ProgressContainer>
        <ContentPager currentPage={pageId}>
          <ContentContainer>
            <PaddedContainer>
              <OrgDetailsText org={org} type="summary" />
            </PaddedContainer>
          </ContentContainer>
          <ContentContainer>
            <PaddedContainer>
              <OrgDetailsText org={org} type="misc" />
            </PaddedContainer>
          </ContentContainer>
          {orgImage.map((image, key) => (
            <ContentContainer key={key}>
              <OrgPicture
                url={`${resourceRoot}/${org.id}/${image.name}`}
                width={image.width}
                height={image.height}
                isMovie={image.isMovie}
              />
            </ContentContainer>
          ))}
        </ContentPager>
        {pageId > 0 && (
          <FullscreenPager type="left" showIcon onClick={handleLeftClick} />
        )}
        {pageId + 1 <= totalPages - 1 && (
          <FullscreenPager type="right" showIcon onClick={handleRightClick} />
        )}
      </StoryLikeContainer>
    </>
  );
}

// 各団体詳細ページの初期データを生成しておく
export async function getStaticPaths() {
  const orgs = await apiClient.orgs
    .$get()
    .then((res) => {
      return res;
    })
    .catch((error) => {
      throw Error(error);
    });

  const paths = orgs.map((org) => `/orgs/details/${org.id}`);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { orgId: string };
}) {
  const { orgId } = params;

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

  const orgMap = new Map(orgs.map((org) => [org.id, org]));
  const org = orgMap.get(orgId);

  if (org === undefined) {
    throw Error("団体が見つかりませんでした");
  }

  const imagesRes = await fetch(`${resourceRoot}/manifest.json`);
  const images = await imagesRes.json();

  return {
    props: {
      org,
      orgImage: images[orgId] ?? [],
    },
  };
}
