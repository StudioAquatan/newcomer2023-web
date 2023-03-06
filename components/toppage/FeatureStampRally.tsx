import { Recommendation } from "../../api-client/@types";
import { StampProps } from "../stampcard/Stamp";
import StampCard, { StampCardProps } from "../stampcard/StampCard";
import Feature from "./Feature";

type FeatureStampRallyProps = {
  title: string;
  description: string;
  inverse?: boolean;
  recommendation: Recommendation;
};

export default function FeatureStampRally({
  title,
  description,
  inverse = false,
  recommendation,
}: FeatureStampRallyProps) {
  const seed = 0;

  const stamps: StampProps[] = recommendation.orgs.map(
    (recommendationItem, index) => {
      return {
        recommendation: recommendationItem,
        seed: seed + index,
      };
    }
  );

  const stampCardProps: StampCardProps = {
    stamps: stamps,
    size: { maxWidth: "48rem", maxHeight: "80vw" },
  };

  const featureContentNode = <StampCard {...stampCardProps} />;

  const featureProps = {
    title: title,
    description: description,
    featureContentNode: featureContentNode,
    inverse: inverse,
  };

  return <Feature {...featureProps} />;
}
