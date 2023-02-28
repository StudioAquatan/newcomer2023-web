import { Recommendation } from "../../api/@types";
import { StampProps } from "../stampcard/Stamp";
import StampCard, { StampCardProps } from "../stampcard/StampCard";
import Feature from "./Feature";

type FeatureStampCardProps = {
  title: string;
  description: string;
  inverse?: boolean;
  recommendation: Recommendation;
};

export default function FeatureStampCard({
  title,
  description,
  inverse = false,
  recommendation,
}: FeatureStampCardProps) {
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
