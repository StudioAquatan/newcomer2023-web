import { css } from "@emotion/react";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type HamburgerProps = {
  onClick?: () => void;
  isOpen?: boolean;
};

const hamburgerButtonStyle = () => css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

const hamburgerIconStyle = () => css`
  width: 4rem;
  height: 4rem;

  &:active {
    transform: scale(0.95);
  }
`;

export default function Hamburger({ onClick, isOpen }: HamburgerProps) {
  return (
    <button css={hamburgerButtonStyle} onClick={onClick}>
      {isOpen ? (
        <FontAwesomeIcon icon={faXmark} css={hamburgerIconStyle} />
      ) : (
        <FontAwesomeIcon icon={faBars} css={hamburgerIconStyle} />
      )}
    </button>
  );
}
