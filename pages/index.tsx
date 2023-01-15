import Card from "../components/bingo/Card";

export default function Home() {
  return Card({
    clubNames: ["a", "b", "c", "d", "e", "f", "g", "h", "i"],
    backgroundColors: [
      "#FF0000",
      "#FF0000",
      "#FF0000",
      "#FF0000",
      "#FF0000",
      "#FF0000",
      "#FF0000",
      "#FF0000",
      "#FF0000",
    ],
  });
}
