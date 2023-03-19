import { css } from "@emotion/react";

const container = css`
  font-size: 1.8rem;

  input {
    display: none;

    + label {
      position: relative;
      display: inline;
      padding-left: 1.5em;
      cursor: pointer;
      user-select: none;

      &::before {
        position: absolute;
        top: calc(50% - (0.15em * 2 + 1em) / 2);
        left: 0;
        width: 1em;
        height: 1em;
        content: "";
        border: 0.15em solid #aaa;
        transition: border 0.1s ease-in-out;
      }

      &::after {
        position: absolute;
        top: calc(50% - (0.15em * 2 + 1em) / 2 + 0.2em);
        left: 0.45em;
        width: 0.3em;
        height: 0.6em;
        content: "";
        border-right: 0.15em solid #ff8dbd;
        border-bottom: 0.15em solid #ff8dbd;
        opacity: 0;
        transition: opacity 0.1s ease-in-out;
        transform: rotate(45deg);
      }
    }

    &:disabled {
      + label::before {
        background-color: #eee;
        border-color: #aaa;
      }

      &:checked + label::after {
        border-color: #aaa;
        opacity: 1;
      }
    }

    &:not(:disabled) {
      + label:hover::before {
        border-color: #ffc8df;
      }

      &:checked + label {
        &::before {
          border-color: #ff8dbd;
        }

        &::after {
          opacity: 1;
        }
      }
    }
  }
`;

type Props = {
  id: string;
  label: React.ReactNode;
  labelProps?: React.HTMLProps<HTMLLabelElement>;
  containerProps?: React.HTMLProps<HTMLDivElement>;
  disabled?: boolean;
} & Omit<React.HTMLProps<HTMLInputElement>, "type" | "id" | "label">;
export default function Checkbox({
  id,
  label,
  containerProps,
  labelProps,
  ...props
}: Props) {
  return (
    <div css={container} {...containerProps}>
      <input type="checkbox" id={id} {...props} />
      <label htmlFor={id} {...labelProps}>
        {label}
      </label>
    </div>
  );
}
