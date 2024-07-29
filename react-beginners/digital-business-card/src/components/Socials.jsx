import xIcon from "../icons/x.png";
import facebookIcon from "../icons/facebook.png";
import instagramIcon from "../icons/instagram.png";
import gitHubIcon from "../icons/github.png";

export default function Socials({
  xUrl,
  facebookUrl,
  instagramUrl,
  gitHubUrl,
}) {
  return (
    <>
      <div className="socials">
        <a href={xUrl} target="_blank" rel="noopener noreferrer">
          <img src={xIcon} alt="X Icon" />
        </a>
        <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook Icon" />
        </a>
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram Icon" />
        </a>
        <a href={gitHubUrl} target="_blank" rel="noopener noreferrer">
          <img src={gitHubIcon} alt="GitHub Icon" />
        </a>
      </div>
    </>
  );
}
