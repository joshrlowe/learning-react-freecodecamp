import trollLogo from "../images/troll.png";

export default function Navbar() {
  return (
    <header className="header">
      <img src={trollLogo} alt="Troll Logo" className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
      <p className="header--project">React Course - Project 3</p>
    </header>
  );
}
