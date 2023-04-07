import { OrganizationFull, Recommendation } from "../../api-client/@types";
import StampCard, { StampCardProps } from "../stampcard/Card";
import { StampProps } from "../stampcard/Stamp";
import Feature from "./Feature";

type FeatureStampRallyProps = {
  title: string;
  description: string | React.ReactNode;
  inverse?: boolean;
  recommendation: Recommendation;
  orgs: OrganizationFull[];
};

const fallbackOrg: OrganizationFull = {
  id: "fallback",
  fullName: "",
  shortName: "",
  shortDescription: "",
  description: "",
};

export default function FeatureStampRally({
  title,
  description,
  inverse = false,
  recommendation,
  orgs,
}: FeatureStampRallyProps) {
  const seed = 0;
  const orgsMap = new Map(orgs.map((org) => [org.id, org]));

  const stamps: StampProps[] = recommendation.orgs.map(
    (recommendationItem, index) => {
      return {
        recommendation: recommendationItem,
        orgInfo: orgsMap.get(recommendationItem.org.id) ?? fallbackOrg,
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
