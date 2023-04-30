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
- `NEXT_PUBLIC_IMGIX_DOMAIN` は画像処理用に利用している IMGIX のドメインをセットします。
- `NEXT_PUBLIC_NEWT_ROOT` は NEWT のコンテンツ取得用の URL をセットします。
- `NEXT_PUBLIC_OGP_URL` は OGP 画像生成用の API サーバへの URL をセットします。
- `NEXT_PUBLIC_PUBLIC_DOMAIN` に自サイトのドメイン(`irodori-newcomer2023.pages.dev`)をセットします。
- `NEXT_PUBLIC_RESOURCE_URL` は画像や動画などのコンテンツ取得用に用意している API サーバへの URL をセットします。

```env.local
NEXT_PUBLIC_API_URL=https://newcomer2023-api.studioaquatan.workers.dev
NEXT_PUBLIC_IMGIX_DOMAIN=studioaquatan.imgix.net
NEXT_PUBLIC_NEWT_ROOT=https://storage.googleapis.com/<NEWT_PROJECT_ID>
NEXT_PUBLIC_OGP_URL=https://newcomer2023-ogp.studioaquatan.workers.dev
NEXT_PUBLIC_PUBLIC_DOMAIN=irodori-newcomer2023.pages.dev
NEXT_PUBLIC_RESOURCE_URL=https://newcomer2023-assets.studioaquatan.workers.dev/assets
```
