import ClubShowcase, {
  ClubShowcaseProps,
} from "../components/clubs/ClubShowcase";

const cards: ClubShowcaseProps = {
  cards: [
    {
      clubName: "StudioAquatan",
      description: "Make Aquatan Great Again",
    },
    {
      clubName: "StudioAquatan",
      description: "Make Aquatan Great Again",
    },
    {
      clubName: "StudioAquatan",
      description: "Make Aquatan Great Again",
    },
    {
      clubName: "StudioAquatan",
      description: "Make Aquatan Great Again",
    },
    {
      clubName: "StudioAquatan",
      description: "Make Aquatan Great Again",
    },
    {
      clubName: "StudioAquatan",
      description: "Make Aquatan Great Again",
    },
    {
      clubName: "StudioAquatan",
      description: "Make Aquatan Great Again",
    },
    {
      clubName: "StudioAquatan",
      description: "Make Aquatan Great Again",
    },
    {
      clubName: "StudioAquatan",
      description: "Make Aquatan Great Again",
    },
  ],
  inverse: false,
};

export default function Home() {
  return <ClubShowcase {...cards} />;
}
