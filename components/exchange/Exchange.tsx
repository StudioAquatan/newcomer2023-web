import { css } from "@emotion/react";
import React from "react";

const exchangeTitle = css`
  margin-top: 1em;
  margin-bottom: 0.5em;
  font-size: 3.6rem;
  font-weight: bold;
  text-align: center;
`;

const exchangeSection = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const exchangeDescription = css`
  padding: 0;
  margin: 0;
  margin-bottom: 1rem;
  font-family: GenShinGothic-P, sans-serif;
  font-size: 2.4rem;
  text-align: center;
  word-break: keep-all;
  overflow-wrap: anywhere;
`;

function ExchangeTitle({ children, ...props }: React.PropsWithChildren) {
  return (
    <h2 css={exchangeTitle} {...props}>
      {children}
    </h2>
  );
}

function ExchangeSection({ children, ...props }: React.PropsWithChildren) {
  return (
    <div css={exchangeSection} {...props}>
      {children}
    </div>
  );
}

function ExchangeDescription({ children, ...props }: React.PropsWithChildren) {
  return (
    <p css={exchangeDescription} {...props}>
      {children}
    </p>
  );
}

export { ExchangeTitle, ExchangeSection, ExchangeDescription };
