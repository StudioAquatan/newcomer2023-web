# newcomer2023-web

新歓 2023 企画のフロントエンド

バックエンド実装：https://github.com/StudioAquatan/newcomer2023-api

## Requirements

開発環境には以下のものを利用しています。

- Node.js 16.17.1
- Yarn
- Typescript
- Next.js
- Emotion
- Storybook

## API 定義

https://head.aquatan-newcomer2023-apidocs.pages.dev/#/

## npm scripts

開発にあたり利用するスクリプトを用意しています。

| command   | description                                  |
| --------- | -------------------------------------------- |
| dev       | 開発モードでアプリケーションを起動           |
| build     | アプリケーションのビルド                     |
| start     | プロダクションモードでアプリケーションを起動 |
| lint      | eslint の実行                                |
| stylelint | stylelint の実行                             |
| fix       | eslint、stylelint、フォーマットの修正        |
| format    | フォーマットの修正                           |
| storybook | storybook の起動                             |

## 環境変数

`env.local` に環境変数をセットします。

- `NEXT_PUBLIC_API_URL` は API サーバへの URL をセットします。
- `NEXT_PUBLIC_PUBLIC_DOMAIN`に自サイトのドメイン(`irodori-newcomer2023.pages.dev`)をセットします。
- MSW を使って API のモックを有効にする場合は `NEXT_PUBLIC_API_MOCKING` に `enabled` をセットします。それ以外の値の場合はモックは無効になります。

```env.local
NEXT_PUBLIC_API_URL=https://api-server-host
NEXT_PUBLIC_PUBLIC_DOMAIN=irodori-newcomer2023.pages.dev
NEXT_PUBLIC_API_MOCKING=enabled
```
