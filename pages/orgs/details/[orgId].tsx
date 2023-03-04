import { css } from "@emotion/react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import React from "react";
import { OrganizationFull } from "../../../api/@types";
import { apiClient } from "../../../api/apiClient";
import { ResourceBucketItem } from "../../../api/resource-bucket";
import Layout from "../../../components/Layout";
import FullscreenPager from "../../../components/orgs/FullscreenPager";
import ProgressPagination from "../../../components/orgs/ProgressPagination";
import OrgDetailsText from "../../../components/orgs/details/OrgDetailsText";
import OrgPicture, {
  OrgMovieControl,
} from "../../../components/orgs/details/OrgPicture";
import StoryLikeContainer, {
  ContentContainer,
  ContentPager,
  PaddedContainer,
} from "../../../components/orgs/details/StoryLikeContainer";
import {
  useDetailsAutoTimer,
  useDetailsClose,
  useDetailsCurrentIsMovie,
  useDetailsIsEnd,
  useDetailsPageMover,
  useDetailsPager,
  useDetailsPages,
  useDetailsPauseEvent,
} from "../../../store/organizationDetails";

const resourceRoot =
  process.env.NEXT_PUBLIC_RESOURCE_URL ?? "http://localhost:3333";

const progressContainer = css`
  position: fixed;
  top: 0;
  display: flex;
  width: calc(100vw - 1rem * 2);
  margin: 1rem;
`;

const closeButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  padding: 0;
  margin: 0;
  font-size: 3rem;
  color: rgb(0 0 0 / 80%);
  text-align: center;
  cursor: pointer;
  background-color: rgb(255 255 255 / 50%);
  border-radius: 100vw;

  &:hover {
    background-color: rgb(255 255 255 / 80%);
  }
`;

function CloseButton() {
  const handleClose = useDetailsClose();
  return (
    <a css={closeButton} onClick={handleClose}>
      <FontAwesomeIcon icon={faClose} />
    </a>
  );
}

const lastCloseContainer = css`
  position: fixed;
  bottom: 20vh;
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const lastCloseButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  margin: 2.5rem;
  font-size: 2rem;
  color: rgb(0 0 0 / 80%);
  text-align: center;
  cursor: pointer;
  background-color: rgb(255 255 255 / 90%);
  border-radius: 0.5rem;

  &:hover {
    background-color: rgb(255 255 255 / 50%);
  }
`;

function LastCloseButton() {
  const handleClose = useDetailsClose();
  return (
    <div css={lastCloseContainer}>
      <a css={lastCloseButton} onClick={handleClose}>
        閉じる
      </a>
    </div>
  );
}

function Progress({ numPages }: { numPages: number }) {
  const pager = useDetailsPager();

  useDetailsAutoTimer();

  return (
    <div css={progressContainer}>
      <ProgressPagination
        currentPage={pager.currentPage}
        pageProgress={pager.progress}
        numPages={numPages}
      />
      <CloseButton />
    </div>
  );
}

type Props = {
  org: OrganizationFull;
  orgImage: Array<ResourceBucketItem>;
};

const OrgDetail = ({ org, orgImage }: Props) => {
  const { numPages, currentPage } = useDetailsPages(orgImage);
  const isEnd = useDetailsIsEnd();

  const { moveNextPage, movePrevPage, canMoveNext, canMovePrev } =
    useDetailsPageMover();

  const handleLeftClick = () => {
    movePrevPage();
  };

  const handleRightClick = () => {
    moveNextPage();
  };

  const isMovie = useDetailsCurrentIsMovie();

  useDetailsPauseEvent();

  return (
    <>
      <Head>
        <title>{org.fullName}</title>
      </Head>
      <StoryLikeContainer>
        <ContentPager currentPage={currentPage}>
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
          {orgImage.map((image, index) => (
            <ContentContainer key={index}>
              <OrgPicture
                url={`${resourceRoot}/${org.id}/${image.name}`}
                width={image.width}
                height={image.height}
                isMovie={image.isMovie}
                isActive={index + 2 == currentPage}
              ></OrgPicture>
            </ContentContainer>
          ))}
        </ContentPager>
        {canMovePrev && (
          <FullscreenPager type="left" onClick={handleLeftClick} />
        )}
        {canMoveNext && (
          <FullscreenPager type="right" onClick={handleRightClick} />
        )}
        <Progress numPages={numPages} />
        {isMovie && <OrgMovieControl />}
        {isEnd && <LastCloseButton />}
      </StoryLikeContainer>
    </>
  );
};

// 団体詳細ページはfooter無しで表示する
OrgDetail.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default OrgDetail;

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
