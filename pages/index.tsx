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
};

export default function Home() {
  return <ClubShowcase {...cards} />;
}
