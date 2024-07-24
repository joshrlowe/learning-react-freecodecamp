import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import data from "./data.js";

import photoGrid from "./images/photo-grid.png";

import "./index.css";

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero
          image={photoGrid}
          title="Online Experiences"
          description="Join unique interactive activities led by one-of-a-kind hosts—all without leaving home."
        />
        <section className="carousel">{cards}</section>
      </main>
    </>
  );
}
