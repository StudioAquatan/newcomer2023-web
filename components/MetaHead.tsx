import Head from "next/head";

const domain = process.env.NEXT_PUBLIC_PUBLIC_DOMAIN ?? "localhost:3000";
const defaultSiteTitle = "京都工芸繊維大学 新歓サイト";
type Props = {
  title?: string;
  description: string;
  largeImage?: string | null;
  smallImage?: string | null;
  overrideSiteTitle?: string;
};

function toAbsolute(url: string) {
  return url.replace(/^\/\//, "https://").replace(/^\//, `https://${domain}/`);
}

export default function MetaHead({
  title,
  description,
  largeImage,
  smallImage,
  overrideSiteTitle,
}: Props) {
  return (
    <Head>
      <meta property="og:type" content="website" />
      <meta
        name="twitter:card"
        content={largeImage ? "summary_large_image" : "summary"}
      />
      <meta name="twitter:site" content="@StudioAquatan" />
      <meta name="twitter:creator" content="@StudioAquatan" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={title ?? defaultSiteTitle} />
      <meta
        property="note:card"
        content={largeImage ? "summary_large_image" : "summary"}
      />
      {/* <meta name='theme-color' content='#85005d' /> */}
      <meta
        name="author"
        content="京都工芸繊維大学新歓委員会 with irodori × あくあたん工房"
      />
      <meta name="description" content={description} />
      <meta property="og:site_name" content="部活動相性診断 × スタンプラリー" />
      <meta property="og:locale" content="ja" />
      <meta property="og:title" content={title ?? defaultSiteTitle} />
      <meta property="og:description" content={description} />
      {(largeImage ?? smallImage) && (
        <>
          <meta
            property="og:image"
            content={toAbsolute(largeImage ?? smallImage ?? "")}
          />
          <meta
            name="twitter:image"
            content={toAbsolute(largeImage ?? smallImage ?? "")}
          />
        </>
      )}
      <title>
        {title && `${title} - `}
        {overrideSiteTitle ? overrideSiteTitle : defaultSiteTitle}
      </title>
    </Head>
  );
}
