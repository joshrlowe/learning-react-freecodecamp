export default function Title({ name, position, portfolioName, portfolioUrl }) {
  return (
    <>
      <h2 className="profile-name">{name}</h2>
      <p className="profile=position">{position}</p>
      <a
        href={portfolioUrl}
        className="profile-portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        {portfolioName}
      </a>
    </>
  );
}
