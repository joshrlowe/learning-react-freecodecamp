import emailIcon from "../icons/email.png";
import linkedInIcon from "../icons/linkedin.png";

export default function Contact({ email, linkedInUrl }) {
  email = "mailto:" + email;

  return (
    <div className="contact-info">
      <div className="btn">
        <img src={emailIcon} alt="" />
        <a href={email} target="_blank" rel="noopener noreferrer">
          Email
        </a>
      </div>
      <div className="btn">
        <img src={linkedInIcon} alt="" />
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </div>
  );
}
