import Navbar from "./components/Navbar";
import Card from "./components/Card";

import data from "./data";

import "./styles.css";

export default function App() {
  const cards = data.map((location) => {
    return <Card {...location} />;
  });
  console.log(cards);
  return (
    <>
      <Navbar />
      <main>
        <div className="cards">{cards}</div>
      </main>
    </>
  );
}
