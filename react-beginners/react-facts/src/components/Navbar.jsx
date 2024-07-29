import reactLogo from "../images/logo512.png";

import "../styles.css";

export default function Navbar() {
  return (
    <nav>
      <img
        id="react-logo"
        src={reactLogo}
        alt="React.js Logo"
        className="nav--icon"
      />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
}
