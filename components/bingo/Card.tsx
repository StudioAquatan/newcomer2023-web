import Stamp from "./Stamp";

type CardProps = {
  clubNames: Array<string>;
  backgroundColors: Array<string>;
};

export default function Card({ clubNames, backgroundColors }: CardProps) {
  const stamps = () => {
    const stamps = [];
    for (let i = 0; i < clubNames.length; i++) {
      stamps.push(
        <Stamp clubName={clubNames[i]} backgroundColor={backgroundColors[i]} />
      );
    }
    return stamps;
  };

  return (
    <div>
      <style jsx>{`
        #container {
          display: grid;
          grid-template-rows: 150px 150px 150px;
          grid-template-columns: 150px 150px 150px;
          justify-content: center;
          align-content: center;
        }
      `}</style>
      <div id="container">{stamps()}</div>
    </div>
  );
}
