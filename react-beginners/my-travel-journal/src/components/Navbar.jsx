import globeImage from "../images/globe.png";

export default function Navbar() {
  return (
    <nav className="nav">
      <img src={globeImage} alt="Globe" />
      <h1>my travel journal.</h1>
    </nav>
  );
}
