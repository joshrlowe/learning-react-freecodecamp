import airbnbLogo from "../images/airbnb.png";

export default function Navbar() {
  return (
    <div>
      <nav className="nav">
        <img src={airbnbLogo} alt="Airbnb Logo" className="nav-logo" />
      </nav>
    </div>
  );
}
