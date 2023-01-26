import { css } from "@emotion/react";
import {
  faSquareInstagram,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const title = css`
  padding-bottom: 0.5rem;
  margin: 0;
  margin-bottom: 0.8rem;
  font-size: 2rem;
  font-weight: bold;
  border-bottom: 1px solid #000;
`;

const contents = css`
  display: flex;
  column-gap: 1.6rem;
  padding-left: 1.6rem;
`;

const circle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  background-color: #fff;
  border-radius: 50%;
`;

const snsIcon = css`
  width: 60%;
  height: 60%;
`;

export default function OfficialAccounts() {
  return (
    <div>
      <p css={title}>公式アカウント</p>
      <div css={contents}>
        <div css={circle}>
          <FontAwesomeIcon icon={faSquareTwitter} css={snsIcon} />
        </div>
        <div css={circle}>
          <FontAwesomeIcon icon={faSquareInstagram} css={snsIcon} />
        </div>
      </div>
    </div>
  );
}
