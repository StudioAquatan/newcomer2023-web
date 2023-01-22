import ClubRow, { ClubRowProps } from "../components/clubs/ClubRow";

const cards: ClubRowProps = {
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
  return <ClubRow {...cards} />;
}
