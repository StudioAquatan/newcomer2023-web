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

const circleButton = (color: string) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  background-color: #fff;
  border: none;
  border-radius: 50%;
  box-shadow: 0 1rem 1rem rgb(0 0 0 / 10%);
  transition: 0.5s;

  &:hover {
    background-color: ${color};
  }

  &:active {
    box-shadow: 0 0.3rem 0.3rem rgb(0 0 0 / 30%);
    transition: 100ms;
    transform: translate(0.3rem, 0.3rem);
  }
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
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button css={circleButton("#8CD4FF")}>
            <FontAwesomeIcon icon={faSquareTwitter} css={snsIcon} />
          </button>
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button css={circleButton("#E28598")}>
            <FontAwesomeIcon icon={faSquareInstagram} css={snsIcon} />
          </button>
        </a>
      </div>
    </div>
  );
}