import Card from "../components/bingo/Card";

export default function Home() {
  return Card({
    userId: 0,
    stamps: [{ clubName: "Club 1", backgroundColor: "#00FF00", visited: true }],
  });
}
