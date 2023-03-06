import { ImageLoaderProps } from "next/image";
export default function imgixLoader({ src, width, quality }: ImageLoaderProps) {
  const newtPrefix = process.env.NEXT_PUBLIC_NEWT_ROOT ?? "newt/";
  const assetsPrefix = process.env.NEXT_PUBLIC_RESOURCE_URL ?? "assets/";
  if (src.startsWith(newtPrefix)) {
    src = src.replace(newtPrefix, "newt/");
  } else if (src.startsWith(assetsPrefix)) {
    src = src.replace(assetsPrefix, "assets");
  } else {
    return src;
  }
  return `https://${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/${src}?auto=format&fit=max&w=${width}&width=${width}&q=${quality}`;
}
